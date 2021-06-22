import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
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
      const accessToken = '4695976300416765';
      const url = `https://superheroapi.com/api.php/${accessToken}/search/${heroName}`;

      loadingFn(true);

      let res;
      try {
        res = await axios.get(url);
        console.log('res', res);
        if (res.status === 200) {
          console.log(res.data);
          submitFn(res.data.results);
          loadingFn(false);
        } else {
          throw new Error(res.data);
        }
      } catch (err) {
        console.log(err);
        formik.errors.heroName = 'Error test';
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

      <Form.Control.Feedback type="invalid">
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
