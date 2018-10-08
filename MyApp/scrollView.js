/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
 ScrollView,
 Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
  var Dimensions=Require('Dimensions ');
  var {width}=Dimensions.get('window');
//引入定时器
var TimerMixin=require('react-timer-mixin');
var ImageData=require('./imageData.json');
var	scrollView=React.createClass({
  mixins:[TimerMixin],
  //设置固定值
  getDefaultProps(){
    return{
      duration:1000
    }
  },
  //设置可变的和初始值
  getInitialState(){
    return{
       //当前页码
       currentPage:0
    }
    
  },
  render(){
    return(
      <View>
          <ScrollView  
          ref="scrollView"
          horizontal={true} 
          //隐藏水平滚动条
             showsHorizontalScrollIndicator={false}
             //自动分页
              pagingEnable={true}
              //当一帧滚动结束
              onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
              //开始拖拽
              onScrollBeginDrag={this.onScrollBeginDrag}
              //停止拖拽
              onScrollEndDrag={this.onScrollEndDrag}
          >
            {this.renderAllImage()}
          </ScrollView>
          {/* 返回指示器5个圆点 */}
          <View style={styles.pageViewStyle}>
            {this.renderPageCircle()}
          </View>
      </View>
    )
  },
  //调用开始拖拽
  onScrollBeginDrag(){
    //停止定时器
    this.clearInterval(this.timer);
  },
  //调用停止拖拽
  onScrollEndDrag(){
     //开启定时器
    this.startTimer();
  },
  //实现一些复杂的操作
  componentDidMount(){
    //开启定时器
    this.startTimer();
  },
  startTimer(){
    //拿到scrollView
      var scrollView=this.refs.scrollView;
      var imgCount=ImageData.data.length;
      //添加定时器
      this.setInterval(function(){
        var activePage=0;
        if((this.state.currentPage+1)>=imgCount){
          //越界
          activePage=0;
        }else{
          activePage=this.state.currentPage+1;
        }
        // 更新状态机
        this.setState({
          currentPage:activePage
        })
        //让scrollView滚动起来
        var offsetX=activePage*width;
        scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});

      },this.props.duration)
  },

  renderAllImage(){
    var allImage=[];
    //拿到图像数组
    var imgArr=ImageData.data;
    for(var i=0;i<imgArr.length;i++){
      var imgItem=imgArr[i];
      //创建组件装入数组
      allImage.push(
        <Image key={i} source={{uri:imgItem.img}} style={{width:width,height:120}}/>
      );
    }
    return allImage;
    
  },
  renderPageCircle(){
    var indicatorArr=[];
    var style;
    var imgArr=ImageData.data;
    for(var i=0;i<imgArr.length;i++){
      style=(i==this.state.currentPage)?{color:'orange'}:{color:'#fff'}
      indicatorArr.push(
        <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
      );
    }
    return indicatorArr;
  },
  //当一帧滚动结束的时候调用
  onAnimationEnd(e){
    var offSetX=e.nativeEvent.contentOffset.x;
    //求出当前页数
    var currentPage=Math.floor(offSetX/width);
    // console.log(currentPage);
    //更新状态机重新绘制ui
    this.setState({
      currentPage:currentPage
    })
  }
})


const styles = StyleSheet.create({
  container: {
    marginTop:25
  },
  pageViewStyle:{
    width:width,
    height:25,
    backgroundColor:'rgba(0,0,0,0.2)',
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignItems:'center'
  }
 

});
