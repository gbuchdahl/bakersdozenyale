import React, { Component } from "react";
import logo from "../img/bd_logo_2019.png";
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <nav
        class="navbar is-dark is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <Link class="navbar-item" to="/">
            <img src={logo} width="auto" />
          </Link>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item" to="about-us">
              About
            </Link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-light has-text-weight-semibold">
                  Contact Us!
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
