/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Col, Container, Row, Spinner,
} from 'react-bootstrap';
import { getTeam, removeHero } from '../../helpers/localStorage';
import axios from '../../axios';
import TeamItem from '../TeamItem/TeamItem';
import './Team.scss';

function Team() {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadTeam = async () => {
    const teamIds = getTeam();
    const tmpTeam = [];
    await teamIds.forEach(async (id) => {
      const res = await axios.get(`/${id}`);
      if (res) tmpTeam.push(res.data);
    });
    setTeam(tmpTeam);
    setLoading(false);
  };

  if (!team) {
    loadTeam();
  }

  const deleteBtnHandler = (id) => {
    removeHero(id);
    setTeam((prevTeam) => prevTeam.filter((t) => t.id !== id));
  };

  return (
    <Container className="team">
      <h1 className="mb-5">Team</h1>
      <Row className="row">
        {loading && (<Spinner animation="grow" variant="primary" />)}

        {team && team.map((hero) => (

          <Col key={hero.id}>
            <TeamItem
              id={hero.id}
              name={hero.name}
              image={hero.image?.url}
              powerstats={hero.powerstats}
              actions={
                {
                  delete: deleteBtnHandler,
                }
              }
            />
          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default Team;
