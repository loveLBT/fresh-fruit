import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import icons from '../../../util/icons'
import './index.scss'

class OrderStatusBar extends Component {
  render() {
    return (
      <View className='order-status-bar'>
        <Text className='title'>我的订单</Text>
        <View className='wrapper'>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={icons.all} />
              <View className='tag'>
                <Text className='value'>12</Text>
              </View>
            </View>
            <Text className='txt'>全部</Text>
          </View>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={icons.waitPay} />
              <View className='tag'>
                <Text className='value'>12</Text>
              </View>
            </View>
            <Text className='txt'>待付款</Text>
          </View>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={icons.waitDelivery} />
              <View className='tag'>
                <Text className='value'>12</Text>
              </View>
            </View>
            <Text className='txt'>待配送</Text>
          </View>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={icons.waitEvaluate} />
              <View className='tag'>
                <Text className='value'>12</Text>
              </View>
            </View>
            <Text className='txt'>待评价</Text>
          </View>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={icons.backPay} />
              <View className='tag'>
                <Text className='value'>12</Text>
              </View>
            </View>
            <Text className='txt'>退款/售后</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default OrderStatusBar