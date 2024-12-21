import '../styles/skills.css';

import reactIcon from "../images/skill-icons/react-icon.png";
import htmlIcon from "../images/skill-icons/html-icon.png";
import cssIcon from "../images/skill-icons/css-icon.png";
import javaIcon from "../images/skill-icons/java-icon.png";
import pythonIcon from "../images/skill-icons/python-icon.png";
import typescriptIcon from "../images/skill-icons/typescript-icon.png";

import cIcon from "../images/skill-icons/c-icon.png";
import cplusplusIcon from "../images/skill-icons/c++-icon.png";
import svelteIcon from "../images/skill-icons/svelte-icon.png";
import mongodbIcon from "../images/skill-icons/mongodb-icon.png";
import swiftIcon from "../images/skill-icons/swift-icon.png";
import javascriptIcon from "../images/skill-icons/javascript-icon.png";

import gitIcon from "../images/skill-icons/git-icon.png";
import dockerIcon from "../images/skill-icons/docker-icon.png";
import graphqlIcon from "../images/skill-icons/graphql-icon.png";
import nodejsIcon from "../images/skill-icons/nodejs-icon.png";
import d3Icon from "../images/skill-icons/d3-icon.png";
import postgresqlIcon from "../images/skill-icons/postgresql-icon.png";

function Skills() {
  return (
    <>
        <div class="title">TECH STACK</div>
        <div class="skill-section">
            <div class="row">
                <div class="icon">
                    <div class="mint-green-icon" >
                            <img src={reactIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">react</div>
                </div>
                <div class="icon">
                    <div class="mint-green-icon">
                            <img src={htmlIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">html</div>
                </div>
                <div class="icon">
                    <div class="mint-green-icon" style={{marginLeft:"20%"}}>
                            <img src={cssIcon} class="icon"></img>
                    </div>
                    <div class="skill-name" style={{marginLeft:"20%"}}>css</div>
                </div>
                <div class="icon">
                    <div class="mint-green-icon" style={{marginLeft:"50%"}}>
                            <img src={javaIcon} class="icon"></img>
                    </div>
                    <div class="skill-name" style={{marginLeft:"45%"}}>java</div>
                </div>
                <div class="icon">
                    <div class="mint-green-icon" style={{marginLeft:"65%"}}>
                            <img src={pythonIcon} class="icon"></img>
                    </div>
                    <div class="skill-name" style={{marginLeft:"35%"}}>python</div>
                </div>
                <div class="icon">
                    <div class="mint-green-icon" style={{marginLeft:"40%"}}>
                            <img src={typescriptIcon} class="icon"></img>
                    </div>
                    <div class="skill-name"style={{marginLeft:"20%"}}>typescript</div>
                </div>
            </div>

            <div class="row" style={{marginLeft:"2%"}}>
                <div class="icon">
                    <div class="dark-green-icon">
                            <img src={cIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">c</div>
                </div>
                <div class="icon">
                    <div class="dark-green-icon">
                            <img src={cplusplusIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">c++</div>
                </div>
                <div class="icon">
                    <div class="dark-green-icon" style={{marginLeft:"20%"}}>
                            <img src={svelteIcon} class="icon"></img>
                    </div>
                    <div class="skill-name" style={{marginLeft:"10%", marginTop:"2%"}}>svelte</div>
                </div>
                <div class="icon">
                    <div class="dark-green-icon">
                            <img src={mongodbIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">mongodb</div>
                </div>
                <div class="icon">
                    <div class="dark-green-icon">
                            <img src={swiftIcon} class="icon"></img>
                    </div>
                    <div class="skill-name" style={{marginLeft:"10%", marginTop:"5%"}}>swift</div>
                </div>
                <div class="icon">
                    <div class="dark-green-icon">
                            <img src={javascriptIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">javascript</div>
                </div>
            </div>

            <div class="row" style={{marginLeft:"2%"}}>
                <div class="icon">
                    <div class="brown-icon">
                            <img src={gitIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">git</div>
                </div>
                <div class="icon">
                    <div class="brown-icon">
                            <img src={dockerIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">docker</div>
                </div>
                <div class="icon">
                    <div class="brown-icon">
                            <img src={graphqlIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">graphql</div>
                </div>
                <div class="icon">
                    <div class="brown-icon">
                            <img src={nodejsIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">node.js</div>
                </div>
                <div class="icon">
                    <div class="brown-icon" style={{marginLeft:"20%", marginTop:"-5%"}}>
                            <img src={d3Icon} class="icon"></img>
                    </div>
                    <div class="skill-name">d3.js</div>
                </div>
                <div class="icon">
                    <div class="brown-icon">
                            <img src={postgresqlIcon} class="icon"></img>
                    </div>
                    <div class="skill-name">postgresql</div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Skills;