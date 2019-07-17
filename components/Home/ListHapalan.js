import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Button } from 'react-native';
import { List, WingBlank, Flex, Modal } from 'antd-mobile-rn';

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
      number: surah.number
    });
  onHapalanDelete = number => () => {
    this.props.deleteHapalanSurah(number);
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

  onHapalanReview = number => () => {
    console.log(number, 'numbernya');
    this.setState({
      visible: false,
      ...surahSelected
    });
    this.props.selectEditSurah(number);
    this.props.navigation.navigate('ReviewHapalanScreen', { number });
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
            <Item key={surah.number}>
              <WingBlank
                style={{
                  backgroundColor: 'yellow',
                  height: 48,
                  paddingLeft: 11,
                  paddingRight: 11,
                  marginLeft: 10,
                  marginRight: 10
                }}
              >
                <Flex justify="between">
                  <TouchableOpacity
                    onPress={this.onHapalanReview(surah.number)}
                  >
                    <Text>V {surah.name_latin}</Text>
                  </TouchableOpacity>

                  <Text>no. {surah.number}</Text>
                </Flex>
                <Flex justify="between">
                  <JumlahReview surah={surah} />
                  <Flex>
                    <TouchableOpacity onPress={this.onSettingOpen(surah)}>
                      <Text style={{ paddingLeft: 20 }}>:</Text>
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
                onPress={() => console.log('reset hapalan')}
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
