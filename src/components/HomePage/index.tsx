import React, { useState } from 'react';
import Companies from '../Companies/index';
import FormData from '../FormData/index';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [t, i18n] = useTranslation('global');
  const [language, setLanguage] = useState('es');
  const company = useSelector((state: any) => state.companies);

  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  };
  return (
    <div className="fluid border w-100 h-100">
      <div className="row ">
        <div className="col-12 bg-secondary d-flex justify-content-end py-2">
          <div className="mr-4">
            <button className="btn btn-outline-dark  text-white" onClick={() => onChangeLanguage()}>
              EN/ES
            </button>
          </div>
        </div>
        <div className="col-8 ">
          {company.length === 0 ? (
            <div className="mw-100 mh-100 m-auto">
              <h2 className="text-center mt-4">{t('homepage.info')}</h2>
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
