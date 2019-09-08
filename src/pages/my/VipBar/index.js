import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import icons from '../../../util/icons'
import './index.scss'

class VipBar extends Component {
  render() {
    return (
      <View className='vip-bar'>
        <Text className='title'>VIP充值</Text>
        <View className='wrapper'>
          <Image className='img' src={icons.vip_card_300} />
          <Image className='img' src={icons.vip_card_500} />
        </View>
      </View>
    )
  }
}

export default VipBar