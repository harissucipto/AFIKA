import React from 'react';
import { View, Text, Button } from 'react-native';
import { Flex, WingBlank } from 'antd-mobile-rn';

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
      <WingBlank>
        <Text>Jawaban {numberAyat && `Ayat ke ${number}`}:</Text>
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
          <Text>{deskripsiBackCard}</Text>
        </WingBlank>
      )}
      <WingBlank style={{ marginTop: 20 }}>
        <Flex justify="around">
          <Button title="Again" onPress={hard} />
          <Button title="Good" onPress={good} />
          <Button title="Easy" onPress={easy} />
        </Flex>
      </WingBlank>
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
