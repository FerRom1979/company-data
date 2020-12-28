export interface Itodos {
  todos: string[];
  name: string;
  direction: string;
  person: string;
  phone: string;
}
export interface IFormData {
  id: number;
  name: string;
  address: string;
  exampleRequired: string;
  company: string;
}

export interface IFormCompanyData {
  id: number;
  name: string;
  address: string;
  exampleRequired: string;
  phone: number;
  workers: number;
  company: string;
}

export interface NewCompanyInputProps {
  // eslint-disable-next-line no-unused-vars
  addCompany(company: any): void;
}
export interface NewEmployeeInputProps {
  // eslint-disable-next-line no-unused-vars
  addEmployee(employe: any): void;
}

export interface IfilterEmployees {
  filterEmployees: any;
}
