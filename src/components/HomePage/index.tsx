import React from 'react';
import Companies from '../Companies/index';
import FormData from '../FormData/index';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const company = useSelector((state: any) => state.companies);
  return (
    <div className="fluid border vw-100 vh-100">
      <div className="row ">
        <div className="col-8  ">
          {company.length === 0 ? (
            <div className="mw-100 mh-100 m-auto">
              <h2 className="text-center mt-4">Actualmente no hay empresas para revisar</h2>
            </div>
          ) : (
            <div>
              <Companies />
            </div>
          )}
        </div>
        <div className="col-4 ">
          <FormData />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
