import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../logo.png'; // Assicurati di avere un logo nella cartella src

function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <NavDropdown title="Accedi" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/admin-login">Accedi come Amministratore</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/employee-login">Accedi come Dipendente</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-5">
        <h1>Benvenuti nella piattaforma NexStep</h1>
        <p>Gestisci documenti, buste paga, orari straordinari e molto altro per Edilizia Artistica.</p>
      </div>
    </div>
  );
}

export default Home;
