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
      <About></About>
      <Interests></Interests>
      <Timeline></Timeline>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </body>
    </>
  );
}

export default App;
