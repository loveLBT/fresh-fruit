import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import icons from '../.././../util/icons'
import './index.scss'

class FruitItem extends Component {
  static defaultProps = {
    img: '',
    title: '',
    vipPrice: 0,
    price: 0
  }
  render() {
    const { img, title, vipPrice, price } = this.props

    return (
      <View className='fruit-item'>
        <Image className='img' src={img} />
        <Text className='name'>{title}</Text>
        <View className='info'>
          <Text className='price1'>￥{vipPrice}</Text>
          <Text className='price2'>￥{price}</Text>
          <Image className='basket' src={icons.basket} />
        </View>
      </View>
    )
  }
}

export default FruitItem