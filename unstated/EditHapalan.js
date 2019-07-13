import { Container } from 'unstated';

import { surahs } from '../assets/surahs';

const initalStateSurah = {
  dataFrontCard: {},
  dataBackCard: {},
  contentFrontCard: '',
  contentBackCard: ''
};

class EditHapalan extends Container {
  state = {
    dataFrontCard: {},
    dataBackCard: {},
    contentFrontCard: '',
    contentBackCard: '',
    selectAyat: 1
  };

  setDataEdit = data => ({ ...data, selectAyat: 1 });
}

export default EditHapalan;
