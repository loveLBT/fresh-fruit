import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
// 
import './styles/base.scss'

class App extends Component {

  config = {
    pages: [
      'pages/order/index',
      'pages/AddAddress/index',
      'pages/index/index',
      'pages/basket/index',
      'pages/my/index',
      'pages/message/index',
      'pages/accountManage/index',
      'pages/search/index',
      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#00e072',
      navigationBarTitleText: '鲜果果',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './images/icon/tab_index.png',
        selectedIconPath: './images/icon/tab_index_active.png'
      },{
        pagePath: 'pages/basket/index',
        text: '果篮',
        iconPath: './images/icon/tab_basket.png',
        selectedIconPath: './images/icon/tab_basket_active.png'
      },{
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: './images/icon/tab_account.png',
        selectedIconPath: './images/icon/tab_account_active.png'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
