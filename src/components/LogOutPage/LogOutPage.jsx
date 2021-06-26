/* eslint-disable no-unused-vars */
// import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function LogOutPage({ logOutFn }) {
  const history = useHistory();
  logOutFn('');
  history.push('/');
  return (
    null
  );
}

LogOutPage.propTypes = {
  logOutFn: PropTypes.func.isRequired,
};

export default LogOutPage;
