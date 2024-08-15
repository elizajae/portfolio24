import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import ProjectCard from "./ProjectCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
}

export default App;
