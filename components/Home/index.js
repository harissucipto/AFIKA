import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from 'antd-mobile-rn';

import { Container, Header } from '../Theme/Container';
import { H1, H3, H5 } from '../Theme/Text';
import Loading from '../Loading';
import ListHapalan from './ListHapalan';
import menu from '../../assets/menu.png';
import add from '../../assets/add.png';

import HeaderHome from '../Theme/HeaderHome';
import { ScrollView } from 'react-native-gesture-handler';

class Index extends React.Component {
  componentDidMount() {
    this.props.dataHapalan.fetchHapalanSurahs();
  }

  render() {
    const { dataHapalan, navigation } = this.props;
    const {
      state,
      addHapalanSurahs,
      deleteHapalanSurah,
      selectEditSurah
    } = dataHapalan;

    const { hapalanSurahs, isLoading } = state;
    const countHapalan = hapalanSurahs.length || '0';

    return (
      <Container>
        <Loading isLoading={isLoading}>
          <>
            <HeaderHome countHapalan={countHapalan} navigation={navigation} />
            <View style={{ flex: 1 }}>
              <ListHapalan
                navigation={navigation}
                hapalanSurahs={hapalanSurahs}
                deleteHapalanSurah={deleteHapalanSurah}
                selectEditSurah={selectEditSurah}
              />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddHapalan')}
              >
                <Image source={add} />
              </TouchableOpacity>
            </View>
          </>
        </Loading>
      </Container>
    );
  }
}

export default Index;
