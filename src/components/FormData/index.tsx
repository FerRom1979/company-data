import React from 'react';
import FormCompany from '../FormNewCompany/index';
import FormPerson from '../FormNewPerson/index';
import { useDispatch, useSelector } from 'react-redux';
import { CompanyState } from '../../Redux/reducer/index';
import { addCompany } from '../../Redux/Actions';
const FormData = () => {
  const company = useSelector<CompanyState, CompanyState['company']>((state) => state.company);
  const dispatch = useDispatch();

  const onAddCompany = (company: string) => {
    dispatch(addCompany(company));
  };
  return (
    <div>
      <FormCompany addCompany={onAddCompany} />
      <>
        <ul>
          {company.map((company) => {
            return (
              <li key={company} style={{ color: 'red' }}>
                {company}
              </li>
            );
          })}
        </ul>
      </>
      <FormPerson />
    </div>
  );
};

export default FormData;
