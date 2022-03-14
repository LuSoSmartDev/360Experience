import React from 'react';
import {ImageBackground, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile() {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../asset/bgrLogin.png')}>
      <Text>helooo</Text>
    </ImageBackground>
  );
}
export default Profile;
