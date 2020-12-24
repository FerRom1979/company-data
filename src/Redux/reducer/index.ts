import { Action } from '../Actions/types';

export interface CompanyState {
  company: string[];
}

const initialState = {
  company: [],
};

export const companyReducer = (state: CompanyState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_COMPANY': {
      return { ...state, company: [...state.company, action.payload] };
    }

    default:
      return state;
  }
};
