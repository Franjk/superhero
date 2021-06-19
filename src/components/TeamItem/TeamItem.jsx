import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import './TeamItem.scss';
import Powerstats from '../Powerstats/Powerstats';

function TeamItem({
  name, image, powerstats, actions,
}) {
  return (
    <Card className="team-item">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Powerstats powerstats={powerstats} />
        <Row className="button-container">
          <Col>
            <Button variant="secondary" onClick={actions.details}>Details</Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={actions.delete}>Remove</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

TeamItem.propTypes = {
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
    details: PropTypes.func,
    delete: PropTypes.func,
  }).isRequired,
};

export default TeamItem;
