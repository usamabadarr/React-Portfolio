// src/pages/Portfolio.jsx
import React from 'react';
// import Project from '../pages/Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project
        title="Project 1"
        image="/assets/images/project1.png"
        description="Description of Project 1"
        repoLink=""
      />
      <Project
        title="Project 2"
        image="/assets/images/project2.png"
        description="Description of Project 2"
        repoLink=""
      />
    </section>
  );
};

export default Portfolio;

