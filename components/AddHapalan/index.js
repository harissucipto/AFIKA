import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { cariSurah } from './utils';
import ListSurah from './ListSurah';
import CariSurah from './CariSurah';

const Index = ({ dataHapalan, navigation }) => {
  const { state, addHapalanSurahs, setQuery, clearQuery } = dataHapalan;
  const { surahs, hapalanSurahs, querySurah } = state;

  const filterSurahs = cariSurah(surahs, querySurah);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={{ marginTop: 30, marginBottom: 30 }}
      >
        <Text>Kembali</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 30 }}>Tambah Hapalan</Text>

      <CariSurah
        hapusQuery={clearQuery}
        setQuery={setQuery}
        query={querySurah}
      />

      <ListSurah
        surahs={filterSurahs}
        hapalanSurahs={hapalanSurahs}
        addHapalanSurahs={addHapalanSurahs}
      />
    </View>
  );
};

export default Index;
