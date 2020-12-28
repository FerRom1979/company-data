import { createStore } from 'redux';
import reducer from './reducer/index';

const initialState = {
  companies: [],
  employees: [],
  dataCompany: [],
};

export const store = createStore(reducer, initialState);
