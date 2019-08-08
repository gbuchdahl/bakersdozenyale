import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import coverPhoto from "./img/main_photo.jpg";

function App() {
  return (
    <div>
      <NavBar />
      <Hero title="The Baker's Dozen" background={coverPhoto} />
    </div>
  );
}

export default App;
