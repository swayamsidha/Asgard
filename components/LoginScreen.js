import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  GestureResponderEvent,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback, 
  TextInput
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import styles from './components/styles/Styles';




//AppButton
const AppButton = ({onPress,title,}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const LoginScreen = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [progress, setProgress] = useState('');

    const isDarkMode = useColorScheme() === 'dark';

    const triggerPhoneCheck = () => {
        setIsLoading(true);
        Keyboard.dismiss();
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextInput
          keyboardType="phone-pad"
          placeholder="Phone number"
          placeholderTextColor="#d3d3d3"
          style={styles.input}
          value={phoneNumber}
          onChangeText={(phone) => setPhoneNumber(phone.replace(/\s+/g, ''))}
          focusable={!isLoading}
        />
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              color={styles.loadingContainer.color}
              size="large"
            />
            <Text>{progress}</Text>
          </View>
        ) : (
          <View>
            <AppButton
              title="Verify my phone number"
              onPress={triggerPhoneCheck}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({})

export default LoginScreen;
