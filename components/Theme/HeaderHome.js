import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  AsyncStorage
} from 'react-native';

import { Header } from './Container';
import { Modal } from 'antd-mobile-rn';
import { red } from './Color';
import { H1, H3, H5 } from './Text';
import menu from '../../assets/menu.png';

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

export default class HeaderHome extends React.Component {
  state = {
    visible: false
  };

  onClose = () => this.setState({ visible: false });

  _kePanduan = () => {
    this.setState({ visible: false });
    this.props.navigation.navigate('PanduanLagi');
  };

  _deleteHapalan = async () => {
    await AsyncStorage.removeItem('hapalanSurahs');
    this.setState({ visible: false });
    this.props.navigation.replace('Home');
  };

  render() {
    const { countHapalan } = this.props;

    return (
      <Header>
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={() => this.setState({ visible: true })}>
            <Image source={menu} />
          </TouchableOpacity>
        </View>
        <H1>AFIKA</H1>
        <H3>Aplikasi Penghapal Al-Quran</H3>
        <H5>{countHapalan} / 114 Surah Ditambahkan</H5>
        <Modal
          transparent
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
        >
          <View>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <View style={{ flexGrow: 4 }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 10
                  }}
                >
                  MENU
                </Text>
              </View>
              <View style={{ flexGrow: 1 }}>
                <Button title="Batal" onPress={this.onClose} color="red" />
              </View>
            </View>

            <View>
              <View style={{ marginBottom: 10 }}>
                <TouchableOpacity onPress={this._kePanduan}>
                  <View style={{ flexDirection: 'row' }}>
                    <Circle color="#5B3E96" />
                    <Text style={{ color: '#5B3E96', fontWeight: 'bold' }}>
                      Panduan
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  title="Delete Hapalan"
                  onPress={this._deleteHapalan}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Circle color={red} />
                    <Text style={{ color: red, fontWeight: 'bold' }}>
                      Hapus Data Hapalan
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </Header>
    );
  }
}
