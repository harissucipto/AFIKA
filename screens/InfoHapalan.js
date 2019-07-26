import React from 'react';
import { View, Text } from 'react-native';
import { Subscribe } from 'unstated';

import DataHapalan from '../unstated/DataHapalan';
import Home from '../components/InfoHapalan';

const HomeScreen = ({ navigation }) => {
  return (
    <Subscribe to={[DataHapalan]}>
      {dataHapalan => (
        <Home dataHapalan={dataHapalan} navigation={navigation} />
      )}
    </Subscribe>
  );
};

export default HomeScreen;
