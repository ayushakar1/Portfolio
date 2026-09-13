import { useEffect, useState } from 'react'
import './App.css'

const roles = ['Developer', 'Designer', 'Blogger', 'Singer', 'Content Creator']

const services = [
  ['</>', 'Web Design', 'Building clean, responsive websites that are easy to use and maintain.'],
  ['↗', 'Digital Marketing', 'Creating thoughtful content and campaigns that help ideas reach people.'],
  ['✦', 'Graphic Design', 'Designing simple, memorable visuals for brands, communities, and events.'],
]

const skills = [
  ['HTML', 80],
  ['CSS', 55],
  ['JavaScript', 20],
  ['C', 70],
  ['C++', 30],
  ['Python', 40],
  ['Digital Marketing', 90],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2400)
    return () => window.clearInterval(timer)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'sticky' : ''}`}>
        <div className="max-width nav-inner">
          <div className="logo"><a href="#home" onClick={closeMenu}>Portfo<span>lio.</span></a></div>
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            {['home', 'about', 'services', 'skills', 'contact'].map((item) => (
              <li key={item}><a href={`#${item}`} onClick={closeMenu}>{item[0].toUpperCase() + item.slice(1)}</a></li>
            ))}
          </ul>
          <button className="menu-btn" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </nav>

      <section className="home" id="home">
        <div className="max-width"><div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Ayusha Kar</div>
          <div className="text-3">And I&apos;m a <span>{roles[roleIndex]}</span></div>
          <a href="https://github.com/ayushakar1" target="_blank" rel="noreferrer">Projects</a>
        </div></div>
      </section>

      <section className="about" id="about"><div className="max-width">
        <h2 className="title">About Me</h2><div className="about-content">
          <div className="column left"><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80" alt="Ayusha Kar" /></div>
          <div className="column right"><div className="text">I&apos;m Ayusha and I&apos;m a <span>{roles[roleIndex]}</span></div>
            <p>Ayusha is a Computer Engineering Undergraduate from the International Institute of Information Technology, Bhubaneshwar. She is passionate about learning and exploring new things. Community building and communication are her super powers. She loves travelling and trying local cuisines.</p>
            <a href="https://drive.google.com/drive/folders/1qd9ZUYSJxxF2pbCB1-DJideUoy3BdOUi" target="_blank" rel="noreferrer">Download CV</a>
          </div>
        </div>
      </div></section>

      <section className="services" id="services"><div className="max-width"><h2 className="title">My Services</h2><div className="services-content">
        {services.map(([icon, name, description]) => <div className="card" key={name}><div className="box"><i>{icon}</i><div className="text">{name}</div><p>{description}</p></div></div>)}
      </div></div></section>

      <section className="skills" id="skills"><div className="max-width"><h2 className="title">My Skills</h2><div className="skills-content">
        <div className="column left"><div className="text">My Creative Skills &amp; Experiences.</div><p>Leadership and mentoring have always been my interest areas. I have represented my school in singing and debate competitions, participated in MUNs, and worked as a campus ambassador. I have also led graphic and social media efforts for college societies and am currently a Microsoft Student Learn Ambassador.</p><a href="https://www.hackerrank.com/ayushakar1" target="_blank" rel="noreferrer">Know more</a></div>
        <div className="column right">{skills.map(([name, value]) => <div className="bars" key={name}><div className="info"><span>{name}</span><span>{value}%</span></div><div className="line"><span style={{ width: `${value}%` }} /></div></div>)}</div>
      </div></div></section>

      <section className="contact" id="contact"><div className="max-width"><h2 className="title">Contact Me</h2><div className="contact-content"><div className="column left"><div className="text">Get in Touch</div><p>Have a project, idea, or opportunity in mind? I would love to hear from you.</p><div className="icons">
        <div className="row"><i>●</i><div className="info"><div className="head">Name</div><div className="sub-title">Ayusha Kar</div></div></div>
        <div className="row"><i>⌖</i><div className="info"><div className="head">Address</div><div className="sub-title">Eindhoven, Netherlands</div></div></div>
        <div className="row"><i>@</i><div className="info"><div className="head">Email</div><div className="sub-title">ayushakar1@gmail.com</div></div></div>
      </div></div></div></div></section>

      <footer><span>Created By <a href="https://www.instagram.com/ayushaakar/" target="_blank" rel="noreferrer">AyushaKar</a> | © 2026 All rights reserved.</span></footer>
    </>
  )
}

export default App
