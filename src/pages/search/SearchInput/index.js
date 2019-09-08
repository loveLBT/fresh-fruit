import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'

import icons from '../../../util/icons'
import './index.scss'

class SearchInput extends Component {
  render() {
    return (
      <View className='search-input'>
        <Image className='icon' src={icons.search} />
        <Input 
          className='input' 
          placeholder='搜索商品'
          placeholderClass='placeholderClass'
        />
      </View>
    )
  }
}

export default SearchInput