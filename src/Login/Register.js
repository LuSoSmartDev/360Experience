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
  Image,
  LogBox,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PersistentStorageActions from '../store/actions/PersistentStorageActions';
import {connectToRedux} from '../utils/ReduxConnect';
import {createUserSelector} from '../store/selector/PersistentStorageSelectors';
import PropTypes from 'prop-types';
LogBox.ignoreAllLogs();
const windowWidth = Dimensions.get('window').width;

function Register({setUser, setPassword, userName}) {
  const [email, setEmail] = useState();
  const [username, setusetname] = useState();
  const [password, setpassword] = useState();
  const navigation = useNavigation();
  const handleSubmit = () => {
    if (userName === username) {
      alert('Account already exists');
    } else {
      setUser(username), setPassword(password);
      Alert.alert('Successful account registration', '', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  };
  return (
    <ImageBackground
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      source={require('../../asset/bgrLogin.png')}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.stylePrev}>
        <Image
          style={{width: 15, height: 25, resizeMode: 'stretch'}}
          source={require('../../asset/prevIcon.png')}
        />
      </TouchableOpacity>
      <SafeAreaView>
        <Text style={[styles.lable, styles.loginStyle]}>Register</Text>
        <View>
          <Text style={styles.lable}>Username:</Text>
          <TextInput
            returnKeyType="next"
            keyboardType="numeric"
            onChangeText={values => setusetname(values)}
            style={styles.inputStyle}>
            <Text style={styles.textValues}>{username}</Text>
          </TextInput>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.lable}>Password:</Text>
          <TextInput
            returnKeyType="next"
            placeholderTextColor={{color: 'red'}}
            onChangeText={values => setpassword(values)}
            style={styles.inputStyle}>
            <Text style={styles.textValues}>{password}</Text>
          </TextInput>
        </View>
        <View style={{marginBottom: 30, marginTop: 15}}>
          <Text style={styles.lable}>Email:</Text>
          <TextInput
            placeholderTextColor={{color: 'red'}}
            onChangeText={values => setEmail(values)}
            style={styles.inputStyle}>
            <Text style={styles.textValues}>{email}</Text>
          </TextInput>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (userName === username) {
              alert('Account already exists');
            } else {
              setUser(username), setPassword(password);
              Alert.alert('Successful account registration', '', [
                {
                  text: 'OK',
                  onPress: () => navigation.goBack(),
                },
              ]);
            }
          }}
          style={styles.buttonLogin}>
          <Text style={[styles.lable, {textAlign: 'center'}]}>SUBMIT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

Register.propTypes = {
  setUser: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  userName: PropTypes.string,
};
export default connectToRedux({
  component: Register,
  stateProps: state => ({
    userName: createUserSelector()(state),
  }),
  dispatchProps: {
    setUser: PersistentStorageActions.setUser,
    setPassword: PersistentStorageActions.setPassword,
  },
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
  stylePrev: {
    position: 'absolute',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,
    left: 20,
  },
});
