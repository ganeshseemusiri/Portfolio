import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from 'react-icons/fa'
import { SiExpress, SiMysql } from 'react-icons/si'

import './index.css'

const skillsList = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'SQL', icon: <SiMysql /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'GitHub', icon: <FaGithub /> },
]

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skillsList.map(skill => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
