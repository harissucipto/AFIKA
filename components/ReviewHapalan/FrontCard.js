import React from 'react';
import { View, Text, Button } from 'react-native';
import { Flex, WingBlank } from 'antd-mobile-rn';

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
      <WingBlank>
        <Text>Petunjuk {numberAyat && `Ayat ke ${number}`}:</Text>
      </WingBlank>
      {text && (
        <WingBlank>
          <Text>{surah.text[number]}</Text>
        </WingBlank>
      )}
      {translations && (
        <WingBlank>
          <Text>Terjemahan: </Text>
          <Text>{surah.translations.id.text[number]}</Text>
        </WingBlank>
      )}
      {deskripsi && (
        <WingBlank>
          <Text>Deskripsi:</Text>
          <Text>{deskripsiFrontCard}</Text>
        </WingBlank>
      )}

      <Button title="Tampilkan Jawaban" onPress={submit} />
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
