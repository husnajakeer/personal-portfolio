import '../styles/timeline.css';
import Event from "../components/event.js";

function Timeline() {
  return (
    <>
        <div class="timeline-title">TIMELINE</div>
        <Event
          time = "JANUARY 2024 - PRESENT"
          title = "Creative Director of Brand at Bits of Good"
          description = "manage social media and lead a team of brand designers to create and distribute merchandise, conduct user research, and lead brand redesign"
        >
        </Event>
        <Event
          time = "MAY 2024 - AUGUST 2025"
          title = "Software Engineer Intern at NCR Voyix"
          description = "improved YAML file creation by over 50% by creating a web application that accepted product metadata and parsed inputs into YAML files for onboarding products into service catalogs"
        >
        </Event>
        <Event
          time = "APRIL 2024 - PRESENT"
          title = "Software Engineer at Georgia Tech Hexlabs"
          description = "develop registration, judging, websites, and team-matching platform for annual hackathon (HackGT) that hosts 1000+ members"
        ></Event>
        <Event
          time = "JANUARY - DECEMBER 2024"
          title = "App Developer at Google (Capstone Project)"
          description = "developed a progressive web application that performs 10+ conversions in Chromebooks using the Svelte framework, leading 5+ sprints and driving 15+ user stories to completion"        
        ></Event>
        <Event
          time = "JANUARY - DECEMBER 2024"
          title = "Web Developer at Empathy Bytes VIP"
          description = "Accomplish implementation of resdesigns for the About and Project pages, and add responsiveness to website. Implemented a contact form for the VIP in React.js integrated with GraphQL."        
        ></Event>
        <Event
          time = "AUGUST - DECEMBER 2023"        
          title = "Project Developer at Georgia Tech iOS Club"
          description = "built the social connection page for an iOS mobile app that allowed users to post daily meals and share locations for restaurant/food recommendations"        
        ></Event>
        <Event
          time = "AUGUST - DECEMBER 2022"        
          title = "Project Developer at Georgia Tech WebDev"
          description = "built the notifications page for a MERN stack web application that resembled Twitter/X and enabled multimedia 'tweet' posting functionalities"     
        ></Event>
        <Event
          time = "JULY 2021 - APRIL 2022"        
          title = "Coding Instructor at Code Ninjas"
          description = "guided 30+ children in ages 5-14 in game development and event-driven programming through 7+ lesson plans, educational curriculum, and coding platforms including Scratch and Code.org"        
        ></Event> 
    </>
  );
}

export default Timeline;