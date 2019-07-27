import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import AddHapalanScreen from './AddHapalanScreen';
import EditHapalanScreen from './EditHapalanScreen';
import ReviewHapalanScreen from './ReviewHapalanScreen';
import InfoHapalan from './InfoHapalan';
import PanduanScreen from './PanduanScreen';
import PanduanLagi from './PanduanLagi';

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
    },
    ReviewHapalanScreen: {
      screen: ReviewHapalanScreen,
      navigationOptions: {
        header: null
      }
    },
    InfoHapalan: {
      screen: InfoHapalan,
      navigationOptions: {
        header: null
      }
    },
    PanduanScreen: {
      screen: PanduanScreen,
      navigationOptions: {
        header: null
      }
    },
    PanduanLagi: {
      screen: PanduanLagi,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'PanduanScreen'
  }
);

export default createAppContainer(AppNavigator);
