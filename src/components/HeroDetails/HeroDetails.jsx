/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Col, Container, Image, Row, Spinner, Table,
} from 'react-bootstrap';
import axios from '../../axios';
import './HeroDetails.scss';

function HeroDetails() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/${id}`);
      const tmpHero = {
        name: res.data.name,
        aliases: res.data.biography.aliases,
        eyeColor: res.data.appearance['eye-color'],
        hairColor: res.data.appearance['hair-color'],
        height: res.data.appearance.height[1],
        weight: res.data.appearance.weight[1],
        placeOfWork: res.data.work.base,
        image: res.data.image.url,
      };
      setHero(tmpHero);
    };
    fetchData();
  }, []);

  if (!hero) {
    return (
      <Container>
        <Spinner animation="grow" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="hero-details">
      <Row className="justify-content-center">
        <Col xs="auto">
          <Image className="mb-5" src={hero.image} alt={hero.name} fluid />
        </Col>
      </Row>
      <h1 className="mb-3">{hero.name}</h1>
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          <Table striped bordered hover className="hero-details-table">
            <tbody>
              <tr>
                <td>Aliases</td>
                <td>{hero.aliases.join(', ')}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{hero.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{hero.weight}</td>
              </tr>
              <tr>
                <td>Eye Color</td>
                <td>{hero.eyeColor}</td>
              </tr>
              <tr>
                <td>Hair Color</td>
                <td>{hero.hairColor}</td>
              </tr>
              <tr>
                <td>Place of Work</td>
                <td>{hero.placeOfWork}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroDetails;
