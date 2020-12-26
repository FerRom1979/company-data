export interface Itodos {
  todos: string[];
  name: string;
  direction: string;
  person: string;
  phone: string;
}
export interface IFormData {
  name: string;
  address: string;
  exampleRequired: string;
}

export interface IFormCompanyData {
  id: number;
  name: string;
  address: string;
  exampleRequired: string;
  phone: number;
  workers: number;
}

export interface NewCompanyInputProps {
  // eslint-disable-next-line no-unused-vars
  addCompany(company: any): void;
}
