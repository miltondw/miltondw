import Nav from "../../atoms/Nav";

import Footer from "../../molecules/Footer";
import Header from "../../molecules/Header";

import About from "../../organisms/About";
import Experience from "../../organisms/Experience";
import Services from "../../organisms/Services";
import Portfolio from "../../organisms/Portfolio";
import Contact from "../../organisms/Contact";

const Home = ({ data }) => {
  const { projects, services, experience } = data;
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience experience={experience} />
      <Services services={services} />
      <Portfolio projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
