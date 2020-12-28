import React from 'react';
import FormCompany from '../FormNewCompany/index';
import FormPerson from '../FormNewPerson/index';

const FormData = () => {
  return (
    <div className="container">
      <FormCompany />

      <FormPerson />
    </div>
  );
};

export default FormData;
