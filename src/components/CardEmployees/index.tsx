import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployeeAction } from '../../Redux/Actions/index';
import { useTranslation } from 'react-i18next';

const CerdEmployees = () => {
  const [t] = useTranslation('global');
  const employee = useSelector((state: any) => state.employees);
  const companyData = useSelector((state: any) => state.dataCompany);
  const dispatch = useDispatch();
  const newEmployees = employee.filter((item: any) => item.company === companyData[0].company);

  return (
    <div>
      <>
        {newEmployees.map((employee: any, index: any) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div
              className="card mb-3 mx-auto"
              style={{ width: '50%', height: '250px' }}
              key={index}
            >
              <div className="card-header bg-info">
                <span className="text-white">
                  {t('cardemployees.card-header')} : {employee.name}
                </span>{' '}
              </div>
              <div className="card-body">
                <h5 className="card-title">{t('cardemployees.card-title')} :</h5>
                <p className="card-text pl-3 ml-3">{employee.address}</p>
              </div>

              <div className="card-footer d-flex justify-content-between bg-info">
                <button
                  className="btn btn-outline-dark text-white"
                  onClick={() => dispatch(deleteEmployeeAction(employee.id))}
                >
                  {t('cardemployees.button-delete')}
                </button>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default CerdEmployees;
