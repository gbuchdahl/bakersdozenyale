import React from "react";
import "./styles/mod_bootstrap.scss";
import { Container, Row } from "react-bootstrap";
import MyNavBar from "./components/MyNavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <Container fluid={true} classname="no-gutters">
      <Row>
        <MyNavBar />
      </Row>
    </Container>
  );
}

export default App;
