import React from "react";
import styled from "styled-components";

const Hero = props => {
  const HeroImg = styled.section`
    background-image: url(${props.img});
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  `;
  return (
    <HeroImg className="hero is-medium">
      <div img={props.img} className="hero-body">
        <div className="container has-text-centered">
          <h1 class="title is-1 has-text-white">{props.title}</h1>
          {props.children}
        </div>
      </div>
    </HeroImg>
  );
};

export default Hero;
