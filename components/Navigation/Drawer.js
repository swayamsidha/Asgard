import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import NavBar from './Navbar';

const HambDrawer = createDrawerNavigator()
const Drawer = () => {
    return (
        <HambDrawer.Navigator>
            <HambDrawer.Screen name="Home" component={NavBar}/>
        </HambDrawer.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Drawer;
