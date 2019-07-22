import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Header2 } from './Container';
import CariSurah from '../AddHapalan/CariSurah';
import { H2, H5 } from './Text';
import back from '../../assets/back.png';

export default function HeaderHome(props) {
  const { countHapalan, navigation, hapusQuery, setQuery, query } = props;

  return (
    <Header2>
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image source={back} />
        </TouchableOpacity>
      </View>
      <H2>TAMBAH HAPALAN</H2>
      <H5>{countHapalan} / 114 Surah Tersedia</H5>
      <View style={{ marginTop: 10 }}>
        <CariSurah hapusQuery={hapusQuery} setQuery={setQuery} query={query} />
      </View>
    </Header2>
  );
}
