import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

const url = 'http://challenge-react.alkemy.org/';

function LogInForm() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;

      let res;
      try {
        res = await axios.post(url, { email, password });
        if (res.status === 200) {
          window.sessionStorage.setItem('token', res.data.token);
          history.push('/');
        } else {
          throw new Error(res.data);
        }
      } catch (err) {
        formik.errors.email = 'Invalid email. Try \'challenge@alkemy.org\'';
        formik.errors.password = 'Invalid password. Try \'react\'';
      }
    },
  });

  return (
    <div className="log-in-form">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isInvalid={!!formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={!!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LogInForm;
