import { Container } from 'unstated';
import _ from 'lodash';

import { surahs } from '../assets/surahs';

const initalStateSurah = {
  dataFrontCard: {
    text: false,
    translations: true,
    numberAyat: true,
    content: false
  },
  dataBackCard: {
    text: true,
    translations: false,
    numberAyat: false,
    content: false
  },
  contentFrontCard: '',
  contentBackCard: ''
};

class DataHapalan extends Container {
  state = {
    surahs,
    hapalanSurahs: [],
    querySurah: '',
    editSurah: {}
  };

  addHapalanSurahs = surah =>
    this.setState(({ hapalanSurahs }) => ({
      hapalanSurahs: [...hapalanSurahs, { ...initalStateSurah, ...surah }]
    }));

  deleteHapalanSurah = number =>
    this.setState(({ hapalanSurahs }) => ({
      hapalanSurahs: hapalanSurahs.filter(surah => surah.number !== number)
    }));

  setQuery = value => this.setState({ querySurah: value });
  clearQuery = () => this.setState({ querySurah: '' });

  selectEditSurah = number =>
    this.setState(({ hapalanSurahs }) => ({
      editSurah: hapalanSurahs.find(surah => surah.number === number)
    }));
}

export default DataHapalan;
