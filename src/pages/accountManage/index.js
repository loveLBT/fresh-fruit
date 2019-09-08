import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import HeaderBar from '../../components/HeaderBar'
import MessageList from './MessageList'
import './index.scss'

class AccountManage extends Component {
  config = {
    navigationStyle: 'custom'
  }
  render() {
    return (
      <View className='page account-manage'>
        <HeaderBar title='账户管理' />
        <MessageList />
      </View>
    )
  }
} 

export default AccountManage