import madhi from '../assets/madhi.JPG';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Particles from "react-tsparticles";

<Particles options={{
  background: { color: "#eaf4f4" },
  particles: {
    color: { value: "#6b9080" },
    links: { enable: true, color: "#6b9080" },
    move: { enable: true, speed: 1 },
    size: { value: 2 },
    number: { value: 50 }
  }
}} />

export default function Home() {
  return (
    <section id="home" className="home-container" data-aos="fade-up">
      <div className="home-left">
       <h4><span class="wave-hand">👋</span> Hi There!</h4>

        <h1>I am Madhiuksha S</h1>
        <p>Final Year AIML Student | Full Stack Developer | ML Enthusiast</p>
        <p>
            I'm an enthusiastic learner currently pursuing my B.Tech in AIML at Kongu Engineering College 
            with a CGPA of 8.05. Passionate about full stack development, machine learning & data analysis. 
            Always looking to build meaningful projects and grow.
          </p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/madhiuksha551" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/MADHIUKSHA-S" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:madhiuksha551@gmail.com"><FaEnvelope /></a>
        </div>
        <a href="https://drive.google.com/file/d/1BAf-5ZqGCXUdCf2AlglehfG1qCy0mQxA/view?usp=sharing" download class="btn-gradient">Resume</a>

        <a href="#projects" className="btn-gradient">See My Work</a>
      </div>

      <div className="home-right">
        <img src={madhi} alt="Madhiuksha S" className="profile-pic" />
      </div>
    </section>
  );
}
