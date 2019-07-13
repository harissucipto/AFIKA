import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'antd-mobile-rn';

import CardEdit from './CardEdit';

const Index = ({ dataHapalan, navigation }) => {
  const { state, addHapalanSurahs, deleteHapalanSurah } = dataHapalan;

  const { editSurah } = state;

  // params navigasi
  const {
    state: {
      params: { number }
    }
  } = navigation;

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={{ marginTop: 30, marginBottom: 30 }}
      >
        <Text>Kembali</Text>
      </TouchableOpacity>
      <Text>Edit hapalan screen</Text>

      <CardEdit surah={editSurah} />

      {/* <ListHapalan
        navigation={navigation}
        hapalanSurahs={hapalanSurahs}
        deleteHapalanSurah={deleteHapalanSurah}
      /> */}
    </View>
  );
};

export default Index;
