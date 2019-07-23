import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'antd-mobile-rn';
import { ScrollView } from 'react-native-gesture-handler';

import { Container } from '../Theme/Container';
import HeaderBack from '../Theme/HeaderBack';
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

  return (
    <Container>
      <HeaderBack navigation={navigation} text="Review Hapalan" />

      <CardReview
        surah={editSurah}
        navigation={navigation}
        editDisplayHapalanAyats={editDisplayHapalanAyats}
        updateBelajarHapalan={updateBelajarHapalan}
      />
    </Container>
  );
};

export default Index;
