import React from 'react';
import CardEmployees from '../CardEmployees/index';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Overview = () => {
  const companyData = useSelector((state: any) => state.dataCompany);

  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };
  return (
    <>
      <header className="d-flex flex-row p-2 bg-primary">
        <h2>Información de la empresa</h2>
        <button className="btn " onClick={() => goBack()}>
          volver
        </button>
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
                  <div className="card-header">{company.company}</div>
                  <div className="card-body">
                    <h5 className="card-title">Dirección :</h5>
                    <p className="card-text">{company.address}</p>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Teléfono :</h5>
                    <p className="card-text">{company.phone}</p>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Personal :</h5>
                    <p className="card-text">{company.workers}</p>
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
