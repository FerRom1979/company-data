import React from 'react';
import Companies from '../Companies/index';
import FormData from '../FormData/index';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const company = useSelector((state: any) => state.companies);
  return (
    <div className="fluid ">
      <div className="row ">
        <div className="col-8  ">
          {company.length === 0 ? <h1>Actualmente no hay empresas para revisar</h1> : <Companies />}
        </div>
        <div className="col-4 ">
          <FormData />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
