import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="section-container resume-container">
        <h1>Resume</h1>
        <hr />
        <p>My resume is being finalized — check back soon for the downloadable version.</p>
        <button className="btn-secondary resume-download" disabled>
          Download Resume (Coming Soon)
        </button>
      </div>
    </section>
  );
};

export default Resume;
