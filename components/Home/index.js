import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import { Button } from 'antd-mobile-rn';

import { Container, Header } from '../Theme/Container';
import { primary } from '../Theme/Color';
import { H1, H3, H5 } from '../Theme/Text';
import Loading from '../Loading';
import ListHapalan from './ListHapalan';
import menu from '../../assets/menu.png';
import add from '../../assets/add.png';

import HeaderHome from '../Theme/HeaderHome';
import { ScrollView } from 'react-native-gesture-handler';

class Index extends React.Component {
  state = {
    loading2: true
  };
  componentDidMount() {
    this.setState({ loading2: true });
    this.props.dataHapalan.fetchHapalanSurahs();
    this.setState({ loading2: false });
  }

  render() {
    const { dataHapalan, navigation } = this.props;
    const {
      state,
      addHapalanSurahs,
      deleteHapalanSurah,
      selectEditSurah,
      resetHapalanSurah
    } = dataHapalan;

    const { hapalanSurahs, isLoading } = state;
    const countHapalan = hapalanSurahs.length || '0';

    if (this.state.loading2 || isLoading)
      return (
        <View
          style={{
            backgroundColor: primary,
            flex: 1,
            justifyContent: 'center'
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      );

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
                resetHapalanSurah={resetHapalanSurah}
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
