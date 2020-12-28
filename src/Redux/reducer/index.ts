import {
  ADD_COMPANY,
  DELETE_COMPANY,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  GET_COMPANY,
} from '../Actions/types';
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

    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((employee: any) => employee.id !== action.payload),
      };

    case GET_COMPANY:
      return {
        ...state,
        dataCompany: [action.payload],
      };

    default:
      return state;
  }
};

export default companyReducer;
