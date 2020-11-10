import React from 'react'
import './index.css'
import {CreateURL} from './CreateURL'
import {Usage} from './Usage'
import {License} from './License'
import {Connection} from './Connection'
import { BrowserRouter, Route, Link } from 'react-router-dom';

export class App extends React.Component<{}, {}> {
  constructor(props: {}){
    super(props)
  }

  render() {
    return (
      <div>
      <BrowserRouter>
      <h1>ホロライブ ライブ カレンダー</h1>
      <ul className="tag">

        <li>
          <Link to="/">
            <button className="menu">ホーム</button>
          </Link>
        </li>
        <li>
          <Link to="/usage">
            <button className="menu">使い方</button>
          </Link>
        </li>
        <li>
          <Link to="license">
            <button className="menu">ライセンス</button>
          </Link>
        </li>
        <li>
          <a href="https://github.com/Holo-Live-Calendar" target="_blank" rel="noopener" className="menu">
            <u>ソースコード</u>
          </a>
        </li>
        <li>
          <Link to="contact">
            <button className="menu">お問い合わせ</button>
          </Link>
        </li>
      </ul>
      <div>
        <Route path="/" exact component={CreateURL} />
        <Route path="/usage" component={Usage} />
        <Route path="/license" component={License} />
        <Route path="/contact" component={Connection} />
      </div>
    </BrowserRouter>
    </div>
      )
    }
  }
