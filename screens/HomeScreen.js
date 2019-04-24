import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { IconFill, IconOutline } from '@ant-design/icons-react-native';

const Background = styled.View`
  background-color: 'rgba(20, 10, 38, 1)';
  flex: 1;
`;

const Header = styled.View`
  height: 140px;
  padding-top: 55px;
  padding-left: 17px;
  flex-direction: row;
  background-color: rgba(34, 23, 56, 1);
`;

const H1 = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 23px;
`;

const H2 = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 100;
  text-align: center;
  line-height: 23px;
`;

const H3 = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  line-height: 23px;
`;

const Content = styled.ScrollView`
  flex: 1;
  height: 100%;
`;

const Body = styled.View`
  flex: 1;
  position: relative;
`;

const BottomContainer = styled.View`
  position: absolute;
  bottom: 25;
  right: 10;
`;

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
            <IconFill name="switcher" size={20} color="white" />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <H1>AFIKA</H1>
            <H2>Aplikasi Penghapal Al-Quran</H2>
            <H3>0 / 114 Surah ditambahkan</H3>
          </View>
        </Header>

        <Body>
          {hapalan.length ? (
            <Content>
              <H3>Test</H3>
            </Content>
          ) : (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <H2>Belum ada hapalan...</H2>
            </View>
          )}

          <BottomContainer>
            <TouchableOpacity>
              <IconFill name="plus-circle" size={58} color="#5B3E96" />
            </TouchableOpacity>
          </BottomContainer>
        </Body>
      </Background>
    );
  }
}
