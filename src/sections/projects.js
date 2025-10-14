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
import { useState, useRef } from 'react';

function Projects() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "SoccerStatusTech",
      description: "Hackathon project created using machine learning, Python, and Taipy, this data analytics dashboard provides visualizations on statistics for teams in the English Premier League and offers team win predicitions with a mean error 0.9 goals per team per match.",
      src: SoccerStatusTech,
      link: "https://devfolio.co/projects/soccerstatustech-fde8"
    },
    {
      title: "UniFinder",
      description: "A data visualization tool that aggregates from a dataset of 200+ colleges to analyze ideal colleges filted upon region, value based on mean earnings and debt, and diversity ratios. Built using D3.js.",
      src: UniFinder,
      link: "https://github.com/husnajakeer/UniFinder"
    },
    {
      title: "Polar Pursuit",
      description: "A multi-level platformer game with the objective of defeating enemies, scoring points, and keeping lives to complete a polar journey. Has implemented collision handling, custom sprites, keyboard input, and audio. Built in C also using mGBA, Docker, and Usenti.",
      src: PolarPursuit,
      link: "https://husnajakeer.github.io/Polar-Pursuit/"
    },
    {
      title: "Personal Portfolio",
      description: "A fully developed React.js web application that showcases my interests, tech stack, projects, contact info, and resume. Showcases animations, responsive design, and more. Implemented and deployed using GitHub Pages.",
      src: Portfolio,
      link: "https://github.com/husnajakeer/personal-portfolio"
    },
    {
      title: "ChromeOS Converter",
      description: "a progressive web application built using Svelte that performs 10+ popular Chromebook file conversions, including photo/media/document compatibility. Conversions include JPG/PNG, PDF/DOC, WEBM/GIF, WEBM/MOV, MOV/MP4, etc.",
      src: Converter,
      link: ""
    },
    {
      title: "Aquarium Graphic",
      description: "A graphically produced image using Open GL Shading Language (GLSL) and C that encapsulates a sea environment of marine life and nature. I developed ray tracing, a specular reflection algorithm on rocks, and lighting on objects.",
      src: Graphics,
      link: "https://github.com/yolanda-y-li/3451-final"
    },
    {
      title: "Buzzer",
      description: "A MERN Stack web application that features a Georgia Tech themed UI and includes multimedia tweet posting functionality, along with explore, notifications, and profile pages.",
      src: Buzzer,
      link: "https://github.com/Jinwoo-1162/Buzzer"
    },
    {
      title: "Shroom Slayer",
      description: "An Android mobile application 2+ level dungeon crawler escape game built in Java utilizing MVVM architecture. Implentations include collision checking, leadership components, and timer/points functionality.",
      src: Android,
      link: "https://github.com/husnajakeer/CS2340C_Team1"
    },
    {
      title: "FlavorFeed",
      description: "an iOS mobile application built using Swift, Firebase, and MapKitUI that allows users to post front and rear camera facing pictures of daily meals, along with social networking, and location enabling for restaurant recommendations. Built the connections request views.",
      src: FlavorFeed,
      link: "https://github.com/arinashah30/FlavorFeed"
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 320; // Width of one card + gap
      const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      // Update current slide based on scroll position
      const newSlide = Math.round(newScrollLeft / scrollAmount);
      setCurrentSlide(Math.max(0, Math.min(newSlide, Math.ceil(projects.length / 3) - 1)));
    }
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
      
      // Update current slide based on scroll position
      const scrollAmount = 320;
      const newSlide = Math.round(container.scrollLeft / scrollAmount);
      setCurrentSlide(Math.max(0, Math.min(newSlide, Math.ceil(projects.length / 3) - 1)));
    }
  };

  return (
    <>
        <div class="title">PROJECTS</div>
        <div class="projects-container">
          <div class="scroll-wrapper">
            <button 
              class={`scroll-btn scroll-btn-left ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              ‹
            </button>
            
            <div 
              class="projects-scroll-container"
              ref={scrollContainerRef}
              onScroll={checkScrollButtons}
            >
              <div class="projects-row">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    src={project.src}
                    link={project.link}
                  />
                ))}
              </div>
            </div>
            
            <button 
              class={`scroll-btn scroll-btn-right ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              ›
            </button>
          </div>
          
          {/* Scroll Indicators */}
          <div class="scroll-indicators">
            {Array.from({ length: Math.ceil(projects.length / 3) }, (_, index) => (
              <button
                key={index}
                class={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    const scrollAmount = 320;
                    container.scrollTo({
                      left: index * scrollAmount,
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
    </>
  );
}

export default Projects;
