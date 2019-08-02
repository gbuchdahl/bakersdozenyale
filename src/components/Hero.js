import React from "react";
import { Jumbotron } from "react-bootstrap";

const Hero = props => {
  const style = {
    backgroundImage: `url(${props.background})`,
    backgroundSize: "cover"
  };

  return (
    <Jumbotron classname="h-50" style={style}>
      <h1 className="text-light text-center font-weight-bold display-2 px-lg-4 py-lg-5 px-sm-2 ">
        {props.title}
      </h1>
    </Jumbotron>
  );
};

export default Hero;
