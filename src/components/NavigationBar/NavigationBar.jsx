import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar({ token }) {
  return (
    <Navbar className="mb-3" bg="light" expand="lg">

      <Navbar.Brand as={Link} to="/">
        {' '}
        <img
          alt=""
          src="/logo256.png"
          width="32"
          height="32"
          className="d-inline-block align-top mr-1"
        />
        {' '}
        Superhero Hunter

      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav defaultActiveKey={token ? '/team' : '/login'}>
          {token ? (
            <>
              <Nav.Item>
                <Nav.Link eventKey="/team" as={Link} to="/team">Team</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/search" as={Link} to="/search">Search heroes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/logout" as={Link} to="/logout">Log out</Nav.Link>
              </Nav.Item>
            </>
          ) : (
            <Nav.Item>
              <Nav.Link eventKey="/login" as={Link} to="/login">Log in</Nav.Link>
            </Nav.Item>
          )}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavigationBar.propTypes = {
  token: PropTypes.string,
};

NavigationBar.defaultProps = {
  token: '',
};

export default NavigationBar;
