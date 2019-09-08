import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import icons from '../../../util/icons'
import './index.scss'

class SearchBar extends Component {
	render() {
		return (
			<View className='search-bar'>
				<Image className='search-icon' src={icons.search} />
				<Text className='search-txt'>搜索商品</Text>
			</View>
		)
	}
}

export default SearchBar