import React from 'react';
import { ScrollView, Text } from 'react-native';
import { List, Flex } from 'antd-mobile-rn';

import { nameSurahCard, filterSurahBelumDihapal } from './utils';

const { Item } = List;

const ListSurah = ({ surahs, hapalanSurahs, addHapalanSurahs }) => {
  const surahBelumDitambahkan = surahs.filter(
    filterSurahBelumDihapal(hapalanSurahs)
  );

  return (
    <ScrollView>
      <List>
        {surahBelumDitambahkan.map(surah => (
          <Item key={surah.number} onClick={() => addHapalanSurahs(surah)}>
            <Flex
              justify="between"
              style={{
                backgroundColor: 'yellow',
                height: 48,
                paddingLeft: 11,
                paddingRight: 11,
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <Text>+ {surah.name_latin}</Text>
              <Text>no. {surah.number}</Text>
            </Flex>
          </Item>
        ))}
      </List>
    </ScrollView>
  );
};

export default ListSurah;
