import React from "react";
import styled from "styled-components";

const Hero = props => {
  const Title = styled.h1.attrs({
    className: "f1 f-headline-ns white ma0 pv6-ns pt7 pb4 fw4 tc cut"
  })`
    font-family: "Bangers", cursive;
    background-image: url(${props.background});
    background-size: cover;
  `;

  return (
    <div className="w-100">
      <Title>{props.title}</Title>
      {props.children}
    </div>
  );
};

export default Hero;
