import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCompanyAction, getCompanyAction } from '../../Redux/Actions/index';

const CardCompanies = () => {
  const company = useSelector((state: any) => state.companies);
  const dispatch = useDispatch();

  return (
    <>
      {company.map((item: any, index: any) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="card mb-3" style={{ width: '100%', height: '350px' }} key={index}>
            <div className="card-header">{item.company}</div>
            <div className="card-body">
              <h5 className="card-title">Dirección :</h5>
              <p className="card-text">{item.address}</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Teléfono :</h5>
              <p className="card-text">{item.phone}</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Personal :</h5>
              <p className="card-text">{item.workers}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Link to="/overview">
                <button
                  className="btn btn-secondary"
                  onClick={() => dispatch(getCompanyAction(item))}
                >
                  Más información
                </button>
              </Link>
              <button
                className="btn btn-secondary"
                onClick={() => dispatch(deleteCompanyAction(item.id))}
              >
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
