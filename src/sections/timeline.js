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
        <svg class="connector" xmlns="http://www.w3.org/2000/svg" width="11" height="80" viewBox="0 0 11 190" fill="none">
          <path d="M5.97791 184.997L4.98345 5.00006" stroke="#85715B" stroke-width="9" stroke-linecap="round"/>
        </svg>
        <Event
          time = "MAY 2024 - AUGUST 2025"
          title = "Software Engineer Intern at NCR Voyix"
          description = "improved YAML file creation by over 50% by creating a web application that accepted product metadata and parsed inputs into YAML files for onboarding products into service catalogs"
        >
        </Event>
        <svg class="connector" xmlns="http://www.w3.org/2000/svg" width="11" height="90" viewBox="0 0 11 190" fill="none">
          <path d="M5.97791 184.997L4.98345 5.00006" stroke="#85715B" stroke-width="9" stroke-linecap="round"/>
        </svg>
        <Event
          time = "APRIL 2024 - PRESENT"
          title = "Software Engineer at Georgia Tech Hexlabs"
          description = "develop registration, judging, websites, and team-matching platform for annual hackathon (HackGT) that hosts 1000+ members"
        ></Event>
        <svg class="connector" xmlns="http://www.w3.org/2000/svg" width="11" height="90" viewBox="0 0 11 190" fill="none">
          <path d="M5.97791 184.997L4.98345 5.00006" stroke="#85715B" stroke-width="9" stroke-linecap="round"/>
        </svg>
        <Event
          time = "JANUARY - DECEMBER 2024"
          title = "App Developer at Google (Capstone Project)"
          description = "developed a progressive web application that performs 10+ conversions in Chromebooks using the Svelte framework, leading 5+ sprints and driving 15+ user stories to completion"        
        ></Event>
        <svg class="connector" xmlns="http://www.w3.org/2000/svg" width="11" height="90" viewBox="0 0 11 190" fill="none">
          <path d="M5.97791 184.997L4.98345 5.00006" stroke="#85715B" stroke-width="9" stroke-linecap="round"/>
        </svg>
        <Event
          time = "AUGUST - DECEMBER 2023"        
          title = "Project Developer at Georgia Tech iOS Club"
          description = "built the social connection page for an iOS mobile app that allowed users to post daily meals and share locations for restaurant/food recommendations"        
        ></Event>
        <svg class="connector" xmlns="http://www.w3.org/2000/svg" width="11" height="90" viewBox="0 0 11 190" fill="none">
          <path d="M5.97791 184.997L4.98345 5.00006" stroke="#85715B" stroke-width="9" stroke-linecap="round"/>
        </svg>
        <Event
          time = "AUGUST - DECEMBER 2022"        
          title = "Project Developer at Georgia Tech WebDev"
          description = "built the notifications page for a MERN stack web application that resembled Twitter/X and enabled multimedia 'tweet' posting functionalities"     
        ></Event>
        <svg class="connector" xmlns="http://www.w3.org/2000/svg" width="11" height="90" viewBox="0 0 11 190" fill="none">
          <path d="M5.97791 184.997L4.98345 5.00006" stroke="#85715B" stroke-width="9" stroke-linecap="round"/>
        </svg>
        <Event
          time = "JULY 2021 - APRIL 2022"        
          title = "Coding Instructor at Code Ninjas"
          description = "guided 30+ children in ages 5-14 in game development and event-driven programming through 7+ lesson plans, educational curriculum, and coding platforms including Scratch and Code.org"        
        ></Event> 
    </>
  );
}

export default Timeline;