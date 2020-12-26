import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteCompanyAction } from '../../Redux/Actions/index';

const CardCompanies = () => {
  const company = useSelector((state: any) => state.companies);
  const dispatch = useDispatch();
  return (
    <>
      {company.map((company: any, index: any) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="card mb-3" style={{ width: '100%', height: '350px' }} key={index}>
            <div className="card-header">{company.company}</div>
            <div className="card-body">
              <h5 className="card-title">Direccion</h5>
              <p className="card-text">{company.address}</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Telefono</h5>
              <p className="card-text">{company.phone}</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Personal</h5>
              <p className="card-text">{company.workers}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              descriccion general de la empresa
              <button className="btn " onClick={() => dispatch(deleteCompanyAction(company.id))}>
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardCompanies;
