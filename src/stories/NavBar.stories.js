import React from "react";
import { storiesOf } from "@storybook/react";

import NavBar from "../components/NavBar";

storiesOf("MyNavBar", module)
  .add("desktop", () => <NavBar />)
  .add("mobile", () => <NavBar />, {
    viewport: { defaultViewport: "iphonex" }
  });
