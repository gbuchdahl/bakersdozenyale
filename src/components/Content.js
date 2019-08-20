import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Content = props => {
  const MyButton = styled(Link)`
    // margin-top: 20px;
  `;
  return (
    <section className="section is-medium">
      <div className="container">
        <div class="columns is-desktop">
          <div className="column has-text-centered">
            <h1 className="title is-2">{props.title}</h1>
          </div>
          <div className="column">
            {props.children}
            {props.buttonText ? (
              " "
            ) : (
              <div class="has-text-centered">
                <Link
                  to={props.link}
                  className="button is-black is-uppercase has-text-weight-bold"
                >
                  {props.buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
