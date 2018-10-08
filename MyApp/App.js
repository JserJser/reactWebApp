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
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var BadgeData=require('./BadgeData.json');
// 定义全局变量
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');
var cols=3;
var boxW=100;
var vMargin=(width-cols*boxW)/(cols+1);
var hMargin=25;
// type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       {this.renderAllBadge()}
      </View>
    );
  }
  renderAllBadge(){
    var allBadge=[];
    for(var i=0;i<BadgeData.data.length;i++){
      var badge=BadgeData.data[i];
      allBadge.push(
        <View key={i} style={styles.outViewStyle}>
          <Image source={{uri:badge.icon}} style={styles.imageStyle}/>
            <Text style={styles.titleStyle}>{badge.title}</Text>
        </View>
      );
    }
    return allBadge;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    //换行
    flexWrap:'wrap'
  },
  outViewStyle:{
    backgroundColor:'gray',
    alignItems:'center',
    width:boxW,
    height:boxW,
    marginLeft:vMargin,
    marginTop:hMargin
  },
  imageStyle:{
    width:80,
    height:80
  },
  titleStyle:{

  }

});
