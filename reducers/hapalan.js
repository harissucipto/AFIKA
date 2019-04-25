import { TAMBAH_HAPALAN } from '../actions/types';

const INITIAl_STATE = {
  hapalan: []
};

export default (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case TAMBAH_HAPALAN:
      return { ...state, hapalan: [...state.hapalan, action.payload] };

    default:
      return state;
  }
};
