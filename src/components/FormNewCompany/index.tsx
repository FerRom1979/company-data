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

  const onSubmit = (data: IFormCompanyData, e: any) => {
    const newCompany = {
      id: companies.length,
      company: data.company,
      address: data.address,
      phone: data.phone,
      workers: data.workers,
    };
    dispatch(addCompanyAction(newCompany));
    e.target.reset();
  };

  return (
    <div className="container mt-4 bg-secondary">
      <h3 className="text-center">Cargar Empresa</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="company"
          placeholder="empresa"
          ref={register({ required: true })}
          className="form-control my-2"
        />
        {errors.company && (
          <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>
        )}
        <input
          name="address"
          placeholder="dirección"
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.address && (
          <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>
        )}
        <input
          name="phone"
          placeholder="teléfono"
          type="number"
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.phone && (
          <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>
        )}

        <input
          name="workers"
          placeholder="personal"
          type="number"
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.workers && (
          <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>
        )}

        <input type="submit" className="btn btn-primary mr-2 mb-2 w-100" value="Cargar" />
      </form>
    </div>
  );
};

export default FormCompany;
