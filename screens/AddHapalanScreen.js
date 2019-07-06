import React from 'react';
import { View, Text } from 'react-native';
import { Subscribe } from 'unstated';

import DataHapalan from '../unstated/DataHapalan';
import AddHapalan from '../components/AddHapalan';

const AddHapalanScreen = () => {
  return (
    <Subscribe to={[DataHapalan]}>
      {dataHapalan => <AddHapalan dataHapalan={dataHapalan} />}
    </Subscribe>
  );
};

export default AddHapalanScreen;
