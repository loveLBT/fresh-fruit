import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import HeaderBar from './HeaderBar'
import SwiperBar from './SwiperBar'
import CategoryBar from './CategoryBar'
import FruitList from './FruitList'
import './index.scss'

class Index extends Component {
  config = {
    navigationStyle: 'custom'
  }

  render () {
    return (
      <View className='page index'>
        <HeaderBar />
        <SwiperBar />
        <CategoryBar />
        <FruitList />
      </View>
    )
  }
}

export default Index 
