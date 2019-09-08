import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import SearchBar from '../SearchBar/'
import icons from '../../../util/icons'
import './index.scss'

class HeaderBar extends Component {
  onMessageClick = () => {
    Taro.navigateTo({
      url: '/pages/message/index'
    })
  }
	render() {
		return (
			<View className='header-bar'>
				<Image 
          onClick={this.onMessageClick.bind(this)} 
          className='message' 
          src={icons.message} 
        />
				<SearchBar />
			</View>
		)
	}
}

export default HeaderBar