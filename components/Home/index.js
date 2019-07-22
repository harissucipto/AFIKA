import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from 'antd-mobile-rn';

import { Container, Header } from '../Theme/Container';
import { H1, H3, H5 } from '../Theme/Text';
import ListHapalan from './ListHapalan';
import menu from '../../assets/menu.png';
import add from '../../assets/add.png';

import HeaderHome from '../Theme/HeaderHome';
import { ScrollView } from 'react-native-gesture-handler';

const Index = ({ dataHapalan, navigation }) => {
  const {
    state,
    addHapalanSurahs,
    deleteHapalanSurah,
    selectEditSurah
  } = dataHapalan;

  const { hapalanSurahs } = state;
  const countHapalan = hapalanSurahs.length || '0';

  return (
    <Container>
      <HeaderHome countHapalan={countHapalan} navigation={navigation} />
      <View style={{ flex: 1 }}>
        <ListHapalan
          navigation={navigation}
          hapalanSurahs={hapalanSurahs}
          deleteHapalanSurah={deleteHapalanSurah}
          selectEditSurah={selectEditSurah}
        />
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate('AddHapalan')}>
          <Image source={add} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Index;
