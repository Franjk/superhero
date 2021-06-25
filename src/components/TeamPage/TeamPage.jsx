/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Col, Container, Row, Spinner,
} from 'react-bootstrap';
import { getTeam, removeHero } from '../../helpers/localStorage';
import { useAuth } from '../../hooks';
import axios from '../../axios';
import TeamItem from '../TeamItem/TeamItem';

function TeamPage() {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const { redirectIfNotAuth } = useAuth();

  redirectIfNotAuth();

  useEffect(() => {
    const teamIds = getTeam();
    const fetchData = async () => {
      const res = await Promise.all(teamIds.map((id) => axios.get(`/${id}`)));
      setTeam(res.map((r) => r.data));
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteBtnHandler = (id) => {
    removeHero(id);
    setTeam((prevTeam) => prevTeam.filter((t) => t.id !== id));
  };

  return (
    <Container className="team-page">
      <h1 className="mb-5">Team</h1>
      <Row className="justify-content-center">
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

export default TeamPage;