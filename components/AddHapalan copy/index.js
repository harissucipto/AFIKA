import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { cariSurah } from './utils';
import Header from './Header';
import ListSurah from './ListSurah';
import CariSurah from './CariSurah';

const Index = ({ dataHapalan, navigation }) => {
  const { state, addHapalanSurahs, setQuery, clearQuery } = dataHapalan;
  const { surahs, hapalanSurahs, querySurah } = state;

  const filterSurahs = cariSurah(surahs, querySurah);

  return (
    <View>
      <Header navigation={navigation}>
        <CariSurah
          hapusQuery={clearQuery}
          setQuery={setQuery}
          query={querySurah}
        />
      </Header>

      <ListSurah
        surahs={filterSurahs}
        hapalanSurahs={hapalanSurahs}
        addHapalanSurahs={addHapalanSurahs}
      />
    </View>
  );
};

export default Index;
