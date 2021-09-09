
import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import {Navbar , Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
    return (
    
      <Navbar className="nav" bg="light" expand="lg">
      <Navbar.Brand href="#">La Ilusión - Hotel de campo</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav fill 
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Reservas</Nav.Link>
          <NavDropdown title="Habitaciones" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">El Molino</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">Monte Hermoso</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Quebracho colorado</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Manantial</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
      <CartWidget/>
    </Navbar>
    );
}

export default NavBar