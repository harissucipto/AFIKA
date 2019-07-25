import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Button } from 'react-native';
import { List, WingBlank, Flex, Modal } from 'antd-mobile-rn';
import moment from 'moment';

import { primary } from '../Theme/Color';
import { JAC } from '../Theme/Text';
import { schduleToDate, isScheduleNow } from '../../unstated/utils';
import JumlahReview from './JumlahReview';

const { Item } = List;

const surahSelected = {
  nameLatin: '',
  number: ''
};

class ListSurah extends Component {
  state = {
    visible: false,
    ...surahSelected
  };

  onClose = () => this.setState({ ...surahSelected, visible: false });
  onSettingOpen = surah => () =>
    this.setState({
      visible: true,
      nameLatin: surah.name_latin,
      number_of_ayah: surah.number_of_ayah,
      number: surah.number
    });
  onHapalanDelete = number => () => {
    this.props.deleteHapalanSurah(number);
    this.setState({
      visible: false,
      ...surahSelected
    });
  };
  onHapalanReset = (number, number_of_ayah) => () => {
    this.props.resetHapalanSurah(number, number_of_ayah);
    this.setState({
      visible: false,
      ...surahSelected
    });
  };
  onHapalanEdit = number => () => {
    this.setState({
      visible: false,
      ...surahSelected
    });
    this.props.selectEditSurah(number);
    this.props.navigation.navigate('EditHapalanScreen', { number });
  };

  onHapalanReview = (number, dataBelajar) => () => {
    console.log(number, 'numbernya');
    const isAdaHapalan = dataBelajar.filter(item => {
      const nextReview = schduleToDate(item.supermemo.schedule);
      return (
        isScheduleNow(
          new moment(),
          new moment(item.terakhirReview),
          new moment(nextReview)
        ) || !item.terakhirReview
      );
    }).length;

    if (isAdaHapalan) {
      this.setState({
        visible: false,
        ...surahSelected
      });
      this.props.selectEditSurah(number);
      this.props.navigation.navigate('ReviewHapalanScreen', { number });
    }
  };

  render() {
    const { hapalanSurahs } = this.props;
    const footerButtons = [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => console.log('ok') }
    ];

    return (
      <ScrollView>
        <List>
          {hapalanSurahs.map(surah => (
            <Item key={surah.number} style={{ backgroundColor: primary }}>
              <WingBlank
                style={{
                  backgroundColor: 'white',
                  height: 80,
                  paddingLeft: 11,
                  paddingRight: 11,
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 8
                }}
              >
                <Flex
                  justify="between"
                  style={{
                    paddingTop: 10,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 5
                  }}
                >
                  <TouchableOpacity
                    onPress={this.onHapalanReview(
                      surah.number,
                      surah.dataBelajar
                    )}
                  >
                    <JAC>{surah.name_latin}</JAC>
                  </TouchableOpacity>

                  <JAC>No. {surah.number}</JAC>
                </Flex>
                <Flex justify="between">
                  <TouchableOpacity
                    onPress={this.onHapalanReview(
                      surah.number,
                      surah.dataBelajar
                    )}
                  >
                    <JumlahReview surah={surah} />
                  </TouchableOpacity>
                  <Flex>
                    <TouchableOpacity onPress={this.onSettingOpen(surah)}>
                      <Text
                        style={{
                          paddingLeft: 20,
                          fontSize: 20,
                          color: 'red',
                          fontWeight: 'bold'
                        }}
                      >
                        :
                      </Text>
                    </TouchableOpacity>
                  </Flex>
                </Flex>
              </WingBlank>
            </Item>
          ))}
        </List>
        <Modal
          transparent
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
        >
          <Flex justify="between" style={{ marginBottom: 10 }}>
            <Text>{this.state.nameLatin}</Text>
            <Button title="Batal" onPress={this.onClose} />
          </Flex>
          <View>
            <View style={{ marginBottom: 5 }}>
              <Button
                title="Edit Hapalan"
                onPress={this.onHapalanEdit(this.state.number)}
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <Button
                title="Reset Hapalan"
                onPress={this.onHapalanReset(
                  this.state.number,
                  this.state.number_of_ayah
                )}
              />
            </View>
            <View>
              <Button
                title="Delete Hapalan"
                onPress={this.onHapalanDelete(this.state.number)}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

export default ListSurah;
