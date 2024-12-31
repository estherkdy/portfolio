import React from 'react';
import './Projects.css'; // Import the new CSS for the projects section

const Projects = () => {
  const projects = [
    {
      title: 'Chart Maker',
      description: 'A chart visualization creator using Coordinated Multiple Views',
      image: 'https://via.placeholder.com/300',
      tags: ['React', 'MongoDB', 'JavaScript'],
      githubLink: 'https://github.com/estherkdy/chartmaker',
    },
    {
      title: 'Fitness App',
      description: 'Full Stack Calorie-tracking application',
      image: 'https://via.placeholder.com/300',
      tags: ['MySQL', 'React', 'Python'],
      githubLink: 'https://github.com/estherkdy/fitnessApp',
    },
    {
      title: 'Data Analysis Project',
      description: 'Data Analysis of top Universities in Virginia',
      image: 'https://via.placeholder.com/300',
      tags: ['Python','Frontend'],
      githubLink: 'https://github.com/estherkdy/CS3654-Project',
      
    }
  ];

  return (
    <section id="projects" className="group">
      <h2>My Projects</h2>
      <div className="project-cards-wrapper">  
        <div className="project-cards-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-thumbnail">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                <span className="tags-label"></span>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>

              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
