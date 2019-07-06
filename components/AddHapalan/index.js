import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import ListSurah from './ListSurah';

const Index = ({ dataHapalan }) => {
  const { state, addHapalanSurahs } = dataHapalan;

  const { surahs, hapalanSurahs } = state;

  return (
    <View>
      <Text style={{ marginTop: 30 }}>Tambah Hapalan</Text>
      <ListSurah
        surahs={surahs}
        hapalanSurahs={hapalanSurahs}
        addHapalanSurahs={addHapalanSurahs}
      />
    </View>
  );
};

export default Index;
