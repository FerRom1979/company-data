import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { IFormCompanyData } from '../../types';
import { addCompanyAction } from '../../Redux/Actions/index';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const FormCompany = () => {
  const [t] = useTranslation('global');
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
      <h3 className="text-center">{t('formCompany.title-form')}</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="company"
          placeholder={t('formCompany.input-company')}
          ref={register({ required: true })}
          className="form-control my-2"
        />
        {errors.company && (
          <span className="text-danger text-small d-block mb-2">
            {t('formCompany.error-message')}
          </span>
        )}
        <input
          name="address"
          placeholder={t('formCompany.input-address')}
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.address && (
          <span className="text-danger text-small d-block mb-2">
            {t('formCompany.error-message')}
          </span>
        )}
        <input
          name="phone"
          placeholder={t('formCompany.input-phone')}
          type="number"
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.phone && (
          <span className="text-danger text-small d-block mb-2">
            {t('formCompany.error-message')}
          </span>
        )}

        <input
          name="workers"
          placeholder={t('formCompany.input-staff')}
          type="number"
          ref={register({ required: true })}
          className="form-control my-2"
        />

        {errors.workers && (
          <span className="text-danger text-small d-block mb-2">
            {t('formCompany.error-message')}
          </span>
        )}

        <button type="submit" className="btn btn-info mr-2 mb-2 w-100">
          {t('formCompany.button-save')}
        </button>
      </form>
    </div>
  );
};

export default FormCompany;
