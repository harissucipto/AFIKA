import React from 'react';
import { View, Text } from 'react-native';
import { Subscribe } from 'unstated';

import DataHapalan from '../unstated/DataHapalan';
import Home from '../components/Home';

const AddHapalanScreen = () => {
  return (
    <Subscribe to={[DataHapalan]}>
      {dataHapalan => <Home dataHapalan={dataHapalan} />}
    </Subscribe>
  );
};

export default AddHapalanScreen;
