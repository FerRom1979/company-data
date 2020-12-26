import { ADD_COMPANY, DELETE_COMPANY } from './types';

export const addCompanyAction = (company: any) => ({
  type: ADD_COMPANY,
  payload: company,
});

export const deleteCompanyAction = (companyId: any) => ({
  type: DELETE_COMPANY,
  payload: companyId,
});
