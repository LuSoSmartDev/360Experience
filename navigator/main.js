import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import Home from './customHome';
import Market from './customMarket';
function HomeScreen() {
  return <Home />;
}
function HomeScreen0() {
  return <Market />;
}
function HomeScreen1() {
  return <View></View>;
}
function HomeScreen2() {
  return <View></View>;
}
function HomeScreen3() {
  return <View></View>;
}
function HomeScreen4() {
  return <View></View>;
}
const Tab = createBottomTabNavigator();

export default function CustomTabBar() {
  const [initialRoute, setInitialRoute] = React.useState('MainHome');

  return (
    <Tab.Navigator
      initialRouteName={initialRoute}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'MainHome') {
            {
              return (
                <Image
                  source={require('../asset/iconHome.png')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          }
          if (route.name === 'Home1') {
            {
              return (
                <Image
                  source={require('../asset/iconShop.jpeg')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          } else if (route.name === 'Home2') {
            {
              return (
                <Image
                  source={require('../asset/iconBag.jpeg')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          } else if (route.name === 'Home3') {
            {
              return (
                <Image
                  source={require('../asset/iconTym.png')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          } else if (route.name === 'Home4') {
            {
              return (
                <Image
                  source={require('../asset/iconProfile.png')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          } else if (route.name === 'Home0') {
            {
              return (
                <Image
                  source={require('../asset/store.png')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#C52AFE',
        inactiveTintColor: '#AEAEAE',
        style: {
          height: 60,
          paddingBottom: 5,
        },
        labelStyle: {
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        name={'MainHome'}
        component={HomeScreen}
        options={() => ({
          headerShown: false,
          title: 'Home',
        })}></Tab.Screen>
      <Tab.Screen
        name="Home0"
        component={HomeScreen0}
        options={() => ({
          headerShown: false,
          title: 'Marketplace',
        })}></Tab.Screen>
      <Tab.Screen
        name="Home1"
        component={HomeScreen1}
        options={() => ({headerShown: false, title: 'Shop'})}></Tab.Screen>
      <Tab.Screen
        name="Home2"
        component={HomeScreen2}
        options={() => ({headerShown: false, title: 'Bag'})}></Tab.Screen>
      <Tab.Screen
        name="Home3"
        component={HomeScreen3}
        options={() => ({
          headerShown: false,
          title: 'Favorites',
        })}></Tab.Screen>
      <Tab.Screen
        name="Home4"
        component={HomeScreen4}
        options={() => ({headerShown: false, title: 'Shop'})}></Tab.Screen>
    </Tab.Navigator>
  );
}
