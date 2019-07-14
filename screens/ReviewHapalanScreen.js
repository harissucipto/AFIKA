import React from 'react';
import { View, Text } from 'react-native';
import { Subscribe } from 'unstated';

import DataHapalan from '../unstated/DataHapalan';
import ReviewHapalan from '../components/ReviewHapalan';

const ReviewHapalanScreen = ({ navigation }) => {
  return (
    <Subscribe to={[DataHapalan]}>
      {dataHapalan => (
        <ReviewHapalan dataHapalan={dataHapalan} navigation={navigation} />
      )}
    </Subscribe>
  );
};

export default ReviewHapalanScreen;
