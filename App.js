import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import SimSelect from './components/SimSelect';
import NavBar from './components/Navigation/Navbar'
import Drawer from './components/Navigation/Drawer';
//import Drawer from './components/Navigation/Drawer';
import { PermissionsAndroid } from 'react-native'

import { NavigationContainer as Router } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'react-native-svg';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE)

const Stack = createNativeStackNavigator();

const App = () => {

  
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


 
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
          <Router>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen  name="login" component={SimSelect} options={{
                title: 'Railway Colony Management',
                headerStyle: {
                backgroundColor: '#3ab2f2'
              },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: 'white'
                },
              }}/>
              

              <Stack.Screen  name="home" component={NavBar} options={{headerShown: false}}/>

            </Stack.Navigator>

            
          </Router>
    </GestureHandlerRootView>
  );
};

export default App;
