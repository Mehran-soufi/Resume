import "./style.css";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Records from "./components/records/Records";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Home />
      <About/>
      <Skill/>
      <Records/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
