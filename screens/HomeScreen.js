import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { IconFill, IconOutline } from '@ant-design/icons-react-native';

import {
  Background,
  Header,
  Body,
  ButtonBottom,
  H1,
  H3,
  H4
} from '../components/Themes';
import menu from '../assets/menu.png';
import add from '../assets/add.png';

export default class HomeScreen extends Component {
  state = {
    hapalan: []
  };

  render() {
    const { hapalan } = this.state;

    return (
      <Background>
        <Header>
          <TouchableOpacity>
            <Image source={menu} />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <H1>AFIKA</H1>
            <H3>Aplikasi Penghapal Al-Quran</H3>
            <H4>0 / 114 Surah ditambahkan</H4>
          </View>
        </Header>

        <Body>
          {hapalan.length ? (
            <Content>
              <H4>Test</H4>
            </Content>
          ) : (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <H3>Belum ada hapalan...</H3>
            </View>
          )}

          <ButtonBottom>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddHapalan')}
            >
              <Image source={add} />
            </TouchableOpacity>
          </ButtonBottom>
        </Body>
      </Background>
    );
  }
}
