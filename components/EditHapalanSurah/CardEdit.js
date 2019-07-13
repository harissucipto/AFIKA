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
        <Text style={{ justifyContent: 'center', marginTop: 5 }}>
          {this.props.surah.text[this.state.selectAyat]}
        </Text>
        <Text
          style={{ justifyContent: 'center', marginBottom: 10, marginTop: 5 }}
        >
          {this.props.surah.translations.id.text[this.state.selectAyat]}
        </Text>
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

    console.log([...filterData, newData], 'data mapped');

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
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <WingBlank>
          <Text>{name_latin}</Text>
        </WingBlank>
        <WingBlank>
          <Flex justify="between">
            <Text>Pilih Ayat</Text>
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
          <Text>Preview Ayat dan Terjemahan: </Text>
          {this.renderAyat()}
        </WingBlank>

        <WingBlank>
          <Text>Kontent Front Card:</Text>
          <Checkbox
            onChange={this.changeFrontCheckBox('text')}
            checked={this.state.dataFrontCard.text}
          >
            Ayat
          </Checkbox>
          <Checkbox
            onChange={this.changeFrontCheckBox('translations')}
            checked={this.state.dataFrontCard.translations}
          >
            Terjemahan
          </Checkbox>
          <Checkbox
            onChange={this.changeFrontCheckBox('numberAyat')}
            checked={this.state.dataFrontCard.numberAyat}
          >
            Nomor Ayat
          </Checkbox>
          <Checkbox
            style={{ marginBottom: 5 }}
            onChange={this.changeFrontCheckBox('deskripsi')}
            checked={this.state.dataFrontCard.deskripsi}
          >
            Deskripsi
          </Checkbox>
          {this.state.dataFrontCard.deskripsi && (
            <TextareaItem
              rows={4}
              placeholder="Deskripsi Front Card"
              value={this.state.deskripsiFrontCard}
              onChange={value => this.setState({ deskripsiFrontCard: value })}
            />
          )}
        </WingBlank>

        <WingBlank>
          <Text>Kontent Back Card:</Text>
          <Checkbox
            onChange={this.changeBackCheckBox('text')}
            checked={this.state.dataBackCard.text}
          >
            Ayat
          </Checkbox>
          <Checkbox
            onChange={this.changeBackCheckBox('translations')}
            checked={this.state.dataBackCard.translations}
          >
            Terjemahan
          </Checkbox>
          <Checkbox
            onChange={this.changeBackCheckBox('numberAyat')}
            checked={this.state.dataBackCard.numberAyat}
          >
            Nomor Ayat
          </Checkbox>
          <Checkbox
            onChange={this.changeBackCheckBox('deskripsi')}
            checked={this.state.dataBackCard.deskripsi}
            style={{ marginBottom: 5 }}
          >
            Deskripsi
          </Checkbox>

          {this.state.dataBackCard.deskripsi && (
            <TextareaItem
              rows={4}
              placeholder="Deskripsi Front Card"
              value={this.state.deskripsiBackCard}
              onChange={value => this.setState({ deskripsiBackCard: value })}
            />
          )}
        </WingBlank>

        <Button
          title={'Simpan Perubahan Ayat ke ' + this.state.selectAyat}
          onPress={this.simpanEdit}
        />
      </ScrollView>
    );
  }
}

export default CardEdit;
