import { ADD_COMPANY, DELETE_COMPANY, ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_COMPANY } from './types';

export const addCompanyAction = (company: any) => ({
  type: ADD_COMPANY,
  payload: company,
});

export const deleteCompanyAction = (companyId: any) => ({
  type: DELETE_COMPANY,
  payload: companyId,
});
export const addEmployeeAction = (employee: any) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const deleteEmployeeAction = (employeeId: any) => ({
  type: DELETE_EMPLOYEE,
  payload: employeeId,
});

export const getCompanyAction = (companyData: any) => ({
  type: GET_COMPANY,
  payload: companyData,
});
