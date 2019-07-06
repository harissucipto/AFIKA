import React from 'react';
import { ScrollView, Text } from 'react-native';
import { List } from 'antd-mobile-rn';

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
          <Item
            key={surah.number}
            arrow="horizontal"
            onClick={() => addHapalanSurahs(surah)}
          >
            {nameSurahCard(surah)}
          </Item>
        ))}
      </List>
    </ScrollView>
  );
};

export default ListSurah;
