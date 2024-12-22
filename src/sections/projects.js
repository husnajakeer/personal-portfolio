import '../styles/projects.css';
import ProjectCard from "../components/project-card.js"
import SoccerStatusTech from "../images/project-pics/hacklytics.png"
import UniFinder from "../images/project-pics/unifinder.png"
import PolarPursuit from "../images/project-pics/polar-pursuit.png"
import Portfolio from "../images/project-pics/portfolio.png"
import FlavorFeed from "../images/project-pics/flavorfeed.png"
import Graphics from "../images/project-pics/graphics.png"
import Converter from "../images/project-pics/converter.png"
import Android from "../images/project-pics/2340.png"
import Buzzer from "../images/project-pics/buzzer.png"

function Projects() {
  return (
    <>
        <div class="title">PROJECTS</div>
        <div class="projects-container">
            <div class="row">
                <ProjectCard
                  title = "SoccerStatusTech"
                  description = "Hackathon project created using machine learning, Python, and Taipy, this data analytics dashboard provides visualizations on statistics for teams in the English Premier League and offers team win predicitions with a mean error 0.9 goals per team per match."
                  src = {SoccerStatusTech}
                  link = "https://devfolio.co/projects/soccerstatustech-fde8"
                ></ProjectCard>
                <ProjectCard
                  title = "UniFinder"
                  description = "A data visualization tool that aggregates from a dataset of 200+ colleges to analyze ideal colleges filted upon region, value based on mean earnings and debt, and diversity ratios. Built using D3.js."
                  src = {UniFinder}
                  link = "https://github.com/husnajakeer/UniFinder"
                ></ProjectCard>
                <ProjectCard
                  title = "Polar Pursuit"
                  description = "A multi-level platformer game with the objective of defeating enemies, scoring points, and keeping lives to complete a polar journey. Has implemented collision handling, custom sprites, keyboard input, and audio. Built in C also using mGBA, Docker, and Usenti."
                  src = {PolarPursuit}
                  link = "https://husnajakeer.github.io/Polar-Pursuit/"
                ></ProjectCard>
            </div>
            <div class="row">
                <ProjectCard
                  title = "Personal Portfolio"
                  description = "A fully developed React.js web application that showcases my interests, tech stack, projects, contact info, and resume."
                  src = {Portfolio}
                  link = "https://github.com/husnajakeer/personal-portfolio"
                ></ProjectCard>
                <ProjectCard
                  title = "ChromeOS Converter"
                  description = "a progressive web application built using Svelte that performs 10+ popular Chromebook file conversions, including photo/media/document compatibility. Conversions include JPG/PNG, PDF/DOC, WEBM/GIF, WEBM/MOV, MOV/MP4, etc."
                  src = {Converter}
                  link = ""
                ></ProjectCard>
                <ProjectCard
                  title = "Aquarium Graphic"
                  description = "A graphically produced image using Open GL Shading Language (GLSL) and C that encapsulates a sea environment of marine life and nature. I developed ray tracing, a specular reflection algorithm on the rocks, and custom lighting on the objects."
                  src = {Graphics}
                  link = "https://github.com/yolanda-y-li/3451-final"
                ></ProjectCard>
            </div>
            <div class="row">
                <ProjectCard
                  title = "Buzzer"
                  description = "A MERN Stack web application that features a Georgia Tech themed UI and includes multimedia tweet posting functionality, along with explore, notifications, and profile pages."
                  src = {Buzzer}
                  link = "https://github.com/Jinwoo-1162/Buzzer"
                ></ProjectCard>
                <ProjectCard
                  title = "Shroom Slayer"
                  description = "An Android mobile application 2+ level dungeon crawler escape game built in Java utilizing MVVM architecture. Implentations include collision checking, leadership components, and timer/points functionality."
                  src = {Android}
                  link = "https://github.com/husnajakeer/CS2340C_Team1"
                ></ProjectCard>
                <ProjectCard
                  title = "FlavorFeed"
                  description = "an iOS mobile application built using Swift, Firebase, and MapKitUI that allows users to post front and rear camera facing pictures of daily meals, along with social networking, and location enabling for restaurant recommendations. Built the connections and following/follow request views."
                  src = {FlavorFeed}
                  link = "https://github.com/arinashah30/FlavorFeed"
                ></ProjectCard>
            </div>
        </div>

    </>
  );
}

export default Projects;
