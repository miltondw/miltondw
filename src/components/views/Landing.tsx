import React from "react";
import { About } from "../Organisms/About";
import { Contact } from "../Organisms/Contact";
import { Experience } from "../Organisms/Experience";
import { Header } from "../Organisms/Header";
import { Projects } from "../Organisms/Projects";
import { Services } from "../Organisms/Services";

export const Landing = ({ data }: any) => {
  return (
    <div>
      <Header />
      <About />
      <Experience experience={data.experience} />
      <Services services={data.services} />
      <Projects projects={data.projects} />
      <Contact />
    </div>
  );
};
