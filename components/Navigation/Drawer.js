import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import NavBar from './Navbar';
import SimSelect from '../SimSelect';
import AboutYouScreen from '../Screens/AboutYouScreen';

const HambDrawer = createDrawerNavigator()
const Drawer = () => {
    return (
        <HambDrawer.Navigator initialRouteName="My Home">
            <HambDrawer.Screen name="My Home" component={NavBar}/>
            <HambDrawer.Screen name = "Logout" component={SimSelect}/>
            <HambDrawer.Screen name = "About You" component={AboutYouScreen}/>
        </HambDrawer.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Drawer;
