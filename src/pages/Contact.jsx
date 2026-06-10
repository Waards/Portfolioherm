import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:sjosafatvillegas@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="g">
      <div className="gc col-span-full">
        <hgroup className="flex flex-col gap-2">
          <small className="section-label"><span className="font-expanded font-bold">Contact</span></small>
        </hgroup>
      </div>
      <div className="gc" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem' }}>
        <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', mixBlendMode: 'plus-lighter' }}>
          Get in Touch
        </small>
        <p style={{ fontSize: '0.875rem', lineHeight: '1.625', letterSpacing: 'normal', textTransform: 'none', opacity: 0.6 }}>
          Have a project, collaboration idea, or just want to say hi? Drop me a message.
        </p>

        {sent ? (
          <div style={{ padding: '1rem', border: '1px solid color-mix(in oklab, var(--midground) 30%, transparent)', borderRadius: '2px' }}>
            <p style={{ fontSize: '0.875rem', letterSpacing: 'normal', textTransform: 'none', opacity: 0.8 }}>
              ✉️ Your email client should open — if not, send directly to <strong>sjosafatvillegas@gmail.com</strong>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required style={inputStyle} />
            <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={inputStyle} />
            <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handleChange} required style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }} />
            <button type="submit" className="contact-pill" style={{ alignSelf: 'flex-start', textTransform: 'none', padding: '0.6rem 1.5rem' }}>
              <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className="gc" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem' }}>
        <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', mixBlendMode: 'plus-lighter' }}>
          Direct Links
        </small>
        <div className="flex flex-col gap-3">
          <a href="mailto:sjosafatvillegas@gmail.com" className="contact-pill" style={{ textTransform: 'none', width: 'fit-content' }}>
            <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            sjosafatvillegas@gmail.com
          </a>
          <a href="https://github.com/Waards" target="_blank" rel="noopener noreferrer" className="contact-pill" style={{ textTransform: 'none', width: 'fit-content' }}>
            <svg className="size-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
            github.com/Waards
          </a>
          <a href="https://worksken.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-pill" style={{ textTransform: 'none', width: 'fit-content' }}>
            <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            worksken.vercel.app
          </a>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.8rem',
  letterSpacing: '0.05em',
  textTransform: 'none',
  background: 'transparent',
  border: '1px solid color-mix(in oklab, var(--midground) 20%, transparent)',
  borderRadius: '2px',
  padding: '0.6rem 0.8rem',
  color: 'var(--foreground)',
  outline: 'none',
  width: '100%',
}
