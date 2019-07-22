import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Picker,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import {
  WingBlank,
  Flex,
  PickerView,
  Checkbox,
  TextareaItem,
  WhiteSpace
} from 'antd-mobile-rn';
import { primary } from '../Theme/Color';
import { JAC } from '../Theme/Text';

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
    deskripsiBackCard: '',
    selectAyat: 1,
    listAyat: []
  };

  componentWillReceiveProps(props) {
    const { surah } = props;
    if (surah) {
      const { number_of_ayah, displayHapalanAyats } = surah;
      const displayHapalanAyat = displayHapalanAyats.find(
        item => item.number === this.state.selectAyat
      );

      this.setState({
        listAyat: [...Array(Number(number_of_ayah)).keys()].map(x => ({
          label: x + 1 + '',
          value: x + 1
        }))
      });

      if (displayHapalanAyat) {
        this.setState({ ...displayHapalanAyat });
      } else {
        this.setState({ ...initDisplayHapalanAyat });
      }
    }
  }

  renderAyat = () => {
    return (
      <>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: primary,

            lineHeight: 44
          }}
        >
          {this.props.surah.text[this.state.selectAyat]}
        </Text>

        <WhiteSpace />
        <WhiteSpace />
        <Text
          style={{
            justifyContent: 'center'
          }}
        >
          {this.props.surah.translations.id.text[this.state.selectAyat]}
        </Text>
        <WhiteSpace />
      </>
    );
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

  changeFrontCheckBox = key => event => {
    this.setState(({ dataFrontCard }) => {
      return {
        dataFrontCard: {
          ...dataFrontCard,
          [key]: event.target.checked
        }
      };
    });
  };

  changeBackCheckBox = key => event => {
    this.setState(({ dataBackCard }) => {
      return {
        dataBackCard: {
          ...dataBackCard,
          [key]: event.target.checked
        }
      };
    });
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

    const { selectAyat } = this.state;
    const { name_latin } = this.props.surah;

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
            padding: 10
          }}
        >
          <WingBlank>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              {name_latin}
            </Text>
          </WingBlank>
          <WingBlank>
            <Flex justify="between">
              <Text>Pilih Ayat</Text>
              <WhiteSpace />
              <Picker
                selectedValue={selectAyat}
                style={{ height: 50, width: 100 }}
                onValueChange={this.changeAyat}
              >
                {listAyat.map(({ label, value }) => (
                  <Picker.Item label={label} value={value} key={label} />
                ))}
              </Picker>

              <Button
                title="prev"
                disabled={this.state.selectAyat <= 1}
                style={{ marginRight: 4 }}
                onPress={() => this.changeAyat(this.state.selectAyat - 1, 0)}
              />
              <Button
                title="next"
                disabled={this.state.selectAyat >= this.state.listAyat.length}
                style={{ marginRight: 4 }}
                onPress={() => this.changeAyat(this.state.selectAyat + 1, 0)}
              />
            </Flex>
          </WingBlank>

          <WhiteSpace />

          <WingBlank>
            <Text style={{ fontWeight: 'bold' }}>
              Preview Ayat dan Terjemahan:{' '}
            </Text>
            <WhiteSpace />
            {this.renderAyat()}
          </WingBlank>

          <WingBlank>
            <WhiteSpace />
            <Text style={{ fontWeight: 'bold' }}>Kontent Front Card:</Text>
            <WhiteSpace />
            <Checkbox
              onChange={this.changeFrontCheckBox('text')}
              checked={this.state.dataFrontCard.text}
            >
              Ayat
            </Checkbox>
            <WhiteSpace />
            <Checkbox
              onChange={this.changeFrontCheckBox('translations')}
              checked={this.state.dataFrontCard.translations}
            >
              Terjemahan
            </Checkbox>
            <WhiteSpace />
            <Checkbox
              onChange={this.changeFrontCheckBox('numberAyat')}
              checked={this.state.dataFrontCard.numberAyat}
            >
              Nomor Ayat
            </Checkbox>
            <WhiteSpace />
            <Checkbox
              style={{ marginBottom: 5 }}
              onChange={this.changeFrontCheckBox('deskripsi')}
              checked={this.state.dataFrontCard.deskripsi}
            >
              Deskripsi
            </Checkbox>
            <WhiteSpace />
            {this.state.dataFrontCard.deskripsi && (
              <TextareaItem
                rows={4}
                placeholder="Deskripsi Front Card"
                value={this.state.deskripsiFrontCard}
                onChange={value => this.setState({ deskripsiFrontCard: value })}
              />
            )}
          </WingBlank>

          <WingBlank style={{ marginBottom: 30 }}>
            <Text style={{ fontWeight: 'bold' }}>Kontent Back Card:</Text>
            <WhiteSpace />
            <Checkbox
              onChange={this.changeBackCheckBox('text')}
              checked={this.state.dataBackCard.text}
            >
              Ayat
            </Checkbox>
            <WhiteSpace />
            <Checkbox
              onChange={this.changeBackCheckBox('translations')}
              checked={this.state.dataBackCard.translations}
            >
              Terjemahan
            </Checkbox>
            <WhiteSpace />
            <Checkbox
              onChange={this.changeBackCheckBox('numberAyat')}
              checked={this.state.dataBackCard.numberAyat}
            >
              Nomor Ayat
            </Checkbox>
            <WhiteSpace />
            <Checkbox
              onChange={this.changeBackCheckBox('deskripsi')}
              checked={this.state.dataBackCard.deskripsi}
              style={{ marginBottom: 5 }}
            >
              Deskripsi
            </Checkbox>
            <WhiteSpace />

            {this.state.dataBackCard.deskripsi && (
              <TextareaItem
                rows={4}
                placeholder="Deskripsi Back Card"
                value={this.state.deskripsiBackCard}
                onChange={value => this.setState({ deskripsiBackCard: value })}
              />
            )}
          </WingBlank>

          <View style={{ marginBottom: 30 }}>
            <Button
              title={'Simpan Perubahan Ayat ke ' + this.state.selectAyat}
              onPress={this.simpanEdit}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default CardEdit;
