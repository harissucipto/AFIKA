import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { AppLoading, Font } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  state = {
    theme: null,
    currentTheme: null,
    isReady: false
  };
  changeTheme = (theme, currentTheme) => {
    this.setState({ theme, currentTheme });
  };
  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );

    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );

    await Font.loadAsync(
      'relay',
      // eslint-disable-next-line
      require('./assets/Relay-Regular.ttf')
    );

    // eslint-disable-next-line
    this.setState({ isReady: true });
  }

  render() {
    const { theme, currentTheme, isReady } = this.state;

    if (!isReady) {
      return <AppLoading />;
    }

    return <HomeScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
