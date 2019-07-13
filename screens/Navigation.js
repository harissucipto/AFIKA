import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import AddHapalanScreen from './AddHapalanScreen';
import EditHapalanScreen from './EditHapalanScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    AddHapalan: {
      screen: AddHapalanScreen,
      navigationOptions: {
        header: null
      }
    },
    EditHapalanScreen: {
      screen: EditHapalanScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
