import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { IconFill, IconOutline } from '@ant-design/icons-react-native';
import { SearchBar, WhiteSpace } from 'antd-mobile-rn';

import { Background, Header2, H3, H2, H5 } from '../components/Themes';
import { white } from 'ansi-colors';

import back from '../assets/back.png';

export default class AddHapalanScreen extends Component {
  render() {
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
      </Background>
    );
  }
}
