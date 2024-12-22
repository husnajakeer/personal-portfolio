import './App.css';
import Navbar from "./components/navbar.js";
import About from "./sections/about.js";
import Interests from "./sections/interests.js";
import Timeline from "./sections/timeline.js";
import Skills from "./sections/skills.js";
import Projects from "./sections/projects.js";
import Contact from "./sections/contact.js";

function App() {
  return (
    <>
      <body>
        <Navbar></Navbar>
        <div id="about">
          <About></About>
        </div>
        <div id="interests">
          <Interests></Interests>
        </div>
        <div id="timeline">
          <Timeline></Timeline>
        </div>
        <div id="skills">
          <Skills></Skills>
        </div>
        <div id="projects">
          <Projects></Projects>
        </div>
        <div id="contact">
          <Contact></Contact>
        </div>
      </body>
    </>
  );
}

export default App;
