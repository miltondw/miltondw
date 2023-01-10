import React from "react";
import { About } from "../Organisms/About";
import { Contact } from "../Organisms/Contact";
import { Experience } from "../Organisms/Experience";
import { Header } from "../Organisms/Header";
import { Projects } from "../Organisms/Projects";
import { Services } from "../Organisms/Services";

export const Landing = () => {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};
