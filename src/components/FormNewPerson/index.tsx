import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { IFormData } from '../../types';
import { addEmployeeAction } from '../../Redux/Actions/index';

const FormPerson = () => {
  const dispatch = useDispatch();
  const company = useSelector((state: any) => state.companies);
  const employees = useSelector((state: any) => state.employees);
  const { register, handleSubmit, errors } = useForm<IFormData>();

  const onSubmit = (data: any) => {
    console.log(data);
    const newEmployee = {
      id: employees.length,
      name: data.name,
      address: data.address,
      company: data.company,
    };
    dispatch(addEmployeeAction(newEmployee));
  };

  return (
    <div className="container mt-4 bg-secondary my-4">
      <h3 className="text-center">Formulario Personas</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          placeholder="name"
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

        <select
          className="form-control my-2"
          name="company"
          placeholder="company"
          ref={register({ required: true })}
        >
          {company.map((company: any, index: number) => {
            return <option key={index}>{company.company}</option>;
          })}
        </select>
        {errors.address && (
          <span className="text-danger text-small d-block mb-2">This field is required</span>
        )}
        <button type="submit" className="btn btn-primary mr-2 mb-2">
          Enviar
        </button>
        <button type="reset" className="btn btn-primary mb-2">
          limpiar
        </button>
      </form>
    </div>
  );
};

export default FormPerson;
