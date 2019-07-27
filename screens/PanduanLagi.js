import React from 'react';
import { Text, ActivityIndicator, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { primary } from '../components/Theme/Color';
import HomeScreen from './HomeScreen';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 320,
    height: 320
  }
});

const slides = [
  {
    key: 'pembuka',
    title: 'Panduan Penggunaan AFIKA',
    text:
      'AFIKA adalah Aplikasi yang digunakan untuk Menghapal Al-Quran dengan metode spaced - repetetion, atau sebuah metode pengualangan hapalan dengan jeda waktu yang optimal',
    image: require('../assets/gambar3-min.png'),
    backgroundColor: primary
  },

  {
    key: 'somethun-dos',
    title: 'Membantu mempertahankan hapalan kamu',
    text:
      'Algoritma Cerdas dapat menghitung jeda waktu optimal untuk mengulang hapalan kamu agar tetap ingat.',
    image: require('../assets/gambar1-min.png'),
    backgroundColor: primary
  },

  {
    key: 'tambah-hapalan',
    title: 'Metode pembelajaran FlashCard',
    text:
      'FlashCard membantu kamu untuk mengubah kontent yang ingin dihapal dengan menyesuaikan petunjuk dan jawaban pada kartu hapalan.',
    image: require('../assets/gambar2-min.png'),
    backgroundColor: primary
  },
  {
    key: 'AFIKA',
    title: 'Mulai Gunakan AFIKA',
    text:
      'Nabi Muhammad S.A.W bersabda yang artinya “Sesungguhnya perumpaan pemilik Qur’an seperti pemilik unta yang tertambat. Kalau dia menjaganya akan tetap terikat, kalau dibiarkan akan lepas.” (HR. Muttafaq ‘alihi).',
    image: require('../assets/gambar4-min.png'),
    backgroundColor: primary
  }
];

export default class App extends React.Component {
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };

  _onDone = async () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.pop();
  };
  render() {
    // params navigasi
    return (
      <AppIntroSlider
        slides={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        onDone={this._onDone}
      />
    );
  }
}
