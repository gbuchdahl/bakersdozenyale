import React from "react";
import { storiesOf } from "@storybook/react";
import coverPhoto from "../img/main_photo.jpg";

import Hero from "../components/Hero";

storiesOf("Hero", module)
  .add("default", () => <Hero fluid />)
  .add("with title", () => (
    <Hero fluid title="The Baker's Dozen of Yale University" />
  ))
  .add("with background image", () => (
    <Hero
      fluid
      title="The Baker's Dozen of Yale University"
      background={coverPhoto}
    />
  ));