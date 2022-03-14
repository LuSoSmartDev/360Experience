import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import Login from '../src/Login/Login';
import Register from '../src/Login/Register';
import Profile from '../src/profile/index';
import {store} from '../src/store';
import Main from './main';

function LoginScreen() {
  return <Login />;
}
function RegisterScreen() {
  return <Register />;
}
function ProfileScreen() {
  return <Profile />;
}
function MainScreen() {
  return <Main />;
}

const Stack = createStackNavigator();
function CustomLogin() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={() => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default CustomLogin;
