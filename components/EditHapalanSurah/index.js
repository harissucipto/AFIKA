import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'antd-mobile-rn';

import { Container } from '../Theme/Container';
import HeaderBack from '../Theme/HeaderBack';
import CardEdit from './CardEdit';
import { ScrollView } from 'react-native-gesture-handler';

const Index = ({ dataHapalan, navigation }) => {
  const { state, editDisplayHapalanAyats } = dataHapalan;
  const { editSurah } = state;

  return (
    <Container>
      <HeaderBack navigation={navigation} text="Edit Hapalan" />

      <CardEdit
        surah={editSurah}
        navigation={navigation}
        editDisplayHapalanAyats={editDisplayHapalanAyats}
      />
    </Container>
  );
};

export default Index;
