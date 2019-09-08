import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class HeaderBar extends Component {
	render() {
    const { title } = this.props

		return (
			<View className='header-bar'>
				<View className='back'></View>
				<Text className='title'>{title}</Text>
        <View className='right'></View>
			</View>
		)
	}
}

export default HeaderBar