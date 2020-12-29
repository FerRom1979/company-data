import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { IFormData } from '../../types';
import { addEmployeeAction } from '../../Redux/Actions/index';
import { useTranslation } from 'react-i18next';

const FormPerson = () => {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const company = useSelector((state: any) => state.companies);
  const employees = useSelector((state: any) => state.employees);
  const { register, handleSubmit, errors } = useForm<IFormData>();

  const onSubmit = (data: IFormData, e: any) => {
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
      <h3 className="text-center">{t('formPersonal.title-form')}</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          placeholder={t('formPersonal.input-name')}
          ref={register({ pattern: /^[A-Za-z]+$/i })}
          className="form-control my-2"
        />
        {errors.name && (
          <span className="text-danger text-small d-block mb-2">
            {t('formPersonal.error-message-one')}
          </span>
        )}
        <input
          name="address"
          placeholder={t('formPersonal.input-address')}
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.address && (
          <span className="text-danger text-small d-block mb-2">
            {t('formPersonal.error-message-two')}
          </span>
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
          <span className="text-danger text-small d-block mb-2">
            {t('formPersonal.error-message-two')}
          </span>
        )}
        <div>
          <button type="submit" className="btn btn-info mr-2 mb-2 w-100">
            {t('formPersonal.button-save')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPerson;
