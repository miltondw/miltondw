import Nav from "../../atoms/Nav";

import Footer from "../../molecules/Footer";
import Header from "../../molecules/Header";

import About from "../../organisms/About";
import Experience from "../../organisms/Experience";
import Services from "../../organisms/Services";
import Portfolio from "../../organisms/Portfolio";
import Contact from "../../organisms/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
