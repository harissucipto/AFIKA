import React from 'react';
import { View, Text } from 'react-native';
import { Subscribe } from 'unstated';

import DataHapalan from '../unstated/DataHapalan';
import AddHapalan from '../components/AddHapalan';

const AddHapalanScreen = ({ navigation }) => {
  return (
    <Subscribe to={[DataHapalan]}>
      {dataHapalan => (
        <AddHapalan dataHapalan={dataHapalan} navigation={navigation} />
      )}
    </Subscribe>
  );
};

export default AddHapalanScreen;
