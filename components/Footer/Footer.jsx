import React from 'react'
import Styles from './footer.module.css'
import { Github, Globe, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <h1>Footer</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, odit.
      </p>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className={Styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/anegouni-karthik-goud/"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a href="https://github.com/Karthikanegouni" target="_blank">
          <Github />
        </a>
        <a href="https://akarthikgoud.netlify.app/" target="_blank">
          <Globe />
        </a>
      </div>
    </footer>
  )
}

export default Footer
