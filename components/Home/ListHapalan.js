import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image
} from 'react-native';
import { List, WingBlank, Flex, Modal } from 'antd-mobile-rn';
import moment from 'moment';

import { primary } from '../Theme/Color';
import { JAC } from '../Theme/Text';
import { schduleToDate, isScheduleNow } from '../../unstated/utils';
import JumlahReview from './JumlahReview';
import { green, blue, red } from '../Theme/Color';
import setting from '../../assets/setting.png';

const { Item } = List;

const Circle = (props: any) => {
  const size = props.size || 20;
  const style = {
    borderRadius: size / 2,
    backgroundColor: props.color || '#527fe4',
    width: size,
    height: size,
    margin: 1,
    marginRight: 8
  };
  return <View style={style} />;
};

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

  onHapalanInfo = number => () => {
    this.setState({
      visible: false,
      ...surahSelected
    });
    this.props.selectEditSurah(number);
    this.props.navigation.navigate('InfoHapalan', { number });
  };

  onHapalanReview = (number, dataBelajar) => () => {
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
    return (
      <ScrollView>
        <List>
          {hapalanSurahs.map(surah => (
            <Item key={surah.number} style={{ backgroundColor: primary }}>
              <TouchableOpacity
                onPress={this.onHapalanReview(surah.number, surah.dataBelajar)}
              >
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
                    <JAC>{surah.name_latin}</JAC>

                    <JAC>No. {surah.number}</JAC>
                  </Flex>
                  <Flex justify="between">
                    <JumlahReview surah={surah} />

                    <Flex style={{ marginRight: 10, marginTop: 5 }}>
                      <TouchableOpacity onPress={this.onSettingOpen(surah)}>
                        <Image
                          source={setting}
                          style={{ height: 22, width: 22 }}
                        />
                      </TouchableOpacity>
                    </Flex>
                  </Flex>
                </WingBlank>
              </TouchableOpacity>
            </Item>
          ))}
        </List>
        <Modal
          transparent
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
        >
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={{ flexGrow: 4 }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 10
                }}
              >
                {this.state.nameLatin}
              </Text>
            </View>
            <View style={{ flexGrow: 1 }}>
              <Button title="Batal" onPress={this.onClose} color="red" />
            </View>
          </View>

          <View>
            <View style={{ marginBottom: 10 }}>
              <TouchableOpacity onPress={this.onHapalanInfo(this.state.number)}>
                <View style={{ flexDirection: 'row' }}>
                  <Circle color="#5B3E96" />
                  <Text style={{ color: '#5B3E96', fontWeight: 'bold' }}>
                    Info Hapalan
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 10 }}>
              <TouchableOpacity onPress={this.onHapalanEdit(this.state.number)}>
                <View style={{ flexDirection: 'row' }}>
                  <Circle color={green} />
                  <Text style={{ color: green, fontWeight: 'bold' }}>
                    Edit Hapalan
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 10 }}>
              <TouchableOpacity
                title="Reset Hapalan"
                onPress={this.onHapalanReset(
                  this.state.number,
                  this.state.number_of_ayah
                )}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Circle color={blue} />
                  <Text style={{ color: blue, fontWeight: 'bold' }}>
                    Reset Hapalan
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                title="Delete Hapalan"
                onPress={this.onHapalanDelete(this.state.number)}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Circle color={red} />
                  <Text style={{ color: red, fontWeight: 'bold' }}>
                    Delete Hapalan
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

export default ListSurah;
