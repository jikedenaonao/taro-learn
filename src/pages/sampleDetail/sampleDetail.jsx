import Taro, { Component } from '@tarojs/taro'
import {View, Button, Text, Picker, Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './sampleDetail.less'


@inject('counterStore')
@observer
class SampleDetail extends Component {

  config = {
    navigationBarTitleText: '样品详情'
  }
  constructor(props) {
    super(props)
    const info = Taro.getSystemInfoSync();
    const {windowWidth} = info;
    this.state = {
      windowWidth,
    }
  }

  render () {
    const {windowWidth} = this.state;
    return (
      <View>
        <View
          style={{background:`url(${require('../../images/projectDetail.png')}) no-repeat`,backgroundColor: 'rgba(244,244,244,1)',backgroundPosition:'center',backgroundSize:'cover',width:'100%',height: `${windowWidth / 1.84}px`}}
        >
        </View>
      </View>
    )
  }
}

export default SampleDetail
