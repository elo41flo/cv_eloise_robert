import React from "react";
import "./App.css"; 

import Header from "./components/Header";
import About from "./components/About";
import PostLinkedin from "./components/PostLinkedin";
import Skills from "./components/Skills";
import Formations from "./components/Formations";
import Projects from "./components/Projects";
import Bénévolats from "./components/Bénévolats";
import MapCV from "./components/MapCV";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Header />
      <About />
      <PostLinkedin />
      <Skills />
      <Formations />
      <Projects />
      <Bénévolats />
      <MapCV />
      <Contact />
    </main>
  );
}

export default App;