import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { DB } from '@/utils/DB'
import './index.scss'

import Login from '../../components/login/index'

export default class Index extends Component {
  componentWillMount() {
    console.log(DB)
    Taro.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline'],
    }).catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getGroupUser()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getShareInfo() {}

  async getGroupUser() {
    // const groupId = Taro.getStorageSync('groupId')
    // if (!groupId) return
    // const isHasGroup = await DB.collection('group')
    //   .where({ groupId })
    //   .get().data.length
    // if(!isHasGroup){
    // }
  }
  render() {
    return (
      <View className='index'>
        <Login />
        <van-button type='primary' onClick={this.getShareInfo}>
          1111
        </van-button>
      </View>
    )
  }
}
