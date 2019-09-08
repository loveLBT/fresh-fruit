import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import HeaderBar from '../../components/HeaderBar'
import BasketList from './BasketList'
import SeasonBar from './SeasonBar'
import SettlementBar from './SettlementBar'
import './index.scss'

class Basket extends Component {

  config = {
    navigationStyle: 'custom'
  }

  render () {
    return (
      <View className='page basket'>
        <HeaderBar title="果篮" />
        <BasketList />
        <SeasonBar />
        <SettlementBar />
      </View>
    )
  }
}

export default Basket 
