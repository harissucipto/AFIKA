import { TEST } from '../actions/types';

const INITIAl_STATE = {
  test: []
};

export default (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, test: [{ id: 1 }] };

    default:
      return state;
  }
};
