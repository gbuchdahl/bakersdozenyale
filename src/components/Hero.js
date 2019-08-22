import React from "react";
import styled from "styled-components";
import IronImage from "../components/IronImage/IronImage";

const Hero = props => {
  const HeroImg = styled(IronImage)`
    padding-top: 20px;
    min-height: 150px;
    background-image: url(${props.img});
    background-size: cover;
  `;

  const HeroCut = styled.div`
    && > .iron-image-container {
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
    }
  `;

  const Title = styled.h1`
    z-index: 999;
    display: block;
  `;

  return (
    <div className="hero">
      <HeroCut className="hero-body is-medium has-text-centered is-paddingless">
        <HeroImg
          title={props.title}
          srcPreload={props.srcPreload}
          srcLoaded={props.srcLoaded}
        ></HeroImg>
      </HeroCut>
    </div>
  );
};

export default Hero;
