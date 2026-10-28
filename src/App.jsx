import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check, ChevronRight,
  Code2, Copy, Database, Download, Github, GraduationCap, Layers3, Linkedin,
  Mail, MapPin, Menu, MessageCircle, Network, Server, Terminal, X, Zap
} from 'lucide-react'

const profile = {
  name: 'Chandru Prasath S',
  email: 'prasathchandru5@gmail.com',
  phone: '+91 8072880544',
  location: 'Coimbatore, India',
  linkedin: 'https://linkedin.com/in/chandru-prasath-s',
  github: 'https://github.com/Chandru-prasath',
  leetcode: 'https://leetcode.com/u/Chandruprasath/',
}

const skills = [
  { title: 'Frontend', number: '01', icon: Code2, items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Backend', number: '02', icon: Server, items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT'] },
  { title: 'Data', number: '03', icon: Database, items: ['MongoDB', 'MySQL', 'SQL'] },
  { title: 'Cloud & DevOps', number: '04', icon: Layers3, items: ['Docker', 'Kubernetes', 'Linux', 'Git', 'GitHub'] },
]

const projects = [
  {
    number: '01', category: 'REAL-TIME SYSTEMS', title: 'Real-Time MERN Chat Application',
    description: 'A responsive messaging experience built around persistent connections, secure authentication, and a modular backend.',
    impact: '100+ concurrent connections', impactLabel: 'Socket.IO support',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'bcrypt'],
    details: ['Implemented real-time messaging using Socket.IO', 'Secured user authentication with JWT and bcrypt', 'Improved API response time by approximately 15%', 'Structured backend using MVC architecture'],
    icon: MessageCircle, tone: 'lime',
  },
  {
    number: '02', category: 'DISTRIBUTED ARCHITECTURE', title: 'Microservices Task Management System',
    description: 'A task management platform designed for independent service deployment and asynchronous, event-driven communication.',
    impact: 'Event-driven services', impactLabel: 'RabbitMQ messaging',
    stack: ['Node.js', 'Docker', 'RabbitMQ', 'MongoDB', 'REST APIs'],
    details: ['Designed services for independent deployment', 'Used RabbitMQ for asynchronous service communication', 'Containerized services with Docker', 'Built REST APIs with MongoDB-backed data management'],
    icon: Network, tone: 'violet',
  },
]

const experience = [
  'Contributed to frontend and backend features using React.js, JavaScript, Node.js, and Express.js.',
  'Built responsive, reusable React components to improve usability and user experience.',
  'Assisted with REST API integration and CRUD operations for application data.',
  'Collaborated with teammates using Git and GitHub to debug issues and improve existing features.',
]

function SectionLabel({ index, children }) {
  return <div className="section-label"><span>{index}</span><span className="label-rule" /><span>{children}</span></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeProject, setActiveProject] = useState('01')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Chandru home"><span className="wordmark-icon">c<span>.</span></span><span>CHANDRU PRASATH <small>FULL STACK DEVELOPER</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero content-width" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot"/> AVAILABLE FOR FULL STACK OPPORTUNITIES</div>
            <p className="hero-overline">HELLO, I'M CHANDRU <span>— COIMBATORE, INDIA</span></p>
            <h1>I build digital<br/>experiences with<br/><span>purpose<span className="lime-period">.</span></span></h1>
            <p className="hero-description">Full Stack Developer focused on building useful web applications, real-time experiences, and scalable backend systems with the MERN stack.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> View resume</a>
            </div>
            <div className="hero-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={12}/></a></div>
          </div>

          <div className="hero-visual" aria-label="Code-inspired visual">
            <div className="visual-top"><span><i/> LIVE PREVIEW</span><span>BUILD_001 / 2026</span></div>
            <div className="visual-grid" />
            <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
            <div className="code-window">
              <div className="code-window-bar"><span className="window-dots"><i/><i/><i/></span><span>developer.tsx</span><Braces size={15}/></div>
              <div className="code-lines">
                <p><span className="line-no">01</span><span className="code-purple">const</span> developer = {'{'}</p>
                <p><span className="line-no">02</span><span className="code-blue">name</span>: <span className="code-green">"Chandru"</span>,</p>
                <p><span className="line-no">03</span><span className="code-blue">stack</span>: [<span className="code-green">"React"</span>,</p>
                <p><span className="line-no">04</span>        <span className="code-green">"Node.js"</span>, <span className="code-green">"MongoDB"</span>],</p>
                <p><span className="line-no">05</span><span className="code-blue">mindset</span>: <span className="code-green">"Build. Learn. Improve."</span>,</p>
                <p><span className="line-no">06</span><span className="code-blue">openToWork</span>: <span className="code-orange">true</span></p>
                <p><span className="line-no">07</span>{'}'}<span className="code-cursor">_</span></p>
              </div>
              <div className="code-window-footer"><span><span className="tiny-green"/> All systems curious</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
            </div>
            <div className="visual-note note-top"><span className="note-icon"><Zap size={14}/></span><span><b>200+</b><small>PROBLEMS SOLVED</small></span></div>
            <div className="visual-note note-bottom"><span className="note-icon note-icon-violet"><Network size={15}/></span><span><b>Build for scale</b><small>BACKEND · APIs · SYSTEMS</small></span></div>
            <div className="visual-index">FIG. 01 <span>—</span> THE BUILDER'S MINDSET</div>
          </div>
          <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span className="bottomline-rule"/><span>01 / 05</span></div>
        </section>

        <section className="intro-band">
          <div className="content-width intro-inner"><span className="intro-mark">“</span><p>I like working where <strong>thoughtful interfaces</strong> meet <strong>reliable engineering</strong> — turning complex ideas into software people can actually use.</p><span className="intro-side">A LITTLE ABOUT<br/>HOW I BUILD</span></div>
        </section>

        <section id="work" className="content-width section work-section">
          <SectionLabel index="01">SELECTED WORK</SectionLabel>
          <div className="section-intro"><div><h2>Projects with a<br/><span>purpose.</span></h2></div><p>A closer look at the systems I've built, the engineering choices behind them, and the problems they set out to solve.</p></div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon
              const expanded = activeProject === project.number
              return <article className={`project-card ${project.tone} ${expanded ? 'project-expanded' : ''}`} key={project.number}>
                <button className="project-card-head" onClick={() => setActiveProject(expanded ? '' : project.number)} aria-expanded={expanded}>
                  <span className="project-number">{project.number}</span>
                  <span className="project-title-wrap"><span className="project-category">{project.category}</span><span className="project-title">{project.title}</span></span>
                  <span className="project-impact"><b>{project.impact}</b><small>{project.impactLabel}</small></span>
                  <span className="project-open">{expanded ? <X size={18}/> : <ArrowUpRight size={19}/>}</span>
                </button>
                {expanded && <div className="project-details">
                  <div className="project-art"><div className="art-grid"/><div className="art-icon"><Icon size={38}/></div><span className="art-caption">SYSTEM OVERVIEW <span>/{project.number}</span></span><div className="art-circles"><i/><i/><i/></div></div>
                  <div className="project-detail-copy"><p className="project-description">{project.description}</p><h4>WHAT I WORKED ON</h4><ul>{project.details.map((detail) => <li key={detail}><span><Check size={13}/></span>{detail}</li>)}</ul><div className="tech-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore on GitHub <ArrowUpRight size={15}/></a></div>
                </div>}
              </article>
            })}
          </div>
          <div className="project-hint"><span className="hint-dot"/> SELECT A PROJECT TO VIEW THE ENGINEERING DETAILS <span className="hint-rule"/></div>
        </section>

        <section id="about" className="content-width section about-section">
          <SectionLabel index="02">ABOUT & CAPABILITIES</SectionLabel>
          <div className="section-intro"><div><h2>Curious by nature.<br/><span>Engineer by craft.</span></h2></div><p>I'm an engineering graduate who enjoys learning by building. My focus is full stack development, with a growing interest in distributed systems, containerization, and the details that make applications dependable.</p></div>
          <div className="skills-grid">{skills.map((group) => { const Icon = group.icon; return <article className="skill-card" key={group.number}><div className="skill-card-top"><span>{group.number}</span><Icon size={20}/></div><h3>{group.title}</h3><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article> })}</div>
          <div className="principles-row"><div><span className="principle-index">A.</span><div><b>Build with intent</b><p>Keep the user and the problem at the center.</p></div></div><div><span className="principle-index">B.</span><div><b>Keep it maintainable</b><p>Readable code, reusable parts, clear boundaries.</p></div></div><div><span className="principle-index">C.</span><div><b>Learn continuously</b><p>Stay curious and improve with every build.</p></div></div></div>
        </section>

        <section id="experience" className="experience-band"><div className="content-width section experience-section">
          <SectionLabel index="03">EXPERIENCE & EDUCATION</SectionLabel>
          <div className="experience-grid"><div className="experience-heading"><h2>Where I've<br/><span>grown.</span></h2><p>Learning through collaboration, real product work, and consistent practice.</p><a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">Full experience in resume <ArrowUpRight size={15}/></a></div>
            <div className="experience-content"><article className="timeline-item"><div className="timeline-marker"><span/></div><div className="timeline-meta"><span>MAR 2025 — AUG 2025</span><span className="timeline-type">INTERNSHIP</span></div><h3>Software Engineering Intern</h3><p className="company-name">BI3 Technologies <span>·</span> Coimbatore, India</p><ul>{experience.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article className="education-item"><div className="education-icon"><GraduationCap size={20}/></div><div className="education-copy"><span>2022 — 2026</span><h3>B.E. Electronics & Communication Engineering</h3><p>Sri Shakthi Institute of Engineering and Technology · Coimbatore</p></div><div className="cgpa"><b>8.25</b><small>CGPA</small></div></article>
            </div></div>
          <div className="proof-strip"><div><span className="proof-value">200<span>+</span></span><span className="proof-label">LEETCODE PROBLEMS</span></div><div><span className="proof-value">02</span><span className="proof-label">FEATURED PROJECTS</span></div><div><span className="proof-value">MERN</span><span className="proof-label">CORE STACK</span></div><a href={profile.leetcode} target="_blank" rel="noreferrer">View coding profile <ArrowUpRight size={14}/></a></div>
        </div></section>

        <section id="contact" className="content-width section contact-section">
          <SectionLabel index="04">LET'S CONNECT</SectionLabel>
          <div className="contact-layout"><div className="contact-copy"><p className="contact-overline">HAVE A ROLE OR A GOOD PROBLEM?</p><h2>Let's build<br/>something <span>meaningful.</span></h2><p>I'm interested in full stack opportunities where I can contribute, keep learning, and help ship useful software. If that sounds like a fit, I'd love to hear from you.</p><a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={16}/></a></div>
            <div className="contact-links"><button className="contact-link email-link" onClick={copyEmail}><span className="contact-link-icon">{copied ? <Check size={18}/> : <Mail size={18}/>}</span><span><small>EMAIL ME</small><b>{copied ? 'Email copied to clipboard' : profile.email}</b></span><span className="contact-link-action">{copied ? <Check size={16}/> : <Copy size={16}/>}</span></button><a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={18}/></span><span><small>CONNECT ON LINKEDIN</small><b>linkedin.com/in/chandru-prasath-s</b></span><ArrowUpRight size={16}/></a><a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={18}/></span><span><small>CODE & PROJECTS</small><b>github.com/Chandru-prasath</b></span><ArrowUpRight size={16}/></a><div className="contact-location"><MapPin size={15}/> Based in Coimbatore, India <span>·</span> Open to opportunities</div></div></div>
        </section>
      </main>

      <footer className="site-footer content-width"><a className="footer-mark" href="#home">c<span>.</span></a><span>DESIGNED & BUILT BY CHANDRU PRASATH</span><span className="footer-center">REACT · NODE · CURIOSITY</span><a href="#home">BACK TO TOP <ArrowUpRight size={12}/></a><span className="footer-year">© 2026</span></footer>
    </div>
  )
}

export default App
