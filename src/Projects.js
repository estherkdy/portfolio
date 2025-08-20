import React from "react";
import "./Projects.css"; 

const Projects = () => {
  const projects = [
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
      tags: ['Python','Data Science', 'Modeling'],
      githubLink: 'https://github.com/estherkdy/CS3654-Project',
    }
  ];

  const secondRowProjects = [
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
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container projects-container">
        <h1>Projects</h1>
        <hr />

        {/* First row of cards */}
        <div className="project-cards-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-thumbnail">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Second row of cards */}
        <div className="project-cards-container center-row">
          {secondRowProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-thumbnail">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
