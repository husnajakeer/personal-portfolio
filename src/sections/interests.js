import '../styles/interests.css';
import InterestIcons from "../images/interests.png";
function Interests() {
  return (
    <>
        <div class="interest-container">
            <div class="interest-left">
                <div class="interest-title">Where do my passions lie?</div>
                <div class="interest-description">
                  Ever since I built my first project in React, I've been amazed at the <b>transformative</b> ability of code to build powerful interfaces, draw from large datasets, and perform innovative technological breakthroughs. Now, I would like to harness my skills to contribute towards creating <b>user interactive</b>, <b>sustainable</b>, and <b>scalable</b> products. As a future engineer or product manager, I aspire to work in cross-functional team settings, where I can orchestrate the ideation and development process. 
                </div>
            </div>
            <div class="interest-right">
                <img class="interest-pic" src={InterestIcons}></img>
            </div>
        </div>
    </>
  );
}

export default Interests;
