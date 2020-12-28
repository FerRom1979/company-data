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

  const onSubmit = (data: IFormData, e: any) => {
    console.log(data);
    const newEmployee = {
      id: employees.length,
      name: data.name,
      address: data.address,
      company: data.company,
    };
    dispatch(addEmployeeAction(newEmployee));
    e.target.reset();
  };

  return (
    <div className="container mt-4 bg-secondary my-4">
      <h3 className="text-center">Registrar empleados</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          placeholder="nombré"
          ref={register({ pattern: /^[A-Za-z]+$/i })}
          className="form-control my-2"
        />
        {errors.name && (
          <span className="text-danger text-small d-block mb-2">solo se admiten letras</span>
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
          <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>
        )}
        <div>
          <input type="submit" className="btn btn-primary mr-2 mb-2 w-100" value="enviar" />
        </div>
      </form>
    </div>
  );
};

export default FormPerson;
