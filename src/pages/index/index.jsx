import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image,Icon  } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '校园食品监管'
  };

  constructor (props) {
    super(props)
    const info = Taro.getSystemInfoSync();
    const { windowWidth } = info;
    this.state = {
      windowWidth,
    }
  }

  /**
   * 跳转到检测界面
   */
  onHandleGetInspectionPage = () =>{
    console.log('跳转到检测界面');
    Taro.navigateTo({
      url: '/pages/inspectionList/inspectionList'
    })
  };
  /**
   * 跳转到新增样品界面
   */
  onHandleGetAddSamplePage = () =>{
    console.log('跳转到新增样品界面');
    Taro.navigateTo({
      url: '/pages/sampleAdd/sampleAdd'
    })
  };

  render () {
    const { windowWidth } = this.state;
    return (
      <View>
        <View style={{position: 'relative' }}>
          <Image
            src={require('../../images/schoolBackground.png')}
            style={{width:'100%',height:`${windowWidth /3}px`}}
          />

          <View
            className='school_name'
          >
            <View
              className='school_style'
            >
              <Text style={{  lineHeight:'100px',fontSize:'20px',}}> 实验一中 </Text>
            </View>
          </View>

          <View
            style={{width:'80px',position:'absolute',top:'65%',left:'50%',transform:'translate(-50%,-50%)'}}
          >
            <Image
              src='http://www.yuntsoft.com:7389/group1/M00/01/35/rBDZEl06udyAd2IsAAko5fIOHUw644.png'
              style={{ borderRadius: '160px', width: '80px', height: '80px', border: '2px solid #FFFFFF',zIndex:999}}
            />
          </View>

        </View>
        <View style={{backgroundColor:'rgba(244,244,244,1)',height:'50px',width:'100%',marginTop:'-10px'}}>
          <Text />
        </View>
        <View style={{display:'flex',alignItems:'center',height:'46px',width:'100%',color:'#666666',fontSize:'14px',}}>
            <View style={{flex:1,display:'flex',justifyContent: 'flex-end'}}>
              <Image
                src={require('../../images/schoolAddressName.png')}
                style={{width:'20px',height:'20px'}}
              />
            </View>
            <View style={{flex:2,display:'flex',justifyContent: 'center'}}>
              <Text>注册地址</Text>
            </View>
            <View style={{flex:6,display:'flex',justifyContent: 'flex-end',marginRight: '20px'}}>
              <Text>西安市鄠邑区画展街16号</Text>
            </View>
        </View>
        <View style={{backgroundColor:'rgba(244,244,244,1)',height:'5px',width:'100%',}}>
          <Text />
        </View>
        <View style={{display:'flex',alignItems:'center',height:'46px',width:'100%',color:'#666666',fontSize:'14px',}}>
            <View style={{flex:1,display:'flex',justifyContent: 'flex-end'}}>
              <Image
                src={require('../../images/enterprisePeople.png')}
                style={{width:'20px',height:'20px'}}
              />
            </View>
            <View style={{flex:2,display:'flex',justifyContent: 'center'}}>
              <Text>负责人</Text>
            </View>
            <View style={{flex:6,display:'flex',justifyContent: 'flex-end',marginRight: '20px'}}>
              <Text>冯收名</Text>
            </View>
        </View>
        <View style={{backgroundColor:'rgba(244,244,244,1)',height:'5px',width:'100%',}}>
          <Text />
        </View>
        <View style={{display:'flex',alignItems:'center',height:'46px',width:'100%',color:'#666666',fontSize:'14px',}}>
            <View style={{flex:1,display:'flex',justifyContent: 'flex-end'}}>
              <Image
                src={require('../../images/enterprisePhone.png')}
                style={{width:'20px',height:'20px'}}
              />
            </View>
            <View style={{flex:2,display:'flex',justifyContent: 'center'}}>
              <Text>联系电话</Text>
            </View>
            <View style={{flex:6,display:'flex',justifyContent: 'flex-end',marginRight: '20px'}}>
              <Text>13609255309</Text>
            </View>
        </View>
        <View style={{backgroundColor:'rgba(244,244,244,1)',height:'5px',width:'100%',}}>
          <Text />
        </View>
        <View style={{display:'flex',alignItems:'center',height:'46px',width:'100%',color:'#666666',fontSize:'14px',}}>
            <View style={{flex:1,display:'flex',justifyContent: 'flex-end'}}>
              <Image
                src={require('../../images/enterpriseNum.png')}
                style={{width:'20px',height:'20px'}}
              />
            </View>
            <View style={{flex:2,display:'flex',justifyContent: 'center'}}>
              <Text>就餐人数</Text>
            </View>
            <View style={{flex:6,display:'flex',justifyContent: 'flex-end',marginRight: '20px'}}>
              <Text>1200</Text>
            </View>
        </View>
        <View style={{backgroundColor:'rgba(244,244,244,1)',height:'5px',width:'100%',}}>
          <Text />
        </View>
        <View style={{display:'flex',alignItems:'center',height:'46px',width:'100%',color:'#666666',fontSize:'14px',}}>
          <View style={{flex:1,display:'flex',justifyContent: 'flex-end'}}>
            <Image
              src={require('../../images/schoolTag.png')}
              style={{width:'20px',height:'20px'}}
            />
          </View>
          <View style={{flex:2,display:'flex',justifyContent: 'center'}}>
            <Text>企业类型</Text>
          </View>
          <View style={{flex:6,display:'flex',justifyContent: 'flex-end',marginRight: '20px'}}>
            <Text>民办</Text>
          </View>
        </View>
        <View style={{backgroundColor:'rgba(244,244,244,1)',height:'5px',width:'100%',}}>
          <Text />
        </View>
        <View style={{display:'flex',alignItems:'center',height:'46px',width:'100%',color:'#666666',fontSize:'14px',}}>
          <View style={{flex:1,display:'flex',justifyContent: 'flex-end'}}>
            <Image
              src={require('../../images/enterpriseRecord.png')}
              style={{width:'20px',height:'20px'}}
            />
          </View>
          <View style={{flex:2,display:'flex',justifyContent: 'center'}}>
            <Text>检测台账</Text>
          </View>
          <View
            style={{flex:6,display:'flex',justifyContent: 'flex-end',marginRight: '20px'}}
            onClick={this.onHandleGetInspectionPage}
          >
            <Image
              src={require('../../images/right.png')}
              style={{width:'25px',height:'25px'}}
            />
          </View>
        </View>
        <View style={{backgroundColor:'rgba(244,244,244,1)',height:'5px',width:'100%',}}>
          <Text />
        </View>
        <View style={{display:'flex',alignItems:'center',height:'46px',width:'100%',color:'#666666',fontSize:'14px',}}>
          <View style={{flex:1,display:'flex',justifyContent: 'flex-end'}}>
            <Image
              src={require('../../images/add.png')}
              style={{width:'20px',height:'20px'}}
            />
          </View>
          <View style={{flex:2,display:'flex',justifyContent: 'center'}}>
            <Text>新增样品</Text>
          </View>
          <View
            style={{flex:6,display:'flex',justifyContent: 'flex-end',marginRight: '20px'}}
            onClick={this.onHandleGetAddSamplePage}
          >
            <Image
              src={require('../../images/right.png')}
              style={{width:'25px',height:'25px'}}
            />
          </View>
        </View>
        <View style={{backgroundColor:'rgba(244,244,244,1)',height:'5px',width:'100%',}}>
          <Text />
        </View>
      </View>
    )
  }
}

export default Index
