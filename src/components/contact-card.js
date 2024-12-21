import '../styles/contact-card.css';
import linkedinIcon from "../images/linkedin-icon.png";
import githubIcon from "../images/github-icon.png";
import emailIcon from "../images/email-icon.png";

function ContactCard() {
  return (
    <>  
        <div class="card">
            <a href="https://www.linkedin.com/in/husna-jakeer-hussain" target ="_blank">
                <div class="linkedin">
                    <img src={linkedinIcon} class="icon"></img>
                </div>
            </a>
            <a href="https://github.com/husnajakeer" target="_blank">
                <div class="github">
                    <img src={githubIcon} class="icon"></img>
                </div>
            </a>
            <a href="mailto:husnajakeer@gmail.com">
                <div class="email">
                    <img src={emailIcon} class="icon"></img>
                </div>
            </a>
        </div>
    </>
  );
}

export default ContactCard;