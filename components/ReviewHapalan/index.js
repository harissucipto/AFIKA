import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'antd-mobile-rn';
import { ScrollView } from 'react-native-gesture-handler';

import { Container } from '../Theme/Container';
import HeaderBack from '../Theme/HeaderBack';
import CardReview from './CardReview';
import Loading from '../Loading';

const Index = ({ dataHapalan, navigation }) => {
  const { state, updateBelajarHapalan, editDisplayHapalanAyats } = dataHapalan;

  const { editSurah, surah, isLoading } = state;

  // params navigasi
  const {
    state: {
      params: { number }
    }
  } = navigation;

  return (
    <Container>
      <Loading isLoading={isLoading}>
        <>
          <HeaderBack navigation={navigation} text="Review Hapalan" />
          <CardReview
            surah={editSurah}
            navigation={navigation}
            editDisplayHapalanAyats={editDisplayHapalanAyats}
            updateBelajarHapalan={updateBelajarHapalan}
          />
        </>
      </Loading>
    </Container>
  );
};

export default Index;
