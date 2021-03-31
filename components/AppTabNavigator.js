import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarLabel : "Home Screen",
    }
  },
  ExchangeScreen: {
    screen: ExchangeScreen,
    navigationOptions :{
    tabBarLabel : "ExchangeScreen",
    }
  }
});
