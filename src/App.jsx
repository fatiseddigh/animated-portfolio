import Intro from "./components/intro/Intro";
import Navbar from "./components/layout/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

import "./styles/app.scss";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Intro />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
