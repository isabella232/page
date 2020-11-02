import React from 'react'
import './index.css'
import {CreateURL} from './CreateURL'
import {Usage} from './Usage'
import {License} from './License'
import {Connection} from './Connection'

interface State {
  page: any
}

export class App extends React.Component<{}, State> {
  constructor(props: {}){
    super(props)

    this.state = {
      page: <CreateURL />
    }

    this.usage = this.usage.bind(this)
    this.home = this.home.bind(this)
    this.license = this.license.bind(this)
    this.connection = this.connection.bind(this)
  }

  home() {
    this.setState(state => ({
      page: <CreateURL />
    }))
  }

  usage() {
    this.setState(state => ({
      page: <Usage />
    }))
  }

  license(){
    this.setState(state => ({
      page: <License />
    }))
  }

  connection() {
    this.setState(state => ({
      page: <Connection />
    }))
  }

  render() {
    return (
      <div>
      <h1>ホロライブ ライブ カレンダー</h1>
      <ul className="tag">
        <li>
          <button onClick={this.home} className="menu">ホーム</button>
        </li>
        <li>
          <button onClick={this.usage} className="menu">使い方</button>
        </li>
        <li>
          <button onClick={this.license} className="menu">ライセンス</button>
        </li>
        <li>
          <a href="https://github.com/Holo-Live-Calendar" target="_blank" rel="noopener" className="menu">
            <u>ソースコード</u>
          </a>
        </li>
        <li>
          <button onClick={this.connection} className="menu">お問い合わせ</button>
        </li>
      </ul>
      {this.state.page}
      </div>
      )
    }
  }
