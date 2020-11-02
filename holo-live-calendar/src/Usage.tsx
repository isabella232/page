import React from 'react'
import './index.css'
import './usage.css'
import usage1 from './usage1.png'
import usage2 from './usage2.png'

export class Usage extends React.Component<{}, {}> {
  constructor(props: {}){
    super(props)

  }

  render() {
    return (
      <div className="usage">
      <h3>1. 好きなVを選ぶ</h3>
      <div>好きなVtuberを選び、「コピー」を押してURLをコピーします。</div>
      <h3>2. Googleカレンダーを開く</h3>
      <div>Googleカレンダーを開き歯車アイコンから設定を開きます。<br/>スマホアプリからでは追加できないので、PCを使用するかSafariやChromeなどのブラウザから開いてください。</div>
      <div className="image"><img src={usage1} /></div>
      <h3>3. URLで追加</h3>
      <div>設定の左のメニューから<b>カレンダーを追加</b>→<b>URLで追加</b>を押します。</div>
      <div className="image"><img src={usage2} /></div>
      <h3>4. URLを貼り付ける。</h3>
      先程コピーしたURLを貼り付けて<b>カレンダーを追加</b>を押し、追加します。
      </div>
      )
    }
  }
