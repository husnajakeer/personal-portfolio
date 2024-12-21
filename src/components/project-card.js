import '../styles/project-card.css';
import githubIcon from '../images/github-icon.png';

function ProjectCard() {
  return (
    <>
        <div class="info-card">
            <div class="image"></div>
            <div class="row">
                <div class="info">
                    <div class="project-name">TITLE</div>
                    <div class="project-description">description</div>
                </div>
                <div class="github-link">
                    <img src={githubIcon}></img>
                </div>
            </div>
        </div>
    </>
  );
}

export default ProjectCard;
