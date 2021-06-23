import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TeamItem.scss';
import Powerstats from '../Powerstats/Powerstats';

function TeamItem({
  id, name, image, powerstats, actions,
}) {
  return (
    <Card className="team-item mb-5">
      <Card.Img className="team-item-image" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Powerstats powerstats={powerstats} />
        <Row className="button-container">
          <Col>
            <Link className="btn btn-secondary" to={`/hero/${id}`}>Details</Link>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => actions.delete(id)}>Remove</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

TeamItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  powerstats: PropTypes.shape({
    intelligence: PropTypes.string,
    strength: PropTypes.string,
    speed: PropTypes.string,
    durability: PropTypes.string,
    power: PropTypes.string,
    combat: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    delete: PropTypes.func,
  }).isRequired,
};

export default TeamItem;
