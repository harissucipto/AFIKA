import React from 'react';
import { View, Text, Button } from 'react-native';
import { Flex, WingBlank, WhiteSpace } from 'antd-mobile-rn';
import { ScrollView } from 'react-native-gesture-handler';

import { primary } from '../Theme/Color';

function FrontCard(props) {
  const {
    text,
    translations,
    numberAyat,
    deskripsi,
    surah,
    number,
    deskripsiFrontCard,
    submit
  } = props;

  return (
    <View>
      <WingBlank style={{ marginBottom: 40 }}>
        <Text
          style={{
            textAlign: 'center',
            borderBottomColor: primary,
            borderBottomWidth: 1,
            paddingBottom: 5,
            fontWeight: 'bold'
          }}
        >
          Petunjuk {numberAyat && `Ayat ke ${number}`}:
        </Text>
      </WingBlank>
      {true && (
        <WingBlank>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: primary,

              lineHeight: 44
            }}
          >
            {surah.text[number]}
          </Text>
          <WhiteSpace />
          <WhiteSpace />
        </WingBlank>
      )}
      {true && (
        <WingBlank>
          <Text style={{ fontWeight: 'bold', color: primary }}>
            Terjemahan:{' '}
          </Text>
          <WhiteSpace />
          <Text>{surah.translations.id.text[number]}</Text>
          <WhiteSpace />
          <WhiteSpace />
        </WingBlank>
      )}
      {true && (
        <WingBlank>
          <Text style={{ fontWeight: 'bold', color: primary }}>Deskripsi:</Text>
          <WhiteSpace />
          <Text>{deskripsiFrontCard}</Text>
          <WhiteSpace />
          <WhiteSpace />
        </WingBlank>
      )}
    </View>
  );
}

FrontCard.defaultProps = {
  text: false,
  translations: true,
  numberAyat: true,
  deskripsi: false
};

export default FrontCard;
