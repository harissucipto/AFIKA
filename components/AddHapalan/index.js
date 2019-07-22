import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Container } from '../Theme/Container';
import HeaderAddHapalan from '../Theme/HeaderAddHapalan';

import { cariSurah } from './utils';
import Header from './Header';
import ListSurah from './ListSurah';
import CariSurah from './CariSurah';

const Index = ({ dataHapalan, navigation }) => {
  const { state, addHapalanSurahs, setQuery, clearQuery } = dataHapalan;
  const { surahs, hapalanSurahs, querySurah } = state;

  const filterSurahs = cariSurah(surahs, querySurah);
  const countHapalan = surahs.length - hapalanSurahs.length || '0';

  return (
    <Container>
      <HeaderAddHapalan
        navigation={navigation}
        countHapalan={countHapalan}
        hapusQuery={clearQuery}
        setQuery={setQuery}
        query={querySurah}
      />
      <ListSurah
        surahs={filterSurahs}
        hapalanSurahs={hapalanSurahs}
        addHapalanSurahs={addHapalanSurahs}
      />
    </Container>
  );
};

export default Index;
