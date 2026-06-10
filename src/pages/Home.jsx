import { useEffect, useRef, useState } from 'react'
import { useTypewriter, useTypeOnce, useDecryptText } from '../hooks/useTypewriter'
import { Link } from 'react-router-dom'

const titles = [
  'Automation Specialist',
  'GHL Systems Developer',
  'Full-Stack Web Developer',
]

const features = [
  {
    label: 'Automation Pipelines',
    text: 'Custom n8n workflows that connect your tools, automate follow-ups, and cut manual busywork — running unattended 24/7.',
    image: '/img/feature-automation.webp',
  },
  {
    label: 'CRM & Funnel Systems',
    text: 'GoHighLevel architecture with multi-pipeline automation, lead scoring, smart lists, and high-converting funnel builds.',
    image: '/img/feature-connect.webp',
  },
  {
    label: 'Full-Stack Development',
    text: 'End-to-end web applications built with React, Vue, PHP, and Node.js — from database design to polished UI.',
    image: '/img/feature-browse.webp',
  },
  {
    label: 'AI & LLM Integration',
    text: 'Multi-model routing via OpenRouter and Groq API. Custom AI agents, chat interfaces, and intelligent workflow triggers.',
    image: '/img/feature-memory.webp',
  },
  {
    label: 'Data & Analytics',
    text: 'Interactive dashboards with Chart.js, Excel-format exports, weighted attendance algorithms, and real-time reporting.',
    image: '/img/feature-tasks.webp',
  },
  {
    label: 'Deployment & Ops',
    text: 'Vercel, Docker, and SSH-based deployment — from development to production with CI/CD and environment isolation.',
    image: '/img/feature-sandbox.webp',
  },
]

const demoLines = [
  '',
  ' ken --init-project cianan-erp',
  ' [system] scanning repository cianan-erp...',
  ' [system] identified 23 source files across 5 modules',
  ' [system] analyzing dependency graph...',
  ' ✓ dependencies resolved (no conflicts)',
  '',
  ' ken --deploy --env production',
  ' [deploy] building assets via Vite...',
  ' [deploy] running database migrations...',
  ' [deploy] deploying to Vercel (production)...',
  ' ✓ deployment successful (2.3s)',
  '',
  ' ken --schedule "send weekly report @ 9am Mon"',
  ' [cron] scheduled: weekly-report (0 9 * * 1)',
  ' [cron] report template: weekly-analytics',
  ' ✓ automation active',
]

export default function Home() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const { displayed: typedTitle, isTyping } = useTypewriter(titles, { typeSpeed: 70, deleteSpeed: 35, pauseDuration: 2500 })
  const { displayed: typedRole } = useTypeOnce('GHL Systems Developer  ·  Full-Stack Web Developer', { typeSpeed: 30, startDelay: 500 })

  const [loading, setLoading] = useState(true)
  const decryptText = useDecryptText('Ken.', { delay: 200, speed: 70 })

  useEffect(() => {
    if (decryptText === 'Ken.') {
      const timer = setTimeout(() => setLoading(false), 400)
      return () => clearTimeout(timer)
    }
  }, [decryptText])

  const [featVisible, setFeatVisible] = useState([])
  const featRef = useRef(null)

  const [demoVisible, setDemoVisible] = useState(false)
  const demoRef = useRef(null)
  const bodyRef = useRef(null)
  const [displayed, setDisplayed] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeatVisible(features.map((_, i) => i))
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (featRef.current) observer.observe(featRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDemoVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (demoRef.current) observer.observe(demoRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!demoVisible) return
    if (lineIdx >= demoLines.length) return
    const currentLine = demoLines[lineIdx]
    if (charIdx < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + currentLine[charIdx])
        setCharIdx((c) => c + 1)
      }, 12)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + '\n')
        setLineIdx((i) => i + 1)
        setCharIdx(0)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [demoVisible, lineIdx, charIdx])

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [displayed])

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'var(--background)',
        flexDirection: 'column', gap: '1rem',
        transition: 'opacity 0.4s',
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? 'auto' : 'none',
      }}>
        <span className="font-expanded font-bold" style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          color: 'var(--midground)',
          mixBlendMode: 'plus-lighter',
          fontFamily: 'var(--font-rules-expanded)',
        }}>
          {decryptText}
        </span>
        <small className="font-mondwest" style={{ fontSize: '0.75rem', letterSpacing: '0.15rem', opacity: 0.4 }}>
          LOADING...
        </small>
      </div>
      {/* Hero */}
      <div className="g" ref={sectionRef}>
        <div className="gc flex flex-col items-center justify-center gap-6 py-16 text-center md-py-24">
          <div className={`animate-fade-up ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <small className="hero-eyebrow">
              {typedTitle}
              <span className={`typing-cursor ${!isTyping ? 'done' : ''}`} />
            </small>
            <span className="hero-title" style={{ mixBlendMode: 'plus-lighter' }}>
              Ken.
            </span>
            <p className="hero-subtitle" style={{ marginTop: '0.5rem', minHeight: '1.5em' }}>
              {typedRole}
              <span className={`typing-cursor ${typedRole.length === 'GHL Systems Developer  ·  Full-Stack Web Developer'.length ? 'done' : ''}`} />
            </p>
          </div>
          <div className={`animate-fade-up ${visible ? 'visible' : ''}`} style={{ maxWidth: '620px', transitionDelay: '0.15s' }}>
            <p className="hero-description">
              Automation Specialist &amp; GHL Systems Developer with 5+ years building automated digital infrastructures. Expert in CRM systems, high-converting funnels, and n8n pipelines — with a full-stack background for end-to-end independent execution.
            </p>
          </div>
          <div className={`animate-fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/skills" className="contact-pill" style={{ textTransform: 'none' }}>
                <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                Skills
              </Link>
              <Link to="/projects" className="contact-pill" style={{ textTransform: 'none' }}>
                <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                Projects
              </Link>
              <Link to="/contact" className="contact-pill" style={{ textTransform: 'none' }}>
                <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="g" ref={featRef}>
        <div className="gc col-span-full">
          <hgroup className="flex flex-col gap-2">
            <small className="section-label"><span className="font-expanded font-bold">What I Do</span></small>
          </hgroup>
        </div>
        <div className="gc col-span-full" style={{ borderBottom: 0, padding: 0 }}>
          <div className="features-grid">
            {features.map((feature, i) => (
              <div key={feature.label} className="feature-card group">
                <div
                  className="flex flex-col gap-3 animate-fade-up"
                  style={{
                    opacity: featVisible.includes(i) ? 1 : undefined,
                    transform: featVisible.includes(i) ? 'translateY(0)' : undefined,
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    style={{
                      width: '100%', height: 'auto',
                      aspectRatio: '1334 / 1148',
                      objectFit: 'cover', borderRadius: '2px',
                      mixBlendMode: 'plus-lighter', opacity: 0.9,
                    }}
                  />
                  <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', mixBlendMode: 'plus-lighter' }}>
                    {feature.label}
                  </small>
                  <p className="feature-text">{feature.text}</p>
                </div>
                <span className="feature-hover-bg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Terminal */}
      <div id="demo" className="g" ref={demoRef}>
        <div className="gc col-span-full lg-col-span-1">
          <hgroup className="flex flex-col gap-2">
            <small className="section-label"><span className="font-expanded font-bold">See It in Action</span></small>
          </hgroup>
          <div className="mt-3">
            <div aria-label="Terminal Demo" className="demo-section" role="img">
              <div className="demo-header">
                <div className="demo-dots">
                  <span className="demo-dot" />
                  <span className="demo-dot" />
                  <span className="demo-dot" />
                </div>
                <span className="demo-title">Ken</span>
              </div>
              <div className="demo-body" ref={bodyRef}>
                {displayed}
                <span className="cursor-blink" style={{ backgroundColor: 'var(--midground)', animation: 'blink 1s step-end infinite' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="gc relative hidden lg-block" style={{ backgroundColor: 'var(--background)', borderLeft: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <img src="/img/hero-art.webp" alt="" style={{ width: '100%', height: 'auto', opacity: 0.4, mixBlendMode: 'plus-lighter' }} />
          <small style={{ color: '#ff2702' }} className="font-mondwest absolute right-4 bottom-4 z-1">Ken</small>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="g">
        <div className="gc col-span-full">
          <hgroup className="flex flex-col gap-2">
            <small className="section-label"><span className="font-expanded font-bold">Quick Overview</span></small>
          </hgroup>
        </div>
        <div className="gc" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
          <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', mixBlendMode: 'plus-lighter' }}>
            Who I Am
          </small>
          <p style={{ fontSize: '0.9375rem', lineHeight: '1.625', letterSpacing: 'normal', textTransform: 'none', opacity: 0.6 }}>
            I build automated digital infrastructures — from CRM pipelines and AI-driven workflows to full-stack web applications. With 5+ years across automation, development, and technical operations, I bridge the gap between business processes and technology.
          </p>
          <p style={{ fontSize: '0.9375rem', lineHeight: '1.625', letterSpacing: 'normal', textTransform: 'none', opacity: 0.6 }}>
            Proficient in Go High Level, n8n, React, Vue, PHP, and Node.js — I execute end-to-end, from architecture to deployment.
          </p>
        </div>
        <div className="gc" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', mixBlendMode: 'plus-lighter' }}>
            Quick Facts
          </small>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Experience', value: '5+ Years' },
              { label: 'Focus', value: 'Automation & Development' },
              { label: 'Education', value: 'BS IT — Cavite State Univ.' },
              { label: 'Languages', value: 'English (C1/C2), Filipino (Native)' },
            ].map((f) => (
              <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid color-mix(in oklab, currentColor 10%, transparent)', paddingBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', opacity: 0.5, textTransform: 'none' }}>{f.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', opacity: 0.7, textTransform: 'none' }}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
