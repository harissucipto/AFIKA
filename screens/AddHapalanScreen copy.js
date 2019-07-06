import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import { IconFill, IconOutline } from '@ant-design/icons-react-native';
import { List, WingBlank, Flex, WhiteSpace, Modal } from 'antd-mobile-rn';
import styled from 'styled-components/native';

import {
  Background,
  Header2,
  H3,
  H2,
  H5,
  Body,
  Content
} from '../components/Themes';
import back from '../assets/back.png';

import alQuran from '../assets/al-quran';

const Card = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
`;

const P1 = styled.Text`
  font-family: relay;
  font-size: 14;
  font-weight: bold;
`;

export default class AddHapalanScreen extends Component {
  state = {
    alQuran,
    cari: '',
    hapalan: []
  };

  pencarian = () => {
    const { cari, alQuran } = this.state;

    if (!cari.trim().length) return alQuran;
    return alQuran.filter(item => {
      return (
        item.name_latin.toLowerCase().includes(cari) ||
        item.number.includes(cari)
      );
    });

    return filter;
  };

  renderList = () => {
    return this.state.alQuran.map(item => (
      <View key={item.number}>
        <TouchableOpacity
          key={item.number}
          onPress={p => (
            <WingBlank>
              {Modal.alert('Tambahkan Hapalan', item.name_latin, [
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: 'cancel'
                },
                {
                  text: 'OK',
                  onPress: () => {
                    const newData = alQuran.filter(
                      data => data.number !== item.number
                    );

                    console.log(p, 'ini');

                    this.setState({ alQuran: newData });
                  }
                }
              ])}
            </WingBlank>
          )}
        >
          <WingBlank>
            <Card>
              <Flex>
                <P1>+</P1>
                <P1>{'  '}</P1>
                <P1>{item.name_latin}</P1>
              </Flex>

              <Text>No. {item.number}</Text>
            </Card>
          </WingBlank>
        </TouchableOpacity>
      </View>
    ));
  };

  render() {
    const { alQuran, cari } = this.state;
    const filterAlQuran = this.pencarian();

    return (
      <Background>
        <Header2>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={back} width={15} />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <H2>Tambah Hapalan</H2>
            <H5>0 / 114 surah ditambahkan</H5>
            <TextInput
              onChangeText={cari => this.setState({ cari })}
              placeholder="Cari Nama Surah"
              style={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, .1)',
                borderRadius: 20,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
                fontSize: 10,
                textAlign: 'center'
              }}
            />
          </View>
        </Header2>
        <Body>
          <Content>
            <ScrollView>{this.renderList()}</ScrollView>
          </Content>
        </Body>
      </Background>
    );
  }
}
