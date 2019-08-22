import React, { Component } from "react";
import "./IronImage.css";
import styled from "styled-components";

class IronImage extends Component {
  Title = styled.h1`
    z-index: 999;
    margin-top: 100px;
  `;

  constructor(props) {
    super(props);
    this.ironImageHd = null;
  }

  componentDidMount() {
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.ironImageHd.setAttribute(
        "style",
        `background-image: url('${this.props.srcLoaded}')`
      );
      this.ironImageHd.classList.add("iron-image-fade-in");
    };
  }

  render() {
    return (
      <div className="iron-image-container section is-large">
        <div
          className="iron-image-loaded"
          ref={imageLoadedElem => (this.ironImageHd = imageLoadedElem)}
        >
          <this.Title className="title is-1 has-text-white">
            {this.props.title}
          </this.Title>
        </div>
        <div
          className="iron-image-preload"
          style={{ backgroundImage: `url('${this.props.srcPreload}')` }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default IronImage;
