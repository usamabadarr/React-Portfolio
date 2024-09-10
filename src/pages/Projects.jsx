// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project
        title="Project 1"
        image="/assets/images/project1.png"
        description="Description of Project 1"
        liveLink="https://liveproject1.com"
        repoLink="https://github.com/yourrepo1"
      />
      <Project
        title="Project 2"
        image="/assets/images/project2.png"
        description="Description of Project 2"
        liveLink="https://liveproject2.com"
        repoLink="https://github.com/yourrepo2"
      />
    </section>
  );
};

export default Portfolio;

