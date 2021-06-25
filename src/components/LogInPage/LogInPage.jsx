import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import LogInForm from '../LogInForm/LogInForm';

function LogInPage({ storeToken }) {
  return (
    <Container>
      <h1 className="mb-5">Log In</h1>
      <Row className="justify-content-center">
        <LogInForm storeToken={storeToken} />
      </Row>
    </Container>
  );
}

LogInPage.propTypes = {
  storeToken: PropTypes.func.isRequired,
};

export default LogInPage;
