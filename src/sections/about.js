import '../styles/about.css';
import aboutBlob from "../images/about-pic.png";
import ContactCard from "../components/contact-card.js";

function About() {
  return (
    <>  
    <div class = "section">
        <div class = "about-container">
                <img src={aboutBlob} class="about-image" alt="about-image"></img>
                <div>
                    <div class="intro">Nice to meet you! I'm</div>
                    <div class="name">HUSNA</div>
                    <div class="name">JAKEER,</div>
                    <div class="description">a Computer Science major at the Georgia Institute of Technology with interests in <b>Software Engineering</b>, <b>Product Management</b>, and <b>Product Design</b>.</div>
                    <div class="loader-sentence">I am
                        <div class="words">
                            <span class="word">a builder</span>
                            <span class="word">a designer</span>
                            <span class="word">an engineer</span>
                            <span class="word">a builder</span>
                            <span class="word">a communicator</span>
                        </div>
                    </div>
                    <div>Learn more about my projects and skills below!</div>
                    <ContactCard></ContactCard>
                </div>
            </div>
    </div>
    <a href="#interests" style={{marginTop:"-3%"}}>
        <svg class="arrows">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
    </a>

    </>
  );
}

export default About;