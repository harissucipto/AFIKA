import React from 'react';
import { ScrollView, Text } from 'react-native';
import { List, Flex } from 'antd-mobile-rn';

import { nameSurahCard, filterSurahBelumDihapal } from './utils';
import { primary } from '../Theme/Color';
import { JAC } from '../Theme/Text';

const { Item } = List;

const ListSurah = ({ surahs, hapalanSurahs, addHapalanSurahs }) => {
  const surahBelumDitambahkan = surahs.filter(
    filterSurahBelumDihapal(hapalanSurahs)
  );

  return (
    <ScrollView>
      <List>
        {surahBelumDitambahkan.map(surah => (
          <Item
            key={surah.number}
            onClick={() => addHapalanSurahs(surah)}
            style={{ backgroundColor: primary }}
          >
            <Flex
              justify="between"
              style={{
                backgroundColor: 'white',
                height: 48,
                paddingLeft: 11,
                paddingRight: 11,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 8
              }}
            >
              <JAC>+ {surah.name_latin}</JAC>
              <JAC>no. {surah.number}</JAC>
            </Flex>
          </Item>
        ))}
      </List>
    </ScrollView>
  );
};

export default ListSurah;
