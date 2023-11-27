import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Intro from "./components/intro/Intro";
import Navbar from "./components/layout/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

import "./styles/app.scss";
const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Intro />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section
        id="Contact"
        // style={{
        //   background: "linear-gradient(180deg,  #082b2a,#041615, #040d12)",
        // }}
      >
        <Contact />
      </section>
    </div>
  );
};

export default App;
