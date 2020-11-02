import React, {FormEvent} from 'react'
import ReactDOM from 'react-dom'
import CopyToClipBoard from 'react-copy-to-clipboard'
import {getIdolIndex, getAllLength, getIdolData} from './idols'
import './index.css'
import Copy from './Copy.svg'
import CopyDark from './CopyDark.svg'

interface State {
  idols: boolean[],
  url: string,
  copied: boolean
}

class CreateURL extends React.Component<{}, State> {
  constructor(props: {}){
    super(props)

    this.state = {
      idols: Array(getAllLength()).fill(false),
      url: 'http://g/',
      copied: false
    }

    this.opURL = this.opURL.bind(this)
    this.generateURL = this.generateURL.bind(this)
  }

  /**
   * URLの作成を行う。
   * チェックボックスの`data-name`を読み込み、そのuserを追加する。
   */
  opURL(event: FormEvent){
    const name = event.currentTarget.getAttribute('data-name')
    if(name != null){
      const index = getIdolIndex(name)
      console.log(this.state.idols[index])
      const idols = this.state.idols

      // add or remove with checkbox state
      if(this.state.idols[index]){
        idols[index] = false
      }else{
        idols[index] = true
      }
      const url = this.generateURL()

      this.setState(state => {
        return {
          idols: idols,
          copied: false,
          url: url
        }
      })
    }
  }

  /**
   * URLを生成する。
   */
  generateURL(): string {
    const idolUrlNames: string[] = []

    this.state.idols.forEach((element, index) => {
      if(element){
        const idolData = getIdolData(index)
        if(idolData !== undefined){
          idolUrlNames.push(idolData.urlName)
        }
      }
    })
    return `http://g/?idols=${idolUrlNames.join(',')}`
  }

  render(){
    return (
      <div>
        <div className="urlAndCopy">
          <div className="generatedUrl">
            {this.state.url}
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
        <input type="checkbox" checked={this.state.idols[getIdolIndex('korone')]} onChange={this.opURL} data-name="korone" />ころね
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <h1>ホロライブ ライブ カレンダー</h1>
    <ul className="tag">
      <li>使い方</li>
      <li>ライセンス</li>
      <li>お問い合わせ</li>
    </ul>
    <CreateURL />
  </div>,
  document.getElementById('root')
);
