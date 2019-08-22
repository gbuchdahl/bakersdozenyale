import React from "react";
import Hero from "../components/Hero";

import Content from "../components/Content";
import IronImage from "../components/IronImage/IronImage";
import { Link } from "@reach/router";

import mainLowQ from "../img/main_lowQ.jpg";
import rushLowQ from "../img/rush_lowQ.jpg";
import concertLowQ from "../img/concert_lowQ.jpg";

export const mainHero =
  "https://lh3.googleusercontenthttps://doc-0g-78-docs.googleusercontent.com/docs/securesc/bmhg059rvrjhnhn9nl0artb2qai5qh3h/idtfvhf9v7dchsj401jg4r758ktp6qmq/1566439200000/01450146461969167009/01450146461969167009/1oHLSyjjBDA-ab9QM-6bspnuMN9HQblIo?e=view.com/6zB8y1by9UtOmwthBhD-xj9LzT07fv65eTT3Ep5AMu-GrVscWtCh6Gtzq3bXOQPCp0ppv6tH3IM";
const rushColor = "https://i.imgur.com/8jDE5zX.jpg";
const concertImg =
  "https://doc-00-78-docs.googleusercontent.com/docs/securesc/bmhg059rvrjhnhn9nl0artb2qai5qh3h/2nsaga8uhtbt0uh7f4iu0qfuvqloejm3/1566424800000/01450146461969167009/01450146461969167009/1dZDeQ3XeuMqcatDS-cGUfoNvF3sq0l7k?e=view";

const Home = () => {
  return (
    <div>
      <Hero
        title="The Baker's Dozen"
        srcLoaded={mainHero}
        srcPreload={mainLowQ}
      />
      <Content title="About Us" buttonText="Learn More" link="about">
        <p>
          In the summer of 1947, thirteen men with an unrivaled passion for
          music and revelry banded together to form the dynamic brotherhood
          known as The Baker’s Dozen. Known across America as one of the
          nation’s oldest and finest a cappella groups, The Baker’s Dozen
          continues its tradition of memorable experiences and performances with
          cross-country tours each year.
        </p>
      </Content>
      <IronImage srcPreload={rushLowQ} srcLoaded={rushColor} />
      <Content title="Rush The BDs" buttonText="Learn More" link="about">
        <p>
          So you’ve come to Yale. You might know from day one that you are just
          dying to be a BD. Or you might not be sure, and want to know more
          about us. Either way, welcome to Rush.
        </p>
        <br></br>
        <Link
          to="rush"
          className="button is-black is-uppercase has-text-weight-bold"
        >
          Audition
        </Link>
      </Content>
      <IronImage srcPreload={concertLowQ} srcLoaded={concertImg} />
      <Content title="Our Music" buttonText="Learn More" link="about">
        <p>
          Our repertoire features a broad range of songs, ranging from
          traditional ballads to jazz, rock, and contemporary hits. From the
          Yale campus to the Staples Center, the Baker’s Dozen performs for
          audiences of all sizes. Every year, the BDs combine music and charm on
          stages in schools, clubs, restaurants, arenas, and private events
          across the nation and throughout the globe.
        </p>
        <br></br>
        <a
          href="https://www.youtube.com/channel/UCiFqUTtB9T8yERZqEV9_CnA"
          className="button is-danger is-uppercase has-text-weight-bold"
        >
          Listen to us!
        </a>
      </Content>
    </div>
  );
};
export default Home;
