import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

import theme from '../../../constants/theme.js'
import './index.scss'

class SwiperBar extends Component {
	render() {
		return (
			<View className='swiper-bar'>
				<Swiper
	        indicatorColor='#999'
	        indicatorActiveColor={theme.primaryColor}
	        circular
	        indicatorDots
	        autoplay
	      >
	        <SwiperItem key={1}>
	        	<Image className='img' src={require('../../../images/banner.png')} />
	      	</SwiperItem>
	      </Swiper>
			</View>
		)
	}
}

export default SwiperBar