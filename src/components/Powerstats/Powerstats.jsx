import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
// import Powerstat from '../Powerstat/Powerstat';
import './Powerstats.scss';

// <Powerstat type={stat} value={powerstats[stat]} />
function Powerstats({ powerstats }) {
  return (
    <Table className="powerstats" hover size="sm">
      <tr>
        <td>Intelligence</td>
        <td>{powerstats.intelligence}</td>
        <td>Strength</td>
        <td>{powerstats.strength}</td>
      </tr>
      <tr>
        <td>Speed</td>
        <td>{powerstats.speed}</td>
        <td>Durability</td>
        <td>{powerstats.durability}</td>
      </tr>
      <tr>
        <td>Power</td>
        <td>{powerstats.power}</td>
        <td>Combat</td>
        <td>{powerstats.combat}</td>
      </tr>
    </Table>
  );
}

Powerstats.propTypes = {
  powerstats: PropTypes.shape({
    intelligence: PropTypes.string,
    strength: PropTypes.string,
    speed: PropTypes.string,
    durability: PropTypes.string,
    power: PropTypes.string,
    combat: PropTypes.string,
  }).isRequired,
};

export default Powerstats;
