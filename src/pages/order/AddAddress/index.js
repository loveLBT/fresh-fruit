import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import icons from '../../../util/icons'
import './index.scss'

class AddAddress extends Component {
  render() {
    return (
      <View className='add-address'>
        <Image className='img' src={icons.add} />
        <Text className='txt'>选择收货地址</Text>
      </View>
    )
  }
}

export default AddAddress