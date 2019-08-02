import React from "react";
import { Jumbotron } from "react-bootstrap";

const Hero = props => {
  const style = {
    backgroundImage: `url(${props.background})`,
    backgroundSize: "cover"
  };

  return (
    <Jumbotron classname="h-50" style={style}>
      <h1 className="text-light text-center font-weight-bold px-lg-4 pt-lg-5 px-sm-2 page-title">
        {props.title}
      </h1>
      <h2 className="text-light text-center font-weight-bold px-lg-4 pb-lg-5 px-sm-2">
        {props.subtitle}
      </h2>
    </Jumbotron>
  );
};

export default Hero;
