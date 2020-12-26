import { ADD_COMPANY, DELETE_COMPANY } from '../Actions/types';
const companyReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };

    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter((company: any) => company.id !== action.payload),
      };

    default:
      return state;
  }
};

export default companyReducer;
