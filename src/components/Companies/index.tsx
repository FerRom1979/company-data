import React from 'react';
import CardCompanies from '../CardCompanies/index';
import { useTranslation } from 'react-i18next';

const Companies = () => {
  const [t] = useTranslation('global');
  return (
    <div className=" p-4 ">
      <div className="row border">
        <div className="col-12 bg-secondary p-0 m-0 w-75">
          <h3 className="p-2 text-white">{t('companies.title')}</h3>
        </div>
        <div className="col-10  mx-auto  p-0 m-2">
          <CardCompanies />
        </div>
      </div>
    </div>
  );
};

export default Companies;
