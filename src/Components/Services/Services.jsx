import React, { useState } from 'react';
import './Services.css';
import arrow_icon from '../../Portfolio_React_Assets/assets/arrow_icon.svg';
import theme_pattern from '../../Portfolio_React_Assets/assets/theme_pattern.svg';

const Services = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Sorting Visualizer',
      duration: 'May 2024 - Present',
      techStack: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3'],
      description: 'Designed an intuitive user interface allowing users to interactively adjust array size, speed of animation, and select different sorting algorithms for visualization',
    },
    {
      id: 2,
      name: 'Console-Based Visitor Management System',
      duration: 'June 2023 - July 2023',
      techStack: ['Java'],
      description: 'Conceptualized, designed, and implemented a console-based Visitor Management System using Java, emphasizing object-oriented programming (OOP) principles. Demonstrated proficiency in inheritance, encapsulation, polymorphism, and abstraction to achieve modular, extensible, and maintainable code.',
    },
    {
        id: 3,
        name: 'PortFolio',
        duration: 'Dec 2022 - March 2023',
        techStack: ['ReactJS','NodeJS','HTML5','CSS3','WEB3FORM'],
        description: 'Created a personal portfolio website showcasing projects, skills, and experience using React.js.',
    },
    // Add more projects as needed
  ]);

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {projects.map((project) => (
          <div key={project.id} className="services-format">
            <h3>{project.name}</h3>
            <p>Duration: {project.duration}</p>
            <p>Tech Stack: {project.techStack.join(' , ')}</p>
            <p>Description: <br></br><br></br>{project.description} </p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
