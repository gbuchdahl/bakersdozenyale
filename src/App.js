import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Home from "./containers/Home";
import About from "./containers/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Home path="/" />
          <About path="about-us" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
