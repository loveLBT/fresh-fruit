import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

const tabList = [
  {title: '未使用'},
  {title: '已使用'},
  {title: '已过期'}
]

class Coupon extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      current: 0
    }
  }
  onClick = (value) => {
    this.setState({
      current: value
    })
  }
  render() {
    const { current } = this.state

    return (
      <View className='coupon'>
        <AtTabBar
          tabList={tabList}
          onClick={this.onClick.bind(this)}
          current={current}
        />
      </View>
    )
  }
}

export default Coupon