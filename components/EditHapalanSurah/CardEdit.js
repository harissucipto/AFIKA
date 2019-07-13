import React, { Component } from 'react';
import { ScrollView, View, Text, Picker } from 'react-native';
import { WingBlank, Flex, PickerView } from 'antd-mobile-rn';

class CardEdit extends Component {
  state = {
    dataFrontCard: {},
    dataBackCard: {},
    contentFrontCard: '',
    contentBackCard: '',
    selectAyat: 1,
    listAyat: []
  };

  componentWillReceiveProps(props) {
    const { surah } = props;
    if (surah) {
      const {
        dataFrontCard,
        dataBackCard,
        contentFrontCard,
        contentBackCard,
        number_of_ayah
      } = surah;
      this.setState({
        dataFrontCard,
        dataBackCard,
        contentFrontCard,
        contentBackCard,
        listAyat: [...Array(Number(number_of_ayah)).keys()].map(x => ({
          label: x + 1 + '',
          value: x + 1
        }))
      });
    }
  }

  renderAyat = () => {
    return <Text>{this.props.surah.text[this.state.selectAyat]}</Text>;
  };

  render() {
    const { listAyat } = this.state;
    if (!listAyat.length) return null;

    const { selectAyat } = this.state;
    const { name_latin } = this.props.surah;

    return (
      <>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <WingBlank>
              <Flex>
                <Text>{name_latin}</Text>
              </Flex>
            </WingBlank>
            <WingBlank>
              <Flex justify="between">
                <Text>Pilih Ayat</Text>
                <Picker
                  selectedValue={selectAyat}
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ selectAyat: itemValue })
                  }
                >
                  {listAyat.map(({ label, value }) => (
                    <Picker.Item label={label} value={value} key={label} />
                  ))}
                </Picker>
              </Flex>
            </WingBlank>
            <WingBlank>
              <Text>Preview Ayat</Text>
              {this.renderAyat()}
            </WingBlank>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default CardEdit;
