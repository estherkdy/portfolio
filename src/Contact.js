import React, { useState } from 'react';
import './Contact.css';

const CONTACT_EMAIL = 'estherkimmy@protonmail.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name}\nReply to: ${formData.email}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container contact-container">
        <h1>Contact Me</h1>
        <hr />
        <div className="contact-info">
          <p>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Contact Info (Email or Phone)</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email or Phone"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
          <p className="form-hint">This opens your email app with the message ready to send to me directly.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
