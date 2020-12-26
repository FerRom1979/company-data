import { createStore } from 'redux';
import reducer from './reducer/index';

const initialState = {
  companies: [],
};

export const store = createStore(reducer, initialState);
