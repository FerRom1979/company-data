import React, { ChangeEvent, useState } from 'react';

interface NewCompanyInputProps {
  // eslint-disable-next-line no-unused-vars
  addCompany(company: string): void;
}

// eslint-disable-next-line react/prop-types
const FormCompany: React.FC<NewCompanyInputProps> = ({ addCompany }) => {
  const [company, setCompany] = useState('');

  const updateCompany = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const onAddCompany = () => {
    addCompany(company);
    setCompany('');
  };
  return (
    <div>
      <input
        onChange={updateCompany}
        value={company}
        type="text"
        name="company"
        placeholder="Empresa"
      />

      <button onClick={onAddCompany}>agregar empresa</button>
    </div>
  );
};

export default FormCompany;
