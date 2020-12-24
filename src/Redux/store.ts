import { createStore } from 'redux';
import { companyReducer } from './reducer/index';

export const store = createStore(companyReducer);
