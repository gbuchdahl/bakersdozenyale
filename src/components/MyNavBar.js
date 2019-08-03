import React, { Component } from "react";
import { Navbar, Nav, Image, Col, Container, Row } from "react-bootstrap";
import hamburger from "../img/hamburger.svg";

import logo from "../img/bd_logo_2019.png";

export default class MyNavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" fixed="top" variant="dark">
        <Container fluid>
          <Row className="w-100">
            <Navbar.Brand className="navbar-brand" href="#home">
              <Image src={logo} className="ml-3" fluid />
            </Navbar.Brand>
            <Navbar.Toggle
              className="ml-auto"
              aria-controls="basic-navbar-nav"
              image={hamburger}
            />
            <Navbar.Collapse
              className="justify-content-end"
              id="responsive-navbar-nav"
            >
              <Nav className="text-white text-right">
                <Nav.Link className="flex-grow-1" href="#link">
                  LINK
                </Nav.Link>
                <Nav.Link className="flex-grow-1" href="#link">
                  LINK
                </Nav.Link>
                <Nav.Link className="flex-grow-1" href="#link">
                  LINK
                </Nav.Link>
                <Nav.Link className="flex-grow-1" href="#link">
                  LINK
                </Nav.Link>
                <Nav.Link className="flex-grow-1" href="#link">
                  LINK
                </Nav.Link>
                <Nav.Link className="flex-grow-1" href="#link">
                  LINK
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    );
  }
}
