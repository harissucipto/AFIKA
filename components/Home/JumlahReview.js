import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Flex } from 'antd-mobile-rn';
import moment from 'moment';

import { isScheduleNow, schduleToDate } from '../../unstated/utils';

class JumlahReview extends Component {
  countBaru = () => {
    const totalBaru = this.props.surah.dataBelajar.filter(
      item => !item.terakhirReview
    ).length;

    return totalBaru;
  };

  countSekarang = () => {
    const totalSekarang = this.props.surah.dataBelajar.filter(item => {
      const nextReview = schduleToDate(item.supermemo.schedule);
      return isScheduleNow(
        new moment(),
        new moment(item.terakhirReview),
        new moment(nextReview)
      );
    }).length;
    return totalSekarang;
  };

  countNanti = () => {
    const totalNanti = this.props.surah.dataBelajar.filter(item => {
      const nextReview = schduleToDate(item.supermemo.schedule);
      return new moment(nextReview).isAfter(new moment(), 'd');
    }).length;
    return totalNanti;
  };

  render() {
    return (
      <Flex>
        <Text>Review : </Text>
        <Text>{this.countBaru()}</Text>
        <Text>{this.countSekarang()}</Text>
        <Text>{this.countNanti()}</Text>
      </Flex>
    );
  }
}

export default JumlahReview;
