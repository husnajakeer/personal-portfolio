import './App.css';
import Navbar from "./components/navbar.js";
import About from "./sections/about.js";
import Timeline from "./sections/timeline.js";
import Skills from "./sections/skills.js";
import Projects from "./sections/projects.js";
function App() {
  return (
    <>
    <body>
      <Navbar></Navbar>
      <About></About>
      <Timeline></Timeline>
      <Skills></Skills>
      <Projects></Projects>
    </body>
    </>
  );
}

export default App;
