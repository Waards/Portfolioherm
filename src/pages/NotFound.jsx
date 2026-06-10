import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function useDecryptText(finalText, { delay = 0, speed = 50, scramble = true } = {}) {
  const [displayed, setDisplayed] = useState('')
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/`~ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIteration = 0
      const maxIterations = 10
      const interval = setInterval(() => {
        currentIteration++
        setDisplayed(
          finalText
            .split('')
            .map((char, idx) => {
              if (idx < currentIteration * (finalText.length / maxIterations)) return finalText[idx]
              return scramble ? chars[Math.floor(Math.random() * chars.length)] : char
            })
            .join('')
        )
        if (currentIteration >= maxIterations) {
          clearInterval(interval)
          setDisplayed(finalText)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [])

  return displayed
}

export default function NotFound() {
  const [glitch, setGlitch] = useState(true)
  const location = useLocation()
  const isSocial = location.pathname.includes('socials') || location.pathname.includes('social-')
  const btnText = useDecryptText('Back Home', { delay: 1200, speed: 60 })

  useEffect(() => {
    const timer = setTimeout(() => setGlitch(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="g" style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh' }}>
      <div
        className={`glitch-screen ${glitch ? 'glitch-active' : ''}`}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/img/feature-automation.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: isSocial ? 'difference' : 'screen',
          filter: isSocial ? 'grayscale(1) contrast(1.5) brightness(1.5)' : 'none',
        }}
      >
        {isSocial && (
          <>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.2) 100%)',
              pointerEvents: 'none',
            }} />
          </>
        )}
      </div>
      <div className="gc col-span-full flex flex-col items-center justify-center gap-6 py-24 text-center" style={{ position: 'relative', zIndex: 1 }}>
        {isSocial ? (
          <>
            <span className="font-expanded font-bold" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: '#000', mixBlendMode: 'difference', textShadow: 'none', background: 'rgba(255,255,255,0.85)', padding: '0.25rem 1rem', borderRadius: '2px' }}>
              No Socials
            </span>
            <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', opacity: 1, color: '#000', mixBlendMode: 'difference', background: 'rgba(255,255,255,0.85)', padding: '0.3rem 0.8rem', borderRadius: '2px' }}>
              Ken dont have any socials
            </small>
          </>
        ) : (
          <>
            <span className="font-expanded font-bold" style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', color: 'var(--midground)', mixBlendMode: 'plus-lighter' }}>
              404
            </span>
            <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', opacity: 0.6 }}>
              Page Not Found
            </small>
            <p className="hero-description" style={{ textTransform: 'none' }}>
              This page doesn't exist — or maybe it glitched out of reality.
            </p>
          </>
        )}
        <Link to="/" className="decrypt-btn" style={{ textTransform: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
          {btnText}
        </Link>
      </div>
    </div>
  )
}
