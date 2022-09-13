import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComplaintScreen from '../Screens/ComplaintScreen';
import FeedbackScreen from '../Screens/FeedbackScreen';
import HomeScreen from '../Screens/HomeScreen';
import React from 'react';
import {ScrollView, View, Button, TouchableHighlight} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHouse, faComment, faThumbsUp, faBars} from '@fortawesome/free-solid-svg-icons'
//import { useNavigation } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function NavBar() {

  //const hambNav = useNavigation()
  return (
          <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{
              tabBarIcon: () => (
                <FontAwesomeIcon icon={faHouse} style={{color:'#1a7ded'}} size={25}/>
              ),
              headerLeft: () => (
                <TouchableHighlight onPress={() => console.log('hambNav')}>
                      <FontAwesomeIcon icon={faBars} style={{color:'#1a7ded'}} size={25} />
                </TouchableHighlight>
          )
            }}/>
          <Tab.Screen name="Complaint" component={ComplaintScreen}  options={{
            tabBarIcon:() => (
              <FontAwesomeIcon icon={faComment} style={{color:'#1a7ded'}} size={25}/>
            )
          }}/>
          <Tab.Screen name = "Feedback" component={FeedbackScreen} options={{
            tabBarIcon:() => (
              <FontAwesomeIcon icon={faThumbsUp} style={{color:'#1a7ded'}} size={25}/>
            )
          }}/>
        </Tab.Navigator>
  );
}
export default NavBar