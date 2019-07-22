import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Header3 } from './Container';
import CariSurah from '../AddHapalan/CariSurah';
import { H2, H5 } from './Text';
import back from '../../assets/back.png';

export default function HeaderHome(props) {
  const { navigation, text } = props;

  return (
    <Header3>
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image source={back} />
        </TouchableOpacity>
      </View>
      <H2>{text}</H2>
    </Header3>
  );
}
