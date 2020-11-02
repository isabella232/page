import React, {FormEvent} from 'react'
import ReactDOM from 'react-dom'
import CopyToClipBoard from 'react-copy-to-clipboard'
import {getIdolIndex, getAllLength, getIdolData} from './idols'
import './index.css'

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
      url: '',
      copied: false
    }

    this.opURL = this.opURL.bind(this)
    this.generateURL = this.generateURL.bind(this)
  }

  opURL(event: FormEvent){
    const name = event.currentTarget.getAttribute('data-name')
    if(name != null){
      const index = getIdolIndex(name)
      console.log(this.state.idols[index])
      const idols = this.state.idols

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
    return `http://g/?${idolUrlNames.join('&')}`
  }

  render(){
    return (
      <div>
        <div>
          {this.state.url}
        </div>
        <CopyToClipBoard text={this.state.url}
          onCopy={() => this.setState({copied: true})}>
          <button>{this.state.copied ? 'コピーした！' : 'コピー'}</button>
        </CopyToClipBoard>
        <div>
        <input type="checkbox" checked={this.state.idols[getIdolIndex('korone')]} onChange={this.opURL} data-name="korone" />ころね
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <CreateURL />,
  document.getElementById('root')
);
