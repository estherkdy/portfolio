import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: 'Security+ Drill',
      description: 'A self-contained study tool built while preparing for the CompTIA Security+ (SY0-701) exam - timed scope drills, flashcards, a dedicated acronym trainer, and a full card manager with import/export and a missed-question review deck.',
      tags: ['JavaScript', 'HTML/CSS', 'Cybersecurity', 'Local Storage'],
      githubLink: 'https://github.com/estherkdy/security-plus-drill',
      demoLink: 'https://estherkdy.github.io/security-plus-drill/',
    },
    {
      title: 'Team Hub',
      description: 'An internal browser-based tool combining a live project/room status tracker with a searchable knowledge base, built to replace scattered notes with one shared source of truth for an AV programming team.',
      // TODO: replace with a real screenshot - drop the image file in /public and set image: 'teamhub.png'
      tags: ['JavaScript', 'HTML/CSS', 'Team Tooling', 'Local Storage'],
      githubLink: 'https://github.com/estherkdy/team-hub',
      demoLink: 'https://estherkdy.github.io/team-hub/',
    },
    {
      title: 'SP Hub',
      description: 'A guided Python desktop application for building the configuration files an internal AV control-system framework uses to instantiate a room. Write-up and demo coming soon.',
      // TODO: replace with a real screenshot - drop the image file in /public and set image: 'sphub.png'
      tags: ['Python', 'CustomTkinter', 'AV Programming'],
      status: 'Coming Soon',
      placeholder: true,
    },
    {
      title: 'Chart Maker',
      description: 'A chart visualization creator using Coordinated Multiple Views',
      image: 'chartmaker.png',
      tags: ['React', 'MongoDB', 'JavaScript'],
      githubLink: 'https://github.com/estherkdy/chartmaker',
    },
    {
      title: 'Fitness App',
      description: 'Full Stack Calorie-tracking application',
      image: 'calorie.png',
      tags: ['MySQL', 'React', 'Python'],
      githubLink: 'https://github.com/estherkdy/fitnessApp',
    },
    {
      title: 'Data Analysis Project',
      description: 'Data Analysis of top Universities in Virginia',
      image: 'dataanalysis.png',
      tags: ['Python', 'Data Science', 'Modeling'],
      githubLink: 'https://github.com/estherkdy/CS3654-Project',
    },
    {
      title: 'Stock Price Prediction',
      description: 'Predicting the change in hourly stock price using machine learning',
      image: 'stockprice.png',
      tags: ['Python', 'LSTM', 'Data Science'],
      githubLink: 'https://github.com/estherkdy/stock-price-prediction',
    },
    {
      title: 'School Outcome in Korea',
      description: 'Compares the academic performance and social development outcomes of students in all-girls, all-boys, and co-ed schools in Korea',
      image: 'school.png',
      tags: ['Python', 'Data Science', 'React'],
      githubLink: 'https://github.com/estherkdy/school-dashboard',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container projects-container">
        <h1>Projects</h1>
        <hr />

        <div className="project-cards-container">
          {projects.map((project, index) => (
            <div className={`project-card ${project.placeholder ? "placeholder-card" : ""}`} key={index}>
              <div className="project-thumbnail">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="thumbnail-fallback">
                    <span>{project.title.split(" ").map(w => w[0]).join("").slice(0, 2)}</span>
                  </div>
                )}
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="card-links">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="github-link demo-link">
                      Open Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                      View on GitHub
                    </a>
                  )}
                  {!project.githubLink && !project.demoLink && (
                    <span className="status-badge">{project.status}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
