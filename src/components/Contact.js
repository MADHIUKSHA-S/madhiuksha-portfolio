import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact</h2>
      <p>Let's connect on:</p>
      <div className="contact-links">
        <a href="https://linkedin.com/in/madhiuksha551" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:madhiuksha551@gmail.com"><FaEnvelope /></a>
        <a href="https://github.com/MADHIUKSHA-S" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </section>
  );
}
