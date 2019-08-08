import React, { Component } from "react";
import styled from "styled-components";

import logo from "../img/bd_logo_2019.png";

const MyLink = styled.a.attrs({
  className: "link dim white dib mr3 f3"
})`
  font-family: Bangers, cursive;
`;

export default class NavBar extends Component {
  render() {
    return (
      <header className="bg-black-90 fixed w-100 ph3 pv3 ph4-m ph5-l flex items-center z-999">
        <nav className="tl mr-auto">
          <MyLink className="mw4">
            <img src={logo} className="w-70"></img>
          </MyLink>
        </nav>
        <nav className="ttu tracked tr">
          <MyLink href="#" title="Home">
            Home
          </MyLink>
          <MyLink href="#" title="Home">
            Home
          </MyLink>
          <MyLink href="#" title="Home">
            Home
          </MyLink>
          <MyLink href="#" title="Home">
            Home
          </MyLink>
        </nav>
      </header>
    );
  }
}
