import React, { Component } from 'react';
import { ScrollView, View, Text, Picker, Button } from 'react-native';
import {
  WingBlank,
  Flex,
  PickerView,
  Checkbox,
  TextareaItem,
  WhiteSpace
} from 'antd-mobile-rn';

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
    selectAyat: 1,
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
      const { number_of_ayah, displayHapalanAyats } = surah;

      this.getDisplayHapalanAyat(displayHapalanAyats);
      this.setState({
        listAyat: [...Array(Number(number_of_ayah)).keys()].map(x => x + 1)
      });
    }
  }

  getDisplayHapalanAyat = displayHapalanAyats => {
    const displayHapalanAyat = displayHapalanAyats.find(
      item => item.number === this.state.selectAyat
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

  changeAyat = (itemValue, itemIndex) => {
    const displayHapalanAyat = this.props.surah.displayHapalanAyats.find(
      item => item.number === itemValue
    );

    this.setState({ selectAyat: itemValue });
    if (displayHapalanAyat) {
      this.setState({ ...displayHapalanAyat });
    } else {
      this.setState({ ...initDisplayHapalanAyat });
    }
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
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <WingBlank>
          <Text>{name_latin}</Text>
        </WingBlank>
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
          />
        )}
      </ScrollView>
    );
  }
}

export default CardEdit;
