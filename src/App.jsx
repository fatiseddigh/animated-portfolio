import Intro from "./components/intro/Intro";
import Navbar from "./components/layout/navbar/Navbar";
import "./styles/app.scss";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Intro />
      </section>
      <section>Parallax</section>
      <section id="Services">Services</section>
      <section>Parallax</section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
