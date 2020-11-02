import React, {FormEvent} from 'react'
import CopyToClipBoard from 'react-copy-to-clipboard'
import {getIdolIndex, getAllLength, getIdolData} from './idols'
import './index.css'
import './createURL.css'
import Copy from './Copy.svg'
import CopyDark from './CopyDark.svg'

interface State {
  idols: boolean[],
  url: string,
  copied: boolean,
  isAllChecked: boolean
}

export class CreateURL extends React.Component<{}, State> {
  private url: string

  constructor(props: {}){
    super(props)

    this.url = 'http://リンク/'

    this.state = {
      idols: Array(getAllLength()).fill(false),
      url: this.url,
      copied: false,
      isAllChecked: false
    }

    this.opURL = this.opURL.bind(this)
    this.generateURL = this.generateURL.bind(this)
    this.createCheckBox = this.createCheckBox.bind(this)
    this.allChecks = this.allChecks.bind(this)
  }

  /**
   * URLの作成を行う。
   * チェックボックスの`data-name`を読み込み、そのuserを追加する。
   */
  opURL(event: FormEvent){
    const name = event.currentTarget.getAttribute('data-name')
    if(name != null){
      const index = getIdolIndex(name)
      const idols = this.state.idols

      // add or remove with checkbox state
      if(this.state.idols[index]){
        idols[index] = false
      }else{
        idols[index] = true
      }
      const url = this.generateURL(idols)

      this.setState(state => {
        return {
          idols: idols,
          copied: false,
          url: url,
          isAllChecked: false
        }
      })
    }
  }

  /**
   * URLを生成する。
   */
  generateURL(idols: boolean[]): string {
    const idolUrlNames: string[] = []

    idols.forEach((element, index) => {
      if(element){
        const idolData = getIdolData(index)
        if(idolData !== undefined){
          idolUrlNames.push(idolData.urlName)
        }
      }
    })
    if(idolUrlNames.length > 0){
      return `${this.url}?idols=${idolUrlNames.join(',')}`
    }
    return this.url
  }

  /**
   * 各チェックボックスを作成する。
   */
  createCheckBox() {
    let checkbox = []
    const slicedCheckbox = []
    const maxLength = getAllLength()
    for(let i = 1; maxLength >= i; ++i){
      const name = getIdolData(i-1)
      checkbox.push(
        <div>
          <input id={`box${i}`} type="checkbox" checked={this.state.idols[i-1]} onChange={this.opURL} data-name={name?.urlName} />
          <label htmlFor={`box${i}`}>{name?.name}</label>
        </div>
      )
      if(i % 4 == 0 || i === maxLength){
        slicedCheckbox.push(
        <div className="checkIdol">
          {checkbox}
        </div>)
        checkbox = []
      }
    }
    return slicedCheckbox
  }

  /**
   * 全選択と全選択解除
   */
  allChecks(){
    if(!this.state.isAllChecked){
      this.setState(state => ({
        idols: state.idols.map(() => true),
        isAllChecked: true,
        copied: false,
        url: this.generateURL(state.idols.map(() => true))
      }))
    }else{
      this.setState(state => ({
        idols: state.idols.map(() => false),
        isAllChecked: false,
        copied: false,
        url: this.generateURL(state.idols.map(() => false))
      }))
    }
  }

  render(){
    return (
      <div>
        <div className="allSelect">
          <button onClick={this.allChecks}>
            {this.state.isAllChecked ? "すべての選択を解除" : "すべてを選択"}
          </button>
        </div>
        {this.createCheckBox()}
        <div className="urlAndCopy">
          <div className="generatedUrl">
            <code>{this.state.url}</code>
          </div>
          <div className="copyButtonArea">
            <CopyToClipBoard text={this.state.url}
              onCopy={() => this.setState({copied: true})}>
              <button className="copyButton">
                {this.state.copied ? <div className="copied"><img src={CopyDark} className="copyLogo" /> コピーした！</div> : <div><img src={Copy} className="copyLogo" /> コピー</div>}
              </button>
            </CopyToClipBoard>
          </div>
        </div>
      </div>
    )
  }
}
