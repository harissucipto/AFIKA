import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'antd-mobile-rn';

import CardEdit from './CardEdit';
import { ScrollView } from 'react-native-gesture-handler';

const Index = ({ dataHapalan, navigation }) => {
  const { state, editDisplayHapalanAyats } = dataHapalan;
  const { editSurah } = state;

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
    </ScrollView>
  );
};

export default Index;
