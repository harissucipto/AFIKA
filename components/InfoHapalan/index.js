import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile-rn';
import _ from 'lodash';
import moment from 'moment';

import { isScheduleNow, schduleToDate } from '../../unstated/utils';

import { Container, Header } from '../Theme/Container';
import { primary, red, green, blue } from '../Theme/Color';
import { H1, H3, H5 } from '../Theme/Text';
import Loading from '../Loading';
import ListHapalan from './ListHapalan';
import menu from '../../assets/menu.png';
import add from '../../assets/add.png';

import HeaderBack from '../Theme/HeaderBack';
import { ScrollView } from 'react-native-gesture-handler';

class Index extends React.Component {
  countBaru = dataBelajar => {
    if (!_.isEmpty(dataBelajar)) {
      const totalBaru = dataBelajar.filter(item => !item.terakhirReview);
      if (!totalBaru.length) return <Text>-</Text>;
      return (
        <Text style={{ marginLeft: 10 }}>
          {totalBaru.map((item, i) => {
            const pemisah = totalBaru.length - 1 === i ? '.' : ',';
            return `${item.number} ${pemisah} `;
          })}
        </Text>
      );
    }

    return <Text>-</Text>;
  };

  countSekarang = dataBelajar => {
    if (!_.isEmpty(dataBelajar)) {
      const totalBaru = dataBelajar.filter(item => {
        const nextReview = schduleToDate(item.supermemo.schedule);
        return isScheduleNow(
          new moment(),
          new moment(item.terakhirReview),
          new moment(nextReview)
        );
      });

      if (!totalBaru.length) return <Text>-</Text>;
      return (
        <Text style={{ marginLeft: 10 }}>
          {totalBaru.map((item, i) => {
            const pemisah = totalBaru.length - 1 === i ? '.' : ',';
            return `${item.number} ${pemisah} `;
          })}
        </Text>
      );
    }

    return <Text>-</Text>;
  };

  countNanti = (dataBelajar, dateInit) => {
    if (!_.isEmpty(dataBelajar)) {
      const totalNanti = dataBelajar.filter(item => {
        const nextReview = schduleToDate(item.supermemo.schedule);
        return (
          new moment(nextReview).isAfter(new moment(), 'd') &&
          item.terakhirReview
        );
      });

      if (!totalNanti.length) return <Text>-</Text>;

      const mappingData = totalNanti.map(item => ({
        ...item,
        schedule: item.supermemo.schedule
      }));

      const result = _.groupBy(mappingData, 'schedule');

      const newData = Object.keys(result).map(key => ({
        schedule: key,
        data: result[key]
      }));

      console.log(newData, 'data Baru');

      return newData.map(tanggal => {
        return (
          <View key={tanggal.schedule}>
            <Text
              style={{
                fontWeight: 'bold',
                borderBottomWidth: 1,
                borderBottomColor: 'black'
              }}
            >
              Tanggal :{' '}
              {schduleToDate(tanggal.schedule, dateInit).format('DD/MM/YYYY')}
            </Text>
            <WhiteSpace />
            <Text style={{ marginLeft: 10 }}>
              {tanggal.data.map((item, i) => {
                const pemisah = tanggal.data.length - 1 === i ? '.' : ',';
                return `${item.number} ${pemisah} `;
              })}
            </Text>
          </View>
        );
      });
    }

    return <Text>-</Text>;
  };

  render() {
    const { dataHapalan, navigation } = this.props;
    const {
      state,
      addHapalanSurahs,
      deleteHapalanSurah,
      selectEditSurah,
      resetHapalanSurah
    } = dataHapalan;

    const { editSurah, isLoading } = state;

    return (
      <Container>
        <Loading isLoading={isLoading || _.isEmpty(editSurah)}>
          <>
            <HeaderBack navigation={navigation} text={'Informasi Hapalan'} />
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                margin: 20,
                borderRadius: 10,
                padding: 10,
                justifyContent: 'space-between',
                marginBottom: 35
              }}
            >
              <WingBlank style={{ marginBottom: 20 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Informasi Hapalan Surah No. {editSurah.number}:
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    borderBottomColor: primary,
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    fontWeight: 'bold'
                  }}
                >
                  {editSurah.name_latin}
                </Text>
              </WingBlank>
              <ScrollView>
                <WingBlank>
                  <Text style={{ fontWeight: 'bold', color: red }}>
                    Ayat Baru Ditambahkan:{' '}
                  </Text>
                  <WhiteSpace />
                  <View>{this.countBaru(editSurah.dataBelajar)}</View>
                </WingBlank>
                <WhiteSpace />
                <WhiteSpace />
                <WingBlank>
                  <Text style={{ fontWeight: 'bold', color: green }}>
                    Review Ayat Sekarang:{' '}
                  </Text>
                  <WhiteSpace />
                  <View>{this.countSekarang(editSurah.dataBelajar)}</View>
                </WingBlank>
                <WhiteSpace />
                <WhiteSpace />
                <WingBlank>
                  <Text style={{ fontWeight: 'bold', color: blue }}>
                    Review Ayat yang Akan Datang:{' '}
                  </Text>
                  <WhiteSpace />
                  <View>
                    {this.countNanti(editSurah.dataBelajar, editSurah.dateInit)}
                  </View>
                </WingBlank>
              </ScrollView>
            </View>
          </>
        </Loading>
      </Container>
    );
  }
}

export default Index;
