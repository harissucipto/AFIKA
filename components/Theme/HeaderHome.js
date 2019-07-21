import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Header } from './Container';
import { H1, H3, H5 } from './Text';
import menu from '../../assets/menu.png';

export default function HeaderHome(props) {
  const { countHapalan } = props;

  return (
    <Header>
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity>
          <Image source={menu} />
        </TouchableOpacity>
      </View>
      <H1>AFIKA</H1>
      <H3>Aplikasi Penghapal Al-Quran</H3>
      <H5>{countHapalan} / 114 Surah Ditambahkan</H5>
    </Header>
  );
}
