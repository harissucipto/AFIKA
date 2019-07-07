import { Container } from 'unstated';
import _ from 'lodash';

import { surahs } from '../assets/surahs';

class DataHapalan extends Container {
  state = {
    surahs,
    hapalanSurahs: [],
    querySurah: ''
  };

  addHapalanSurahs = surah =>
    this.setState(({ hapalanSurahs }) => ({
      hapalanSurahs: [...hapalanSurahs, surah]
    }));

  setQuery = value => this.setState({ querySurah: value });
  clearQuery = () => this.setState({ querySurah: '' });
}

export default DataHapalan;
