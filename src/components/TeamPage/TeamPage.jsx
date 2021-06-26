import React, { useEffect, useState } from 'react';
import {
  Alert, Col, Container, Row, Spinner,
} from 'react-bootstrap';
import { getTeam, removeHero } from '../../helpers/localStorage';
import { useAuth } from '../../hooks';
import { axiosSuperhero } from '../../axios';
import TeamItem from '../TeamItem/TeamItem';

function TeamPage() {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { redirectIfNotAuth } = useAuth();

  redirectIfNotAuth();

  useEffect(() => {
    const teamIds = getTeam();

    const fetchData = async () => {
      try {
        const res = await Promise.all(teamIds.map((id) => axiosSuperhero.get(`/${id}`)));
        setTeam(res.map((r) => r.data));
        setLoading(false);
      } catch (err) {
        setError({ text: 'There was an error retrieving the team. Please try again later.' });
      }
    };
    fetchData();
  }, []);

  const deleteBtnHandler = (id) => {
    removeHero(id);
    setTeam((prevTeam) => prevTeam.filter((t) => t.id !== id));
  };

  if (error) {
    return (
      <Container className="team-page">
        <h1 className="mb-5">Team</h1>
        <Row className="justify-content-center">
          <Alert
            variant="danger"
          >
            {error.text}
          </Alert>
        </Row>
      </Container>
    );
  }

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
