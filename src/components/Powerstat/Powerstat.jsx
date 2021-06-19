import React from 'react';
import PropTypes from 'prop-types';
import './Powerstat.scss';

function Powerstat({ type, value }) {
  return (
    <div className={`powerstat ${type}`}>
      {type}
      :
      {' '}
      {value}
    </div>
  );
}

Powerstat.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Powerstat;
