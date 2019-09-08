import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import icons from '../../../util/icons'
import './index.scss'

class ServiceBar extends Component {
  render() {
    return (
      <View className='service-bar'>
        <Text className='title'>我的服务</Text>
        <View className='wrapper'>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-start' src={icons.start} />
            </View>
            <Text className='txt'>我的收藏</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-position' src={icons.position} />
            </View>
            <Text className='txt'>地址管理</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-about' src={icons.about} />
            </View>
            <Text className='txt'>关于我们</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-delivery' src={icons.delivery} />
            </View>
            <Text className='txt'>配送说明</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-question' src={icons.question} />
            </View>
            <Text className='txt'>退货说明</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-setting' src={icons.setting} />
            </View>
            <Text className='txt'>设置</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ServiceBar