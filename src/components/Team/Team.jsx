import React from 'react';
import {
  Col, Container, FormGroup, Row,
} from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
import TeamItem from '../TeamItem/TeamItem';
import './Team.scss';

// TODO Leer del localStorage
// TODO Chequear si esta el token

const sampleTeam = [ // leer del local storage
  {
    id: 1,
    name: 'Batman',
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
    powerstats: 'powerstats',
    actions: 'actions',
  },
  {
    id: 2,
    name: 'Batman',
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
    powerstats: 'powerstats',
    actions: 'actions',
  },
  {
    id: 3,
    name: 'Batman',
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
    powerstats: 'powerstats',
    actions: 'actions',
  },
  {
    id: 4,
    name: 'Batman',
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
    powerstats: 'powerstats',
    actions: 'actions',
  },
];

function Team() {
  // TODO implementar redireccion y corregir los handler builder
  // const history = useHistory();

  const buildDetailsBtnClickHandler = (id) => () => {
    alert(`details: ${id}`);
  };

  const buildDeleteBtnClickHandler = (id) => () => {
    alert(`delete: ${id}`);
  };

  return (
    <Container className="team">
      <Row className="row">
        { sampleTeam.map((team) => (

          <Col key={team.id}>
            <FormGroup>
              <TeamItem
                name="Batman"
                image="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
                powerstats={{
                  intelligence: '100',
                  strength: '26',
                  speed: '27',
                  durability: '50',
                  power: '47',
                  combat: '100',
                }}
                actions={
                  {
                    details: buildDetailsBtnClickHandler(team.id),
                    delete: buildDeleteBtnClickHandler(team.id),
                  }
                }
              />
            </FormGroup>
          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default Team;
