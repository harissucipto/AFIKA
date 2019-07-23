import React, { Component } from 'react';
import supermemo2 from 'supermemo2';
import { ScrollView, View, Text, Picker, Button } from 'react-native';
import {
  WingBlank,
  Flex,
  PickerView,
  Checkbox,
  TextareaItem,
  WhiteSpace
} from 'antd-mobile-rn';
import moment from 'moment';

import { Container } from '../Theme/Container';
import HeaderBack from '../Theme/HeaderBack';
import { isScheduleNow, schduleToDate } from '../../unstated/utils';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const initDisplayHapalanAyat = {
  dataFrontCard: {
    text: false,
    translations: true,
    numberAyat: true,
    deskripsi: false
  },
  dataBackCard: {
    text: true,
    translations: false,
    numberAyat: false,
    deskripsi: false
  },
  deskripsiFrontCard: '',
  deskripsiBackCard: ''
};

class CardEdit extends Component {
  state = {
    selectAyat: 0,
    listAyat: [],
    isJawab: false,
    dataFrontCard: {},
    dataBackCard: {},
    deskripsiFrontCard: '',
    deskripsiBackCard: ''
  };

  componentWillReceiveProps(props) {
    const { surah } = props;
    if (surah) {
      const { number_of_ayah, displayHapalanAyats, dataBelajar } = surah;

      const listAyat = dataBelajar
        .filter(item => {
          const nextReview = schduleToDate(item.supermemo.schedule);
          return (
            isScheduleNow(
              new moment(),
              new moment(item.terakhirReview),
              new moment(nextReview)
            ) || !item.terakhirReview
          );
        })
        .map(item => Number(item.number));

      this.getDisplayHapalanAyat(displayHapalanAyats, listAyat[0]);
      this.setState({
        listAyat,
        selectAyat: listAyat[0]
      });
    }
  }

  getDisplayHapalanAyat = (displayHapalanAyats, selectAyat) => {
    const displayHapalanAyat = displayHapalanAyats.find(
      item => item.number === selectAyat
    );

    if (displayHapalanAyat) {
      const {
        dataFrontCard,
        dataBackCard,
        deskripsiFrontCard,
        deskripsiBackCard
      } = displayHapalanAyat;
      this.setState({
        dataFrontCard,
        dataBackCard,
        deskripsiFrontCard,
        deskripsiBackCard
      });
    }
  };

  showJawaban = () => {
    this.setState({ isJawab: true });
  };

  nextAyat = kualitasHapalan => {
    const { listAyat, selectAyat } = this.state;
    const indexListAyat = listAyat.findIndex(number => number === selectAyat);

    console.log(listAyat, 'list ayat');
    // mapping hapalan
    const dataBelajar = this.props.surah.dataBelajar.find(item => {
      return item.number === selectAyat;
    });
    const {
      factor,
      schedule,
      isRepeatAgain,
      terakhirReview
    } = dataBelajar.supermemo;
    const updateDataBelajar = {
      ...dataBelajar,
      supermemo: supermemo2(kualitasHapalan, schedule, factor)
    };

    updateDataBelajar.terakhirReview = updateDataBelajar.supermemo.isRepeatAgain
      ? terakhirReview
      : new Date();

    const mergeDataBelajar = this.props.surah.dataBelajar.map(item => {
      return item.number === selectAyat ? updateDataBelajar : item;
    });

    this.props.updateBelajarHapalan({
      number: this.props.surah.number,
      dataBelajar: mergeDataBelajar
    });

    // tentukan index pindah
    const indexPindahAyat =
      indexListAyat === listAyat.length - 1 ? indexListAyat : indexListAyat + 1;

    // pindah
    const newSelectAyat =
      listAyat[
        updateDataBelajar.supermemo.isRepeatAgain
          ? indexListAyat
          : indexPindahAyat
      ];
    this.changeAyat(newSelectAyat);
  };

  changeAyat = itemValue => {
    const displayHapalanAyat = this.props.surah.displayHapalanAyats.find(
      item => item.number === itemValue
    );

    this.setState({ selectAyat: itemValue, isJawab: false });
    if (displayHapalanAyat) {
      this.setState({ ...displayHapalanAyat });
    } else {
      this.setState({ ...initDisplayHapalanAyat });
    }
  };

  onHard = () => {
    this.nextAyat(1);
  };

  onGood = () => {
    this.nextAyat(4);
  };

  onEasy = () => {
    this.nextAyat(5);
  };

  simpanEdit = () => {
    const {
      dataFrontCard,
      dataBackCard,
      deskripsiFrontCard,
      deskripsiBackCard,
      selectAyat
    } = this.state;

    const filterData = this.props.surah.displayHapalanAyats.filter(
      item => item.number !== selectAyat
    );

    const newData = {
      dataFrontCard,
      dataBackCard,
      deskripsiFrontCard,
      deskripsiBackCard,
      number: selectAyat
    };

    this.props.editDisplayHapalanAyats({
      number: this.props.surah.number,
      displayHapalanAyats: [...filterData, newData]
    });
  };

  render() {
    const { listAyat } = this.state;
    if (!listAyat.length || !this.props.surah) return null;

    const {
      selectAyat,
      isJawab,
      dataFrontCard,
      dataBackCard,
      deskripsiFrontCard,
      deskripsiBackCard
    } = this.state;
    const { name_latin } = this.props.surah;

    return (
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
        <WingBlank style={{ marginBottom: 40 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name_latin}</Text>
        </WingBlank>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1
          }}
        >
          {!isJawab ? (
            <FrontCard
              submit={this.showJawaban}
              surah={this.props.surah}
              number={selectAyat}
              {...dataFrontCard}
              deskripsiFrontCard={deskripsiFrontCard}
            />
          ) : (
            <BackCard
              submit={this.showJawaban}
              surah={this.props.surah}
              number={selectAyat}
              {...dataBackCard}
              deskripsiBackCard={deskripsiBackCard}
              hard={this.onHard}
              good={this.onGood}
              easy={this.onEasy}
            />
          )}
        </ScrollView>
        <View style={{ marginBottom: 10 }}>
          {!isJawab ? (
            <Button
              bl
              title="Tampilkan Jawaban"
              onPress={this.showJawaban}
              color="#5B3E96"
            />
          ) : null}
        </View>
      </View>
    );
  }
}

export default CardEdit;
