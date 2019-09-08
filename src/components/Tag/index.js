import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class Tag extends Component {
  render() {
    const { name } = this.props
    return (
      <View className='tag'>
        <Text className='txt'>{name}</Text>
      </View>
    )
  }
}

export default Tag