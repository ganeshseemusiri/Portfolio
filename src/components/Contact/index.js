import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa'
import './index.css'

const Contact = () => {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // success | error

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setStatus('success')
          formRef.current.reset()
        },
        () => {
          setStatus('error')
        }
      )
  }

  return (
    <section className="contact" id="contact">
      {/* Title */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get In Touch
        <p className='get-in-touch'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
      </motion.h2>

      <div className="contact-container">
        {/* Left Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="info-card">
            <FaEnvelope className="icon" />
            <p>seemusiriganesh@gmail.com</p>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <p>Visakhapatnam, Andhra Pradesh, India</p>
          </div>

          <div className="info-card">
            <FaGithub className="icon" />
            <p>github.com/ganeshseemusiri</p>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          ref={formRef}
          className="contact-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <input name="subject" type="text" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" required />
              <button type="submit">Send Message</button>
            
          

          {/* Status Message */}
          {status === 'success' && (
            <motion.p
              className="success-msg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FaCheckCircle /> Message sent successfully
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              className="error-msg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FaTimesCircle /> Something went wrong
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
