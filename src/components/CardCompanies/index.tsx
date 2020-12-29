import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCompanyAction, getCompanyAction } from '../../Redux/Actions/index';
import { useTranslation } from 'react-i18next';

const CardCompanies = () => {
  const [t] = useTranslation('global');
  const company = useSelector((state: any) => state.companies);
  const dispatch = useDispatch();

  return (
    <>
      {company.map((item: any, index: any) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="card my-3 " style={{ width: '100%', height: '350px' }} key={index}>
            <div className="card-header bg-info">
              <h3 className="fw-bold text-white">{item.company}</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">{t('cardcompanies.title-address')} :</h5>
              <p className="card-text pl-4 ml-4">{item.address}</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">{t('cardcompanies.title-phone')} :</h5>
              <p className="card-text pl-4 ml-4">{item.phone}</p>
            </div>
            <div className="card-body mb-3">
              <h5 className="card-title">{t('cardcompanies.title-staff')} :</h5>
              <p className="card-text pl-4 ml-4">{item.workers}</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-info">
              <Link to="/overview">
                <button
                  className="btn btn-outline-dark text-white"
                  onClick={() => dispatch(getCompanyAction(item))}
                >
                  {t('cardcompanies.button-overview')}
                </button>
              </Link>
              <button
                className="btn btn-outline-dark text-white"
                onClick={() => dispatch(deleteCompanyAction(item.id))}
              >
                {t('cardcompanies.button-delete')}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardCompanies;
