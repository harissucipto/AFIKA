// import library yang digunakan
import { combineReducers } from 'redux';
import test from './test';

// combine reducer store jadi  satu store
const appReducer = combineReducers({
  test
});

// export store
export default (state, action) => {
  return appReducer(state, action);
};
