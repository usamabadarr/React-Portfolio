// src/pages/Projects.jsx

import React from 'react';
// import './Projects.css';

// Project Component
const Project = ({ title, image, description, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} className="project-image" />
      <p>{description}</p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
        View Repository
      </a>
    </div>
  );
};

// Projects Component
const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <Project
        title="Efficiency Nerds"
        image="/assets/images/Project1.png"
        description="Efficiency Nerds is a productivity web-based app that allows users to create their profile and stay productive by tracking their activities, a creative and efficient way to plan their day."
        repoLink="https://github.com/usamabadarr/Efficiency-Nerds.git"
      />
      <Project
        title="Typescript: Vehicle Builder"
        image="/assets/images/project2.png"
        description="A TypeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks. The application prompts the user to create a new vehicle or select an existing vehicle. After going through the creation process or the selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application."
        repoLink="https://github.com/usamabadarr/08Tsoop-VB.git"
      />
    </section>
  );
};

export default Projects;
