import React, { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.scss'

class App extends Component {
  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow(res) {
    this.getShareInfo(res.shareTicket)
    console.log(res)
  }
  getShareInfo(shareTicket) {
    if (!shareTicket) return
    Taro.getShareInfo({ shareTicket }).then(res => {
      console.log(res.cloudID)
      Taro.cloud
        .callFunction({
          name: 'getShareInfo',
          data: {
            info: Taro.cloud.CloudID(res.cloudID),
          },
        })
        .then(res => {
          Taro.setStorageSync('groupId', res.result.info.data.openGId)
        })
    })
  }
  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
