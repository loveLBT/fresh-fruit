import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import icons from '../../../util/icons'
import './index.scss'

class InfoBar extends Component {
  render() {
    return (
      <View className='info-bar'>
        <View className='row'>
          <Text className='label'>商品合计</Text>
          <Text className='value'>￥31.8</Text>
        </View>
        <View className='row'>
          <Text className='label'>优惠券</Text>
          <View className='value'>
            <View className='tag'>
              <Text className='txt'>1张可用</Text>
            </View>
            <Image className='icon' src={icons.arrow_right} />
          </View>
        </View>
        <View className='row'>
          <Text className='label'>会员折扣价</Text>
          <Text className='value'>￥31.8</Text>
        </View>
        <View className='row'>
          <Text className='label'>应付金额</Text>
          <Text className='value'>￥31.8</Text>
        </View>
      </View>
    )
  }
}

export default InfoBar