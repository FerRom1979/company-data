import { createStore } from 'redux';
import reducer from './reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  companies: [],
  employees: [],
  dataCompany: [],
};
const compositeEnhancer = composeWithDevTools();

export const store = createStore(reducer, initialState, compositeEnhancer);
