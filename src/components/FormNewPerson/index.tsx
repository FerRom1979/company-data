import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormData } from '../../types';

const FormPerson = () => {
  const { register, handleSubmit, watch, errors } = useForm<IFormData>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(watch('name'));
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

        <button type="submit" className="btn btn-primary">
          Cargar
        </button>
      </form>
    </div>
  );
};

export default FormPerson;
