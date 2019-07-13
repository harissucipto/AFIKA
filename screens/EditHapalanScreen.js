import React from 'react';
import { View, Text } from 'react-native';
import { Subscribe } from 'unstated';

import DataHapalan from '../unstated/DataHapalan';
import EditHapalanSurah from '../components/EditHapalanSurah';

const EditHapalanScreen = ({ navigation }) => {
  return (
    <Subscribe to={[DataHapalan]}>
      {dataHapalan => (
        <EditHapalanSurah dataHapalan={dataHapalan} navigation={navigation} />
      )}
    </Subscribe>
  );
};

export default EditHapalanScreen;
