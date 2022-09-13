import React from 'react'
import PropTypes from "prop-types";
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';
import {Image, ToastAndroid, Platform} from 'react-native';
import SimStyle from './styles/SimStyle'
import Toast from 'react-native-toast-message';
export default function SimSelect({navigation}) {

  const getSimData = () => {
    //get phone number
    console.log(Platform)
    if(Platform.OS == 'android'){
      ToastAndroid.show('Sim Selected..', ToastAndroid.SHORT)
    }
    navigation.navigate('home')

  }
  return (
   <ScrollView>
        <Image source={require('./assets/circuitBoard.png')} style = {SimStyle.topLogo} />
        <Text  style={SimStyle.selectSimToLogin}>Select Sim To Login</Text>
        <View style={{paddingTop:120,paddingLeft:20, paddingRight:20, flex:6, flexDirection: 'row'}}>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={getSimData} style={{flex:2.5}}>
                <View style={[SimStyle.rectangle1]}>
                  <Image source={require('./assets/simCard.png')} style={SimStyle.sim1_img} />
                  <Text style={SimStyle.sim1}>Sim 1</Text>
                </View>
            </TouchableHighlight>
              <View style={{flex:1}}></View>
              <TouchableHighlight>
                  <View style={[SimStyle.rectangle2, {flex:2.8}]}>
                    <Image source={require('./assets/simCard.png')} style={SimStyle.sim1_img} />
                    <Text style={SimStyle.sim1}>Sim 2</Text>
                  </View>
              </TouchableHighlight>
        </View>
    </ScrollView>
  )
}