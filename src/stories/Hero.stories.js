import React from "react";
import { storiesOf } from "@storybook/react";
import coverPhoto from "../img/main_photo.jpg";

import Hero from "../components/Hero";

const bghero = (
  <Hero
    fluid
    title="The Baker's Dozen"
    subtitle="of Yale University"
    background={coverPhoto}
  />
);

storiesOf("Hero", module)
  .add("with background image", () => bghero)
  .add("mobile", () => bghero, { viewport: { defaultViewport: "iphonex" } });
