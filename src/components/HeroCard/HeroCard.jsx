/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { isHeroInTeam } from '../../helpers/localStorage';
import './HeroCard.scss';

function HeroCard({
  id, name, image, actions,
}) {
  return (
    <Card className="hero-card text-dark mb-3" style={{ width: '12rem' }}>
      <Card.Img className="hero-image" variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        {isHeroInTeam(id) ? (
          <Button
            className="hover-button remove-button"
            type="button"
            onClick={() => actions.removeFromTeam({ id, name })}
          >
            - Remove
          </Button>
        ) : (
          <Button
            className="hover-button add-button"
            type="button"
            onClick={() => actions.addToTeam({ id, name, image })}
          >
            + Add
          </Button>
        )}

      </Card.Body>
    </Card>
  );
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    addToTeam: PropTypes.func,
    removeFromTeam: PropTypes.func,
  }).isRequired,
};

export default HeroCard;
