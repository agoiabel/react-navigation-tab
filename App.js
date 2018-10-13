import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={24} color={tintColor} />
      )
    }
  },
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: {
      tabBarLabel: 'Dashboard',
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" size={24} color={tintColor} />
      )
    }
  }
},{//router config
  navigationOptions: {
    initialRouteName: 'DashboardScreen',
    tabBarVisible: true,
    order: ['DashboardScreen', 'HomeScreen']
  },
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey'
  }
});