import React from 'react';
import FormCompany from '../FormNewCompany/index';
import FormPerson from '../FormNewPerson/index';
import { useSelector } from 'react-redux';

const FormData = () => {
  const company = useSelector((state: any) => state.companies);

  return (
    <div className="container">
      <FormCompany />
      {company.length !== 0 && <FormPerson />}
    </div>
  );
};

export default FormData;
