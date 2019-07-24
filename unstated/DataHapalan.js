import { Container } from 'unstated';
import _ from 'lodash';
import supermemo2 from 'supermemo2';
import stringify from 'json-stringify-safe';
import { AsyncStorage } from 'react-native';

import { surahs } from '../assets/surahs';

const displayHapalanSurah = {
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
  number: 0
};

class DataHapalan extends Container {
  state = {
    surahs,
    hapalanSurahs: [],
    querySurah: '',
    editSurah: {},
    isLoading: true,
    error: ''
  };

  fetchHapalanSurahs = async () => {
    this.setState({ isLoading: true });
    const value = await AsyncStorage.getItem('hapalanSurahs');
    const hapalanSurahs = value ? JSON.parse(value) : [];
    this.setState({ isLoading: false, hapalanSurahs: hapalanSurahs });
  };

  addHapalanSurahs = async surah => {
    this.setState({ isLoading: true });
    const newHapalanSurahs = [
      ...this.state.hapalanSurahs,
      {
        ...surah,
        displayHapalanAyats: [],
        dateInit: new Date(),
        dataBelajar: [...Array(Number(surah.number_of_ayah)).keys()].map(x => ({
          number: x + 1,
          supermemo: supermemo2(),
          terakhirReview: null
        }))
      }
    ];

    await AsyncStorage.setItem(
      'hapalanSurahs',
      stringify(newHapalanSurahs)
    ).catch(err => {
      console.log(err, 'ini error');
      this.setState({ isLoading: false, error: err });
    });

    this.setState(({ hapalanSurahs }) => ({
      isLoading: false,
      hapalanSurahs: newHapalanSurahs
    }));
  };

  deleteHapalanSurah = async number => {
    this.setState({ isLoading: true });

    const newHapalanSurahs = this.state.hapalanSurahs.filter(
      surah => surah.number !== number
    );

    await AsyncStorage.setItem(
      'hapalanSurahs',
      stringify(newHapalanSurahs)
    ).catch(err => {
      console.log(err, 'ini error');
      this.setState({ isLoading: false, error: err });
    });

    this.setState(({ hapalanSurahs }) => ({
      isLoading: false,
      hapalanSurahs: newHapalanSurahs
    }));
  };

  setQuery = value => this.setState({ querySurah: value });
  clearQuery = () => this.setState({ querySurah: '' });

  selectEditSurah = number =>
    this.setState(({ hapalanSurahs }) => ({
      editSurah: hapalanSurahs.find(surah => surah.number === number)
    }));

  editDisplayHapalanAyats = async data => {
    const { number, displayHapalanAyats } = data;

    this.setState({ isLoading: true });

    const newHapalanSurahs = this.state.hapalanSurahs.map(item =>
      item.number === number ? { ...item, displayHapalanAyats } : item
    );

    await AsyncStorage.setItem(
      'hapalanSurahs',
      stringify(newHapalanSurahs)
    ).catch(err => {
      console.log(err, 'ini error');
      this.setState({ isLoading: false, error: err });
    });

    this.setState(({ hapalanSurahs, editSurah }) => ({
      hapalanSurahs: newHapalanSurahs,
      editSurah: { ...editSurah, displayHapalanAyats },
      isLoading: false
    }));
  };

  updateBelajarHapalan = async data => {
    const { number, dataBelajar } = data;

    this.setState({ isLoading: true });

    const newHapalanSurahs = this.state.hapalanSurahs.map(item => {
      return item.number === number ? { ...item, dataBelajar } : item;
    });

    await AsyncStorage.setItem(
      'hapalanSurahs',
      stringify(newHapalanSurahs)
    ).catch(err => {
      console.log(err, 'ini error');
      this.setState({ isLoading: false, error: err });
    });

    this.setState(({ hapalanSurahs, editSurah }) => ({
      hapalanSurahs: newHapalanSurahs,
      editSurah: { ...editSurah, dataBelajar },
      isLoading: false
    }));
  };
}

export default DataHapalan;
