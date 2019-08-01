import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class MyNavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" fixed="top" variant="dark">
        <Navbar.Brand href="#home">Bakers Dozen of Yale</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-light">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
