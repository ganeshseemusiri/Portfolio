import { motion } from 'framer-motion'
import './index.css'

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-cards">
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>🎯 Career Objective</h3>
          <p>
            I am a frontend developer focused on building responsive,
            user-friendly web applications using React.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>👤 Personal Details</h3>
          <ul>
            <li><strong>Name:</strong> Ganesh</li>
            <li><strong>Role:</strong> Frontend Developer</li>
            <li><strong>Location:</strong> Andhra Pradesh</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
