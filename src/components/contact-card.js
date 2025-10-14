import '../styles/contact-card.css';
import linkedinIcon from "../images/linkedin-icon.png";
import githubIcon from "../images/github-icon.png";
import emailIcon from "../images/email-icon.png";

function ContactCard() {
  return (
    <>  
        <div class="card">
            <a href="https://www.linkedin.com/in/husna-jakeer-hussain" target="_blank" rel="noreferrer">
                <div class="linkedin">
                    <img src={linkedinIcon} class="icon" alt="LinkedIn profile"></img>
                </div>
            </a>
            <a href="https://github.com/husnajakeer" target="_blank" rel="noreferrer">
                <div class="github">
                    <img src={githubIcon} class="icon" alt="GitHub profile"></img>
                </div>
            </a>
            <a href="mailto:husnajakeer@gmail.com">
                <div class="email">
                    <img src={emailIcon} class="icon" alt="Email contact"></img>
                </div>
            </a>
        </div>
    </>
  );
}

export default ContactCard;