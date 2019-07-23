import React from 'react';
import { View, Text, Button } from 'react-native';
import { Flex, WingBlank, WhiteSpace } from 'antd-mobile-rn';

import { primary } from '../Theme/Color';

function BackCard(props) {
  const {
    text,
    translations,
    numberAyat,
    deskripsi,
    surah,
    number,
    deskripsiBackCard,
    hard,
    good,
    easy
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
          Jawaban {numberAyat && `Ayat ke ${number}`}:
        </Text>
      </WingBlank>
      {text && (
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
      {translations && (
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
      {deskripsi && (
        <WingBlank>
          <Text style={{ fontWeight: 'bold', color: primary }}>Deskripsi:</Text>
          <WhiteSpace />
          <Text>{deskripsiBackCard}</Text>
          <WhiteSpace />
          <WhiteSpace />
        </WingBlank>
      )}
    </View>
  );
}

BackCard.defaultProps = {
  text: true,
  translations: false,
  numberAyat: true,
  deskripsi: false
};

export default BackCard;
