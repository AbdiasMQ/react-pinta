import React from 'react'
import './Navbar.css'
//import esos dos los estilos de css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
  return (
    <Navbar className="navbar-pinta">
      <Container fluid>
        <Navbar.Brand className= "title-pinta">PINTA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
            <Nav.Link href="./Users" >Administrador de usuarios</Nav.Link>
            <Nav.Link href="./Bans">Baneos</Nav.Link>
            <Nav.Link href ="./Error">Pagina 404 team not found</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar usuario"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;