import React from 'react';
import { compose } from 'recompose';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const IconNames = {
  Home: 'md-checkmark-circle',
  Links: 'ios-person',
};

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation: { state: { routeName } } }) => ({
      tabBarIcon: () => <Ionicons name={IconNames[routeName]} size={25} />,
    }),
  },
);
export default compose(createAppContainer)(AppNavigator);
