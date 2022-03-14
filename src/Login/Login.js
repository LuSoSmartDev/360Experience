import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createUserSelector} from '../store/selector/PersistentStorageSelectors';
import {createPasswordSelector} from '../store/selector/PersistentStorageSelectors';
import {connectToRedux} from '../utils/ReduxConnect';
import PropTypes from 'prop-types';
import TextInputLogin from '../components/LoginComponents/TextInputLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreAllLogs();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Login({userName, passWord}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const SaveLogin = async () => {
    try {
      await AsyncStorage.setItem('FirstLogin', 'true');
    } catch (err) {
      alert(err);
    }
  };
  return (
    <ImageBackground
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      source={require('../../asset/bgrLogin.png')}>
      <SafeAreaView>
        <Text style={[styles.lable, styles.loginStyle]}>Login</Text>
        <View>
          <Text style={styles.lable}>Username:</Text>
          <TextInputLogin
            typePassword={false}
            OnchaneText={values => setUsername(values)}
            valuesText={username}
            valuePlaceholder="User name"
          />
        </View>
        <View style={{marginBottom: 30, marginTop: 15}}>
          <Text style={styles.lable}>Password:</Text>
          <TextInputLogin
            typePassword={true}
            OnchaneText={values => setPassword(values)}
            valuesText={password}
            valuePlaceholder="Password"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (username === userName && password === passWord) {
              navigation.navigate('Main');
              SaveLogin();
            } else {
              alert('Incorrect account or password');
            }
          }}
          style={styles.buttonLogin}>
          <Text style={[styles.lable, {textAlign: 'center'}]}>SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.viewRegister}>
          <Text
            style={[
              styles.textValues,
              {fontSize: 20, textDecorationLine: 'underline'},
            ]}>
            Register an account
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}
Login.propTypes = {
  userName: PropTypes.object,
  passWord: PropTypes.object,
};
export default connectToRedux({
  component: Login,
  stateProps: state => ({
    userName: createUserSelector()(state),
    passWord: createPasswordSelector()(state),
  }),
});
const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: windowWidth - 100,
  },
  lable: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  loginStyle: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 70,
  },
  buttonLogin: {
    backgroundColor: '#EB1B99',
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 30,
  },
  textValues: {
    color: 'white',
    fontSize: 15,
  },
  viewRegister: {
    alignItems: 'center',
  },
});
