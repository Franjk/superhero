import React, { useState } from 'react';
import {
  Alert, Container, Col, Row, Spinner,
} from 'react-bootstrap';
import { useAuth } from '../../hooks';
import HeroSearchForm from '../HeroSearchForm/HeroSearchForm';
import HeroCard from '../HeroCard/HeroCard';
import './HeroSearchPage.scss';
import { addHero, removeHero } from '../../helpers/localStorage';

function HeroSearchPage() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const { redirectIfNotAuth } = useAuth();

  redirectIfNotAuth();

  const addToTeam = (hero) => {
    const result = addHero(hero.id);
    if (result === true) {
      setAlert({
        type: 'success',
        text: `${hero.name} added to team`,
      });
    } else {
      setAlert({
        type: 'danger',
        text: result,
      });
    }
  };

  const removeFromTeam = (hero) => {
    const result = removeHero(hero.id);
    if (result === true) {
      setAlert({
        type: 'success',
        text: `${hero.name} removed from team`,
      });
    } else {
      setAlert({
        type: 'danger',
        text: result,
      });
    }
  };

  return (
    <Container className="hero-search-page">
      {alert && (
        <Alert
          className="hero-search-page-alert"
          variant={alert.type}
          onClose={() => setAlert(null)}
          dismissible
        >
          {alert.text}
        </Alert>
      )}

      <h1 className="mb-5">Hero Search</h1>

      <Row className="mb-5">
        <HeroSearchForm submitFn={setResults} loadingFn={setLoading} />
      </Row>

      <Row className="justify-content-center">

        {loading ? (
          <Spinner animation="grow" variant="primary" />
        ) : (
          results && results.map((res) => (
            <Col key={res.id}>
              <HeroCard
                id={res.id}
                name={res.name}
                image={res.image.url}
                actions={{ addToTeam, removeFromTeam }}
              />
            </Col>
          ))
        )}

      </Row>

    </Container>
  );
}

export default HeroSearchPage;
