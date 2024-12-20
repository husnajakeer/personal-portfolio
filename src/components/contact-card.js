import '../styles/contact-card.css';
import linkedinIcon from "../images/linkedin-icon.png";
import githubIcon from "../images/github-icon.png";
import emailIcon from "../images/email-icon.png";

function ContactCard() {
  return (
    <>  
        <div class="card">
            <div class="linkedin">
                <img src={linkedinIcon} class="icon"></img>
            </div>
            <div class="github">
                <img src={githubIcon} class="icon"></img>
            </div>
            <div class="email">
                <img src={emailIcon} class="icon"></img>
            </div>
        </div>
    </>
  );
}

export default ContactCard;