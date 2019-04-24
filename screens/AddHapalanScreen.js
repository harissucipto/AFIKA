import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList
} from 'react-native';
import { IconFill, IconOutline } from '@ant-design/icons-react-native';
import { List, Card, WingBlank } from 'antd-mobile-rn';

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

export default class AddHapalanScreen extends Component {
  state = {
    alQuran
  };

  render() {
    const { alQuran } = this.state;

    console.log(alQuran[0].name);

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
            <FlatList
              keyExtractor={item => item.number}
              data={alQuran}
              renderItem={({ item }) => (
                <WingBlank>
                  <View>
                    <Text>{item.name_latin}</Text>
                    <Text>{item.number}</Text>
                  </View>
                </WingBlank>
              )}
            />
          </Content>
        </Body>
      </Background>
    );
  }
}
