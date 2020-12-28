import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { IFormCompanyData } from '../../types';
import { addCompanyAction } from '../../Redux/Actions/index';

// eslint-disable-next-line react/prop-types
const FormCompany = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state: any) => state.companies);

  const { register, handleSubmit, errors } = useForm<IFormCompanyData>();

  const onSubmit = (data: any) => {
    const newCompany = {
      id: companies.length,
      company: data.company,
      address: data.address,
      phone: data.phone,
      workers: data.workers,
    };
    dispatch(addCompanyAction(newCompany));
  };

  return (
    <div className="container mt-4 bg-secondary">
      <h3 className="text-center">Cargar Empresa</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="company"
          placeholder="company"
          ref={register({
            required: true,
          })}
          className="form-control my-2"
        />
        {errors.name && (
          <span className="text-danger text-small d-block mb-2">This field is required</span>
        )}
        <input
          name="address"
          placeholder="address"
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.address && (
          <span className="text-danger text-small d-block mb-2">This field is required</span>
        )}
        <input
          name="phone"
          placeholder="phone"
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.phone && (
          <span className="text-danger text-small d-block mb-2">This field is required</span>
        )}

        <input
          name="workers"
          placeholder="workers"
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.workers && (
          <span className="text-danger text-small d-block mb-2">This field is required</span>
        )}

        <button type="submit" className="btn btn-primary mr-2 mb-2">
          cargar
        </button>
        <button type="reset" className="btn btn-primary mb-2">
          limpiar
        </button>
      </form>
    </div>
  );
};

export default FormCompany;
