import React from 'react';
import './Resume.css';

const skills = [
  {
    label: 'Version Control & Risk-Aware Change Management',
    text: "Backs up every configuration before making a change, evaluates the risk of a change before implementing it, and weighs system performance against system safety — the philosophy behind building an internal version-controlled configuration tool from scratch."
  },
  {
    label: 'AV Control Systems Programming',
    text: "Programs and deploys AV control systems (Extron ControlScript) within structured, framework-based architectures built for consistency across many rooms."
  },
  {
    label: 'Networking & On-Site System Configuration',
    text: "Configures network settings for freshly installed rooms end-to-end — IP addressing, device network configuration, and connectivity troubleshooting. A particular strength and interest area."
  },
  {
    label: 'Commissioning & Testing (PITCO)',
    text: "Commissions newly installed rooms from empty to fully operational: configuring devices, layered troubleshooting, and live testing before handoff."
  },
  {
    label: 'Device Configuration',
    text: "Configures DSPs, control processors, and other AV hardware, with working knowledge of DSP tuning for acoustic echo cancellation (AEC)."
  },
  {
    label: 'Systems Engineering & Documentation',
    text: "BOM creation, signal flow diagrams, and drawing/IDP redlining with a strong eye for consistency and accuracy; coordinates directly with vendors to source and quote equipment."
  },
  {
    label: 'On-Site Troubleshooting',
    text: "Diagnoses and resolves code and system issues on-site, including in secure facility environments where remote support isn't an option."
  },
  {
    label: 'Cabling & Rack Practices',
    text: "Builds and terminates Ethernet and RS-232 cabling, understands audio/control pinouts and wiring, and follows rack organization best practices."
  },
  {
    label: 'Vendor & Product Research',
    text: "Compares devices and vendors on capability, compatibility, and cost to find the most time- and cost-efficient solution for a project."
  },
  {
    label: 'Creative Problem-Solving',
    text: "Builds alternative logic paths and workarounds when a standard approach hits a wall, with close attention to edge cases rather than leaving a system half-solved."
  },
  {
    label: 'User-Centered Interface Design',
    text: "Designs simplified, intuitive touch panel interfaces that hide system complexity from the end user without cutting functionality."
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
