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
  const skillsData = [
    // Row 1 - Mint Green Icons
    [
      { name: 'react', icon: reactIcon, type: 'mint-green' },
      { name: 'html', icon: htmlIcon, type: 'mint-green' },
      { name: 'css', icon: cssIcon, type: 'mint-green' },
      { name: 'java', icon: javaIcon, type: 'mint-green' },
      { name: 'python', icon: pythonIcon, type: 'mint-green' },
      { name: 'typescript', icon: typescriptIcon, type: 'mint-green' }
    ],
    // Row 2 - Dark Green Icons
    [
      { name: 'c', icon: cIcon, type: 'dark-green' },
      { name: 'c++', icon: cplusplusIcon, type: 'dark-green' },
      { name: 'svelte', icon: svelteIcon, type: 'dark-green' },
      { name: 'mongodb', icon: mongodbIcon, type: 'dark-green' },
      { name: 'swift', icon: swiftIcon, type: 'dark-green' },
      { name: 'javascript', icon: javascriptIcon, type: 'dark-green' }
    ],
    // Row 3 - Brown Icons
    [
      { name: 'git', icon: gitIcon, type: 'brown' },
      { name: 'docker', icon: dockerIcon, type: 'brown' },
      { name: 'graphql', icon: graphqlIcon, type: 'brown' },
      { name: 'node.js', icon: nodejsIcon, type: 'brown' },
      { name: 'd3.js', icon: d3Icon, type: 'brown' },
      { name: 'postgresql', icon: postgresqlIcon, type: 'brown' }
    ]
  ];

  return (
    <>
      <div className="title">TECH STACK</div>
      <div className="skill-section">
        <div className="skills-container">
          {skillsData.map((row, rowIndex) => (
            <div key={rowIndex} className="skill-row">
              {row.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className={`skill-icon ${skill.type}-icon`}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;