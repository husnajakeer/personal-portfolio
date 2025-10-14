import '../styles/timeline.css';
import Event from "../components/event.js";
import { useState } from 'react';

function Timeline() {
  const [activeFilter, setActiveFilter] = useState('all');

  const timelineEvents = [
    {
      id: 1,
      time: "MAY 2025 - PRESENT",
      title: "Software Engineer Intern at Cox Automotive",
      description: "Deployed 3+ user-facing features to production that hit 16%+ of daily interactions in cloud enterprise application.",
      category: "work"
    },
    {
      id: 2,
      time: "JANUARY 2024 - PRESENT",
      title: "Creative Director of Brand at Bits of Good",
      description: "Manage social media and lead a team of brand designers to create and distribute merchandise, conduct user research, and lead brand redesign",
      category: "leadership"
    },
    {
      id: 3,
      time: "MAY 2024 - AUGUST 2025",
      title: "Software Engineer Intern at NCR Voyix",
      description: "Improved YAML file creation by over 50% by creating a web application that accepted product metadata and parsed inputs into YAML files for onboarding products into service catalogs",
      category: "work"
    },
    {
      id: 4,
      time: "APRIL 2024 - PRESENT",
      title: "Software Engineer at Georgia Tech Hexlabs",
      description: "Develop registration, judging, websites, and team-matching platform for annual hackathon (HackGT) that hosts 1000+ members",
      category: "leadership"
    },
    {
      id: 5,
      time: "JANUARY - DECEMBER 2024",
      title: "App Developer at Google (Capstone Project)",
      description: "Developed a progressive web application that performs 10+ conversions in Chromebooks using the Svelte framework, leading 5+ sprints and driving 15+ user stories to completion",
      category: "research"
    },
    {
      id: 6,
      time: "JANUARY - DECEMBER 2024",
      title: "Web Developer at Empathy Bytes VIP",
      description: "Accomplished implementation of redesigns for the About and Project pages, and added responsiveness to website. Implemented a contact form for the VIP in React.js integrated with GraphQL.",
      category: "research"
    },
    {
      id: 7,
      time: "AUGUST - DECEMBER 2023",
      title: "Project Developer at Georgia Tech iOS Club",
      description: "Built the social connection page for an iOS mobile app that allowed users to post daily meals and share locations for restaurant/food recommendations",
      category: "leadership"
    },
    {
      id: 8,
      time: "AUGUST - DECEMBER 2022",
      title: "Project Developer at Georgia Tech WebDev",
      description: "Built the notifications page for a MERN stack web application that resembled Twitter/X and enabled multimedia 'tweet' posting functionalities",
      category: "leadership"
    },
    {
      id: 9,
      time: "JULY 2021 - APRIL 2022",
      title: "Coding Instructor at Code Ninjas",
      description: "Guided 30+ children ages 5-14 in game development and event-driven programming through 7+ lesson plans, educational curriculum, and coding platforms including Scratch and Code.org",
      category: "work"
    },
    {
      id: 10,
      time: "AUGUST 2022 - MAY 2025",
      title: "Bachelor of Science in Computer Science at Georgia Institute of Technology",
      description: "I graduated from Georgia Tech with a Bachelor of Science in Computer Science, where I was a member of the Georgia Tech Hexlabs, Georgia Tech iOS Club, and Georgia Tech WebDev Club.",
      category: "education"
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? timelineEvents.filter(event => event.category !== 'education')
    : timelineEvents.filter(event => event.category === activeFilter);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
        <div className="timeline-container">
            <div className="timeline-title">TIMELINE</div>
            
            {/* Filter Buttons */}
            <div className="timeline-filters">
                <button 
                  className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('all')}
                >
                  All
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'work' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('work')}
                >
                  Work Experience
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'research' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('research')}
                >
                  Research
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'leadership' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('leadership')}
                >
                  Organizations/Leadership
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('education')}
                >
                  Education
                </button>
            </div>

            <div className={`timeline-wrapper ${activeFilter !== 'all' ? 'filtered' : ''}`}>
                {filteredEvents.map((event) => (
                  <Event
                    key={event.id}
                    time={event.time}
                    title={event.title}
                    description={event.description}
                    category={event.category}
                  />
                ))}
            </div>
        </div>
    </>
  );
}

export default Timeline;