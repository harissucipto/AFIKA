import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'antd-mobile-rn';

import ListHapalan from './ListHapalan';

const Index = ({ dataHapalan, navigation }) => {
  const { state, addHapalanSurahs, setQuery, clearQuery } = dataHapalan;

  const { hapalanSurahs } = state;

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddHapalan')}
        style={{ marginTop: 30, marginBottom: 30 }}
      >
        <Text>Tambah</Text>
      </TouchableOpacity>

      <ListHapalan hapalanSurahs={hapalanSurahs} />
    </View>
  );
};

export default Index;
