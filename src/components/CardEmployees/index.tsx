import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployeeAction } from '../../Redux/Actions/index';

const CerdEmployees = () => {
  const employee = useSelector((state: any) => state.employees);
  const dispatch = useDispatch();

  return (
    <div>
      <>
        {employee.map((employee: any, index: any) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div
              className="card mb-3 mx-auto"
              style={{ width: '50%', height: '250px' }}
              key={index}
            >
              <div className="card-header">{employee.name}</div>
              <div className="card-body">
                <h5 className="card-title">Direccion</h5>
                <p className="card-text">{employee.address}</p>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn "
                  onClick={() => dispatch(deleteEmployeeAction(employee.id))}
                >
                  Eliminar
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