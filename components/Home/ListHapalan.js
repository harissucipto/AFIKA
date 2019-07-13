import React from 'react';
import { ScrollView, Text } from 'react-native';
import { List } from 'antd-mobile-rn';

const { Item } = List;

const ListSurah = ({ hapalanSurahs }) => {
  return (
    <ScrollView>
      <List>
        {hapalanSurahs.map(surah => (
          <Item key={surah.number} extra={<Text>:</Text>} align="middle">
            {surah.number}
            {surah.name_latin} 0-0-0
          </Item>
        ))}
      </List>
    </ScrollView>
  );
};

export default ListSurah;
