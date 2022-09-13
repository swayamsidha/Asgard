import React from 'react';
import {View, StyleSheet,Text, TouchableHighlight, ScrollView, Image} from 'react-native';
import HomeStyle from '../styles/HomeStyle';
const HomeScreen = () => {



    const raiseQuaterComplaint = (complaint) => {
        console.log(`${complaint} Complaint Raised`)
    }
    return (
        <ScrollView>
                <View style={{paddingTop:30, alignItems:'center'}}>
                        <Image
                        style={{width: 300, height: 300}}
                        source={{
                        uri: 'https://i.pinimg.com/736x/71/90/e9/7190e9a8909ee8b56b24e555873fcc5b.jpg',
                        }}
                    />
                </View>
                <View style={{paddingTop:100,paddingLeft:20, paddingRight:20, flex:6, flexDirection: 'row'}}>
                    <TouchableHighlight style={HomeStyle.rectangle1} onPress={() => raiseQuaterComplaint('quater')}>
                            <Text style={{width:90, textAlign:'center', marginLeft:20}}>
                                Raise Quater Complaint
                            </Text>
                    </TouchableHighlight>
                    <View style={{flex:1}}></View>
                    <TouchableHighlight style={HomeStyle.rectangle2} onPress={() => raiseQuaterComplaint('community')}>
                            <Text style={{ textAlign:'center', marginLeft:10}}>
                                Raise Community Complaint
                            </Text>
                    </TouchableHighlight>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
