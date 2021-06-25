import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function LogOutPage({ storeToken }) {
  storeToken('');
  return (
    <Redirect to="/" />
  );
}

LogOutPage.propTypes = {
  storeToken: PropTypes.func.isRequired,
};

export default LogOutPage;
