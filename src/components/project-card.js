import '../styles/project-card.css';
import githubIcon from '../images/github-icon.png';

function ProjectCard(props) {
  return (
    <>
        <div class="info-card">
            <img class="image" src={props.src}></img>
            <div class="project-row">
                <div class="info">
                    <div class="project-name">{props.title}</div>
                    <div class="project-description">{props.description}</div>
                </div>
                <a href = {props.link} target = "_blank">
                    <div class="github-link">
                        <img class = "github-icon" src={githubIcon}>
                        </img>
                    </div>
                </a>

            </div>
        </div>
    </>
  );
}

export default ProjectCard;
