import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    name: 'CIANAN',
    desc: 'Multi-role stock & HR web application with Super Admin, Admin, and HR dashboards. Role-based authentication, weighted attendance algorithm, Excel exports, and 3D CSS sakura animations.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'Chart.js'],
    link: 'https://github.com/Waards/management',
    label: 'Source',
  },
  {
    name: 'Azelea',
    desc: 'AI & automation dashboard — multi-model LLM routing via OpenRouter + Groq, custom n8n pipelines, and GoHighLevel integrations for automated follow-ups and conversion optimization.',
    stack: ['OpenRouter', 'Groq API', 'n8n', 'GHL', 'Node.js'],
    link: 'https://azelea.vercel.app/login',
    label: 'Visit',
  },
  {
    name: 'Touch Star Game',
    desc: 'Interactive browser-based game with login system and engaging gameplay mechanics.',
    stack: ['React', 'JavaScript', 'CSS'],
    link: 'https://v0-touch-star-game.vercel.app/login',
    label: 'Visit',
  },
  {
    name: 'Ken Portfolio',
    desc: 'Personal portfolio website built with the Hermes Agent visual style — dark theme, custom fonts, typing animations, and dynamic routing.',
    stack: ['React', 'Vite', 'React Router'],
    link: 'https://kenpotfolio.vercel.app/',
    label: 'Visit',
  },
  {
    name: 'WardsPort',
    desc: 'Portfolio and project showcase platform with responsive design and modern UI.',
    stack: ['React', 'Tailwind', 'Vercel'],
    link: 'https://wardsportv3.vercel.app/',
    label: 'Visit',
  },
  {
    name: 'Clean',
    desc: 'Clean and minimal web application with streamlined user experience.',
    stack: ['React', 'CSS', 'Vercel'],
    link: 'https://clean-beta.vercel.app/',
    label: 'Visit',
  },
  {
    name: 'VAS',
    desc: 'Virtual assistant services platform — streamlined client management and service delivery interface.',
    stack: ['React', 'Node.js', 'Vercel'],
    link: 'https://vas-pink.vercel.app/',
    label: 'Visit',
  },
  {
    name: 'About Game',
    desc: 'Game information and discovery platform with curated content.',
    stack: ['React', 'JavaScript', 'Vercel'],
    link: 'https://aboutgame.vercel.app/',
    label: 'Visit',
  },
  {
    name: 'Portfolio NYZ',
    desc: 'Design-focused portfolio template with creative layout and animations.',
    stack: ['React', 'CSS', 'JavaScript'],
    link: 'https://portfolionyz.vercel.app/',
    label: 'Visit',
  },
  {
    name: 'EvoWards',
    desc: 'Evolutionary project management and workflow tracking application.',
    stack: ['React', 'Node.js', 'Vercel'],
    link: 'https://evowards.vercel.app/',
    label: 'Visit',
  },
  {
    name: 'GSApp Parallax',
    desc: 'GSAP-powered parallax scrolling website with smooth animations and interactive elements.',
    stack: ['GSAP', 'JavaScript', 'CSS'],
    link: 'https://gsapparalax.vercel.app/',
    label: 'Visit',
  },
  {
    name: 'Proposal',
    desc: 'Professional proposal and pitch deck web application with clean presentation layout.',
    stack: ['React', 'CSS', 'Vercel'],
    link: 'https://proposal-six-inky.vercel.app/',
    label: 'Visit',
  },
]

export default function ProjectsPage() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div id="projects" className="g" ref={sectionRef}>
      <div className="gc col-span-full">
        <hgroup className="flex flex-col gap-2">
          <small className="section-label"><span className="font-expanded font-bold">Projects</span></small>
        </hgroup>
      </div>
      <div className="gc col-span-full" style={{ padding: 0, borderRight: 0 }}>
        {projects.map((project, i) => (
          <div key={project.name} className="project-card">
            <div className={`animate-fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.05}s` }}>
              <span className="project-name">{project.name}</span>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-stack-tag">{tech}</span>
                ))}
              </div>
              <p className="project-desc">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.label === 'Source' ? (
                  <><svg className="size-3" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.3rem' }}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg> Source ↗</>
                ) : (
                  <><svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: '0.3rem' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> Visit ↗</>
                )}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
