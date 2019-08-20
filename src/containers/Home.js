import React from "react";
import Hero from "../components/Hero";
import mainPhoto from "../img/main_photo.jpg";
import Content from "../components/Content";

const Home = () => {
  return (
    <div>
      <Hero title="The Baker's Dozen" img={mainPhoto} />
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
    </div>
  );
};
export default Home;
