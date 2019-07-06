import { Container } from 'unstated';
import _ from 'lodash';

import { surahs } from '../assets/surahs';

class DataHapalan extends Container {
  state = {
    surahs,
    hapalanSurahs: []
  };

  addHapalanSurahs = surah =>
    this.setState(({ hapalanSurahs }) => ({
      hapalanSurahs: [...hapalanSurahs, surah]
    }));
}

export default DataHapalan;
