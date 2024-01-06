import "../src/app.scss";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/NavBar";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}
      {/* <section>
        <Services />
      </section> */}
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
