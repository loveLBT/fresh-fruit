import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

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
        <View className='action-wrapper'>
          <Image 
            onClick={this.onMessageClick.bind(this)} 
            className='message-icon' 
            src={icons.message} 
          />
        </View>
				<View className='info'>
          <View className='avator'>
            <Image className='vip' src={icons.vip} />
          </View>
          <Text className='account'>13575407573</Text>
        </View>
        
			</View>
		)
	}
}

export default HeaderBar