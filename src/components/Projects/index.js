import { motion } from 'framer-motion'
import './index.css'

const projectsList = [
  {
    title: 'Nxt Watch',
    description:
      'A YouTube-like platform with authentication, protected routes, and dark/light theme.',
    tech: ['React', 'CSS', 'JWT', 'REST API'],
    github: 'https://github.com/ganeshseemusiri/NXT-Watch',
    live: 'https://ganeshnxtwatch.ccbp.tech/',
  },
  {
    title: 'Nxt Trendz',
    description:
      'E-commerce application with product listing, cart, filters, and secure login.',
    tech: ['React', 'CSS', 'API'],
    github: 'https://github.com/ganeshseemusiri/NXT-Trendz',
    live: 'https://ganeshnxttrendz.ccbp.tech/',
  },
  {
    title: 'Todo Application',
    description:
      'Task management app to add, update, and delete todos with responsive UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ganeshseemusiri/Todo-Application',
    live: 'https://ganeshseemusiri.github.io/Todo-Application/',
  },
]

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projectsList.map(project => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>

            <div className="tech-list">
              {project.tech.map(item => (
                <span key={item} className="tech">
                  {item}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
