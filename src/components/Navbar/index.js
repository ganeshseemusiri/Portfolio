import { useEffect, useState } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import './index.css'

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact']

    const handleScroll = () => {
      sections.forEach(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = id => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
    document.body.classList.toggle('dark')
  }

  const sections = ['home', 'about', 'skills', 'projects', 'contact']

  return (
    <nav className="navbar">
      <h1 className="logo">Ganesh</h1>

      {/* Desktop Menu */}
      <ul className="nav-links">
        {sections.map(item => (
          <li
            key={item}
            className={active === item ? 'active' : ''}
            onClick={() => scrollToSection(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <ul className="mobile-menu">
          {sections.map(item => (
            <li
              key={item}
              className={active === item ? 'active' : ''}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
