import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'antd-mobile-rn';

import { Container } from '../Theme/Container';
import HeaderBack from '../Theme/HeaderBack';
import CardEdit from './CardEdit';
import { ScrollView } from 'react-native-gesture-handler';
import Loading from '../Loading';

const Index = ({ dataHapalan, navigation }) => {
  const { state, editDisplayHapalanAyats } = dataHapalan;
  const { editSurah, isLoading } = state;

  return (
    <Container>
      <Loading isLoading={isLoading}>
        <>
          <HeaderBack navigation={navigation} text="Edit Hapalan" />

          <CardEdit
            surah={editSurah}
            navigation={navigation}
            editDisplayHapalanAyats={editDisplayHapalanAyats}
          />
        </>
      </Loading>
    </Container>
  );
};

export default Index;
