import React, { useState } from 'react';
import CardEmployees from '../CardEmployees/index';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Overview = () => {
  const [t, i18n] = useTranslation('global');
  const [language, setLanguage] = useState('es');
  const companyData = useSelector((state: any) => state.dataCompany);

  const history = useHistory();
  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  };

  const goBack = () => {
    history.push('/');
  };
  return (
    <>
      <header className="d-sm-flex flex-row p-2 bg-info justify-content-between">
        <div className="d-sm-flex  ">
          <h3 className=" text-center text-white ">{t('overview.title')}</h3>
          <div className="m-auto">
            <button
              className="btn btn-outline-dark ml-2 text-white m-auto"
              onClick={() => goBack()}
            >
              {t('overview.button-back')}
              <span className="ml-2 ">
                <FontAwesomeIcon icon={faReply} />
              </span>
            </button>
          </div>
        </div>
        <div className="pr-0">
          <button className="btn btn-outline-dark  text-white " onClick={() => onChangeLanguage()}>
            EN/ES
          </button>
        </div>
      </header>
      <div className="fluid col border">
        <div>
          {companyData &&
            companyData.map((company: any, index: any) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div
                  className="card my-3 mx-auto"
                  style={{ width: '75%', height: '350px' }}
                  key={index}
                >
                  <div className="card-header bg-info">
                    <h3 className="text-white">{company.company}</h3>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{t('overview.input-address')} :</h5>
                    <p className="card-text pl-3 ml-3">{company.address}</p>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{t('overview.input-phone')} :</h5>
                    <p className="card-text pl-3 ml-3">{company.phone}</p>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{t('overview.input-staff')} :</h5>
                    <p className="card-text pl-3 ml-3">{company.workers}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <CardEmployees />
        </div>
      </div>
    </>
  );
};

export default Overview;
