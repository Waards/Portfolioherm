import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Automation & AI',
    tags: ['Go High Level (GHL)', 'n8n Pipelines', 'OpenRouter API', 'Groq API', 'AI Vibe Coding', 'CRM Pipeline Mgmt', 'Funnel Development', 'Chatbot Integration', 'Workflow Automation'],
  },
  {
    category: 'Frontend Development',
    tags: ['React', 'Vue', 'Next.js', 'Nuxt.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind', 'Sass', 'GSAP', 'Framer Motion', 'Responsive Design', 'Web Accessibility'],
  },
  {
    category: 'Backend & Database',
    tags: ['PHP', 'Laravel', 'Node.js', 'Express', 'MySQL', 'PostgreSQL', 'Firebase', 'RESTful API', 'JWT Auth', 'Serverless Functions'],
  },
  {
    category: 'Tools & Platforms',
    tags: ['Git / GitHub', 'Vercel', 'Docker', 'Apollo', 'Apify', 'Figma', 'Canva', 'Photoshop', 'Notion', 'Google Workspace', 'CapCut', 'VS Code'],
  },
  {
    category: 'Healthcare VA',
    tags: ['EHR Systems', 'Medical Billing', 'HIPAA Compliance', 'Patient Scheduling', 'Insurance Verification', 'Medical Records Mgmt'],
  },
  {
    category: 'Soft Skills',
    tags: ['Project Management', 'Client Communication', 'Problem Solving', 'Team Collaboration', 'Time Management', 'Adaptability', 'Documentation'],
  },
]

const proficiencies = [
  { label: 'Go High Level (GHL)', level: 95 },
  { label: 'n8n Automation', level: 90 },
  { label: 'React / Vue', level: 88 },
  { label: 'PHP / Laravel', level: 82 },
  { label: 'Node.js', level: 78 },
  { label: 'AI / LLM Integration', level: 85 },
  { label: 'Funnel Development', level: 92 },
  { label: 'UI / UX Design', level: 75 },
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '12+', label: 'Tech Stacks' },
  { value: '10+', label: 'Happy Clients' },
]

export default function Skills() {
  const [visibleIdx, setVisibleIdx] = useState(-1)
  const sectionRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)
  const [profVisible, setProfVisible] = useState(false)
  const profRef = useRef(null)
  const [barsAnimated, setBarsAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisibleIdx(0); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (visibleIdx < 0 || visibleIdx >= skillGroups.length) return
    const timer = setTimeout(() => setVisibleIdx((i) => i + 1), 150)
    return () => clearTimeout(timer)
  }, [visibleIdx])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setProfVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (profRef.current) observer.observe(profRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (profVisible) {
      const timer = setTimeout(() => setBarsAnimated(true), 300)
      return () => clearTimeout(timer)
    }
  }, [profVisible])

  const sectionStyle = (i) => ({
    opacity: visibleIdx > i ? 1 : 0,
    transform: visibleIdx > i ? 'translateY(0)' : 'translateY(12px)',
    transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
    transitionDelay: `${i * 0.08}s`,
  })

  return (
    <div id="skills" className="g" ref={sectionRef}>
      <div className="gc col-span-full flex flex-col gap-4 py-12">
        <small className="section-label"><span className="font-expanded font-bold">Skills & Proficiency</span></small>
        <p className="hero-description" style={{ maxWidth: '600px', fontSize: '0.9375rem', textTransform: 'none', opacity: 0.6 }}>
          Automation specialist and full-stack developer with deep expertise in GoHighLevel, n8n, and modern web technologies. I build end-to-end solutions that bridge business processes and technology.
        </p>
      </div>

      {/* Skill Groups Grid */}
      <div className="gc col-span-full" style={{ padding: 0 }}>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={group.category} className="skill-card" style={sectionStyle(i)}>
              <small className="skill-category">{group.category}</small>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="gc col-span-full" ref={statsRef} style={{ padding: 'calc(var(--spacing) * 6) calc(var(--spacing) * 4)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'calc(var(--spacing) * 4)',
          textAlign: 'center',
        }}
        className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-fade-up ${statsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s`, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
            >
              <span className="font-expanded font-bold" style={{ fontSize: '2.5rem', color: 'var(--midground)', mixBlendMode: 'plus-lighter' }}>
                {stat.value}
              </span>
              <small className="font-mondwest" style={{ fontSize: '0.75rem', letterSpacing: '0.15rem', opacity: 0.6 }}>
                {stat.label}
              </small>
            </div>
          ))}
        </div>
      </div>

      {/* Proficiency Bars */}
      <div className="gc col-span-full" ref={profRef}>
        <div style={{ padding: 'calc(var(--spacing) * 4)' }}>
          <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', mixBlendMode: 'plus-lighter', display: 'block', marginBottom: '1.5rem' }}>
            Core Competencies
          </small>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {proficiencies.map((prof) => (
              <div key={prof.label} className={`animate-fade-up ${profVisible ? 'visible' : ''}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'none', opacity: 0.7 }}>{prof.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', opacity: 0.5 }}>{prof.level}%</span>
                </div>
                <div style={{ height: '6px', backgroundColor: 'color-mix(in oklab, currentColor 10%, transparent)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: barsAnimated ? `${prof.level}%` : '0%',
                    backgroundColor: 'var(--midground)',
                    borderRadius: '2px',
                    transition: 'width 1s ease-out',
                    transitionDelay: '0.2s',
                    opacity: 0.8,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="gc relative hidden lg-block"
        style={{ backgroundColor: 'var(--background)', borderLeft: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        <img src="/img/hero-art.webp" alt="" style={{ width: '100%', height: 'auto', opacity: 0.4, mixBlendMode: 'plus-lighter' }} />
        <small style={{ color: '#ff2702' }} className="font-mondwest absolute right-4 bottom-4 z-1">
          Ken
        </small>
      </div>
    </div>
  )
}
