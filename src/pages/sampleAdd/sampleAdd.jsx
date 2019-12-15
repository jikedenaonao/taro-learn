import Taro, { Component } from '@tarojs/taro'
import {View, Button, Text, Input, Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton } from 'taro-ui'

import './sampleAdd.less'


@inject('counterStore')
@observer
class Sampleadd extends Component {

  config = {
    navigationBarTitleText: '新增样品'
  }

  render () {
    return (
      <View>
        <View style={{display:'flex',alignItems:'center',marginTop:'10px'}}>
          <View style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <View style={{backgroundColor: 'rgba(127,164,235,1)', height: '20px', width: '2px',}} ><Text /></View>
          </View>
          <View style={{flex:9,fontSize:'14pt'}}>新增样品</View>
        </View>

        <View style={{margin:'15px'}}>



          <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'40px'}}>
            <View style={{flex:1}}>
              <Image
                src={require('../../images/schoolTag.png')}
                style={{width:'20px',height:'20px'}}
              />
            </View>
            <View style={{flex:2,fontSize:'13pt',textAlign:'right'}}>
              <Text>采样学校</Text>
            </View>
            <View style={{flex:3,fontSize:'12pt'}}>
              <Text>&nbsp;&nbsp;&nbsp;实验小学</Text>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text />
          </View>




          <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'40px'}}>
            <View style={{flex:1,fontSize:'13pt',textAlign:'right'}}>
              <Text>样品名称</Text>
            </View>
            <View style={{flex:3,fontSize:'12pt'}}>
              <Input type='text' placeholder='请输入样品名称' focus style={{marginLeft:'15px',}} />
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text />
          </View>
          <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'40px'}}>
            <View style={{flex:1,fontSize:'13pt',textAlign:'right'}}>
              <Text>样品名称</Text>
            </View>
            <View style={{flex:3,fontSize:'12pt'}}>
              <Input type='text' placeholder='请输入样品名称' focus style={{marginLeft:'15px',}} />
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text />
          </View>
        </View>

        <View style={{width:'100%',height:'60px'}}>
          <View style={{width:'90%',marginLeft:'5%'}}>
            <AtButton type='primary' size='normal'>按钮文案</AtButton>
          </View>
        </View>

      </View>
    )
  }
}

export default Sampleadd
