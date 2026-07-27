import React from 'react';
import './Resume.css';

const skills = [
  {
    label: 'Version Control & Risk-Aware Change Management',
    text: "Backing up every configuration before making a change, evaluates the risk of a change before implementing it, and weighs system performance against system safety - the philosophy behind building an internal version-controlled configuration tool from scratch."
  },
  {
    label: 'AV Control Systems Programming',
    text: "Programming and deploying AV control systems (Extron ControlScript) within structured, framework-based architectures built for consistency across many rooms."
  },
  {
    label: 'Networking & On-Site System Configuration',
    text: "Configuring network settings for freshly installed rooms end-to-end — IP addressing, device network configuration, and connectivity troubleshooting."
  },
  {
    label: 'Device Configuration',
    text: "Configuring DSPs, control processors, and other AV hardware."
  },
  {
    label: 'Systems Engineering & Documentation',
    text: "BOM creation, signal flow diagrams, and drawing/IDP redlining with a strong eye for consistency and accuracy."
  },
  {
    label: 'On-Site Troubleshooting',
    text: "Diagnosing and resolves code and system issues on-site, including in secure facility environments where remote support isn't an option."
  },
  {
    label: 'Cabling & Rack Practices',
    text: "Termination of Ethernet and RS-232 cabling, understanding audio/control pinouts and wiring, and following rack organization best practices."
  },
  {
    label: 'Creative Problem-Solving',
    text: "Building alternative logic paths and workarounds when a standard approach hits a wall, with close attention to edge cases rather than leaving a system half-solved."
  },
  {
    label: 'User-Centered Interface Design',
    text: "Designing simplified, intuitive touch panel interfaces that hide system complexity from the end user without cutting functionality."
  },
];

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

        <div className="skills-block">
          <h2>Skills</h2>
          <ul className="skills-list">
            {skills.map((skill, idx) => (
              <li key={idx}>
                <strong>{skill.label}:</strong> {skill.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
