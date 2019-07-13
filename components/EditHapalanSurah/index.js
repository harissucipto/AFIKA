import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'antd-mobile-rn';

import CardEdit from './CardEdit';
import { ScrollView } from 'react-native-gesture-handler';

const Index = ({ dataHapalan, navigation }) => {
  const {
    state,
    addHapalanSurahs,
    deleteHapalanSurah,
    editDisplayHapalanAyats
  } = dataHapalan;

  const { editSurah } = state;

  // params navigasi
  const {
    state: {
      params: { number }
    }
  } = navigation;

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={{ marginTop: 30, marginBottom: 30 }}
      >
        <Text>Kembali</Text>
      </TouchableOpacity>
      <Text>Edit hapalan screen</Text>

      <CardEdit
        surah={editSurah}
        navigation={navigation}
        editDisplayHapalanAyats={editDisplayHapalanAyats}
      />

      {/* <ListHapalan
        navigation={navigation}
        hapalanSurahs={hapalanSurahs}
        deleteHapalanSurah={deleteHapalanSurah}
      /> */}
    </ScrollView>
  );
};

export default Index;
