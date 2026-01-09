import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import './index.css'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="title">
          Hi there! I'm <span>Ganesh</span>
        </h1>

        <p className="role">Frontend Developer (React)</p>

        {/* SIMPLE SOCIAL ICONS */}
        <div className="social-icons">
          <a
            href="https://github.com/ganeshseemusiri?tab=repositories"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ganesh-seemusiri-9a0b2a266/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:ganesh-seemusiriganesh@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="home-buttons">
          <a href='#contact'><button className="primary-btn">Get in Touch</button></a>
          <a href='#projects'><button className="secondary-btn">View Projects</button></a>
        </div>
      </div>
    </section>
  )
}

export default Home
