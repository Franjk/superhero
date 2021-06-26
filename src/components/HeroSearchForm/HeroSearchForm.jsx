import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { axiosSuperhero } from '../../axios';
import './HeroSearchForm.scss';

function HeroSearchForm({ submitFn, loadingFn }) {
  const formik = useFormik({
    initialValues: {
      heroName: '',
    },
    validationSchema: Yup.object({
      heroName: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      const { heroName } = values;

      loadingFn(true);

      let res;
      try {
        res = await axiosSuperhero.get(`/search/${heroName}`);
        if (res.status === 200) {
          submitFn(res.data.results);
        } else {
          throw new Error(res.data);
        }
      } catch (err) {
        formik.errors.heroName = 'Error searching heroes, please try again.';
      }
    },
  });

  return (
    <Form className="hero-search-form d-flex" noValidate onSubmit={formik.handleSubmit}>

      <Form.Control
        type="text"
        placeholder="Enter hero name"
        name="heroName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.heroName}
        isInvalid={!!formik.errors.heroName}
      />

      <Button variant="primary" type="submit">
        Buscar
      </Button>

      <Form.Control.Feedback type="invalid" className="hero-search-form-feedback">
        {formik.errors.heroName}
      </Form.Control.Feedback>

    </Form>
  );
}

HeroSearchForm.propTypes = {
  submitFn: PropTypes.func.isRequired,
  loadingFn: PropTypes.func.isRequired,
};

export default HeroSearchForm;
