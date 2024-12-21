import '../styles/projects.css';
import ProjectCard from "../components/project-card.js"


function Projects() {
  return (
    <>
        <div class="title">PROJECTS</div>
        <div class="projects-container">
            <div class="row">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
            <div class="row">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </div>

    </>
  );
}

export default Projects;
