// src/pages/Projects.jsx

import React from 'react';

const Projects = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project
        title="Efficiency Nerds"
        image="/assets/images/Project1.png"
        description="Efficiency Nerds is a productivity web-based app that allows users to create their profile and stay productive by tracking their activities, a creative and efficient way to plan their day."
        repoLink="https://github.com/usamabadarr/Efficiency-Nerds.git"
      />
      <Project
        title="Typescript: Vehicle Builder"
        image="/assets/images/project2.png"
        description="A typeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks. The application prompts the user to create a new vehicle or select an existing vehicle. After going through the creation process or the selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application."
        repoLink="https://github.com/usamabadarr/08Tsoop-VB.git"
      />
    </section>
  );
};

export default Projects;