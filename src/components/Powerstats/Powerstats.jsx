import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
// import Powerstat from '../Powerstat/Powerstat';
import './Powerstats.scss';

// <Powerstat type={stat} value={powerstats[stat]} />
function Powerstats({ powerstats }) {
  return (
    <Table className="powerstats" hover size="sm">
      <tbody>
        <tr>
          <td className="table-row-title">Intelligence</td>
          <td>{powerstats.intelligence === 'null' ? 'unknown' : powerstats.intelligence}</td>
          <td className="table-row-title">Strength</td>
          <td>{powerstats.strength === 'null' ? 'unknown' : powerstats.strength}</td>
        </tr>
        <tr>
          <td className="table-row-title">Speed</td>
          <td>{powerstats.speed === 'null' ? 'unknown' : powerstats.speed}</td>
          <td className="table-row-title">Durability</td>
          <td>{powerstats.durability === 'null' ? 'unknown' : powerstats.durability}</td>
        </tr>
        <tr>
          <td className="table-row-title">Power</td>
          <td>{powerstats.power === 'null' ? 'unknown' : powerstats.power}</td>
          <td className="table-row-title">Combat</td>
          <td>{powerstats.combat === 'null' ? 'unknown' : powerstats.combat}</td>
        </tr>
      </tbody>
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
