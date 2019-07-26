import React from 'react';
import { TouchableOpacity } from 'react-native';
import { List } from 'antd-mobile-rn';

const { Item } = List;

const DeckHapalan = ({ surah, option }) => {
  return (
    <Item key={surah.number} extra={<Text>:</Text>} align="middle">
      {surah.number}
      {surah.name_latin} 0-0-0
    </Item>
  );
};

export default DeckHapalan;
