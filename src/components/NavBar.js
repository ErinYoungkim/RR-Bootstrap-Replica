import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src="/instacartlogo.png"
          height="40"
          className="d-inline-block align-top"
          alt="Instacart logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="mx-auto w-50 d-flex align-items-center">
          <FormControl type="text" placeholder="Search products and stores" className="mr-sm-2" />
        </Form>
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link href="#login" className="text-dark">Log in</Nav.Link>
          <Button variant="success" className="ml-2">Sign up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;








