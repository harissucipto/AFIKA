import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'antd-mobile-rn';
import { ScrollView } from 'react-native-gesture-handler';

import CardReview from './CardReview';

const Index = ({ dataHapalan, navigation }) => {
  const { state, updateBelajarHapalan, editDisplayHapalanAyats } = dataHapalan;

  const { editSurah, surah } = state;

  // params navigasi
  const {
    state: {
      params: { number }
    }
  } = navigation;

  console.log(editSurah.dataBelajar, 'update surah data Belajar');

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={{ marginTop: 30, marginBottom: 30 }}
      >
        <Text>Kembali</Text>
      </TouchableOpacity>
      <Text>Review hapalan screen</Text>

      <CardReview
        surah={editSurah}
        navigation={navigation}
        editDisplayHapalanAyats={editDisplayHapalanAyats}
        updateBelajarHapalan={updateBelajarHapalan}
      />
    </ScrollView>
  );
};

export default Index;
