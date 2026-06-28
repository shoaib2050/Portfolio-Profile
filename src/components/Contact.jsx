import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const LINKS = [
  {
    icon: '📧', label: 'Email',
    value: 'shoaib2000saleem@gmail.com',
    href: 'mailto:shoaib2000saleem@gmail.com',
    cta: 'Send Email',
    gradient: 'linear-gradient(135deg,#7c6af0,#ec80f5)',
    glow: 'rgba(124,106,240,0.3)',
  },
  {
    icon: '💬', label: 'WhatsApp',
    value: '+92 336 6359992',
    href: 'https://wa.me/923366359992',
    cta: 'Message Me',
    gradient: 'linear-gradient(135deg,#4ade80,#22d3ee)',
    glow: 'rgba(74,222,128,0.3)',
  },
  {
    icon: '🔗', label: 'LinkedIn',
    value: 'sohaib-m-saleem',
    href: 'https://www.linkedin.com/in/sohaib-m-saleem-895314214/',
    cta: 'View Profile',
    gradient: 'linear-gradient(135deg,#38bdf8,#818cf8)',
    glow: 'rgba(56,189,248,0.3)',
  },
  {
    icon: '📍', label: 'Location',
    value: 'Lahore, Pakistan',
    href: null, cta: null,
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    glow: 'rgba(240,147,251,0.3)',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const sectionRef = useScrollReveal()

  const copyEmail = () => {
    navigator.clipboard.writeText('shoaib2000saleem@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="contact" className="section" ref={sectionRef} style={{ background: 'rgba(0,0,0,0.1)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="section-tag reveal" style={{ display: 'inline-flex' }}>✉️ Get In Touch</div>
          <h2 className="section-title reveal d1">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle reveal d2" style={{ margin: '0 auto' }}>
            Open to Senior iOS Engineer roles anywhere in the world. Open to relocation with
            visa sponsorship. I respond within 24 hours.
          </p>
        </div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 52 }} className="contact-cards reveal d3">
          {LINKS.map((l, i) => (
            <div key={i} className="glass-card" style={{ padding: '24px 18px', textAlign: 'center' }}>
              <div style={{
                width: 50, height: 50, borderRadius: 14,
                background: l.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, margin: '0 auto 14px',
                boxShadow: `0 6px 20px ${l.glow}`,
              }}>{l.icon}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.32)', textTransform: 'uppercase', letterSpacing: '0.09em', fontWeight: 700, marginBottom: 5 }}>
                {l.label}
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: 14, wordBreak: 'break-all', lineHeight: 1.4 }}>
                {l.value}
              </div>
              {l.href && l.cta && (
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block', padding: '7px 16px', borderRadius: 9,
                    fontSize: 12, fontWeight: 700, color: '#fff',
                    textDecoration: 'none', background: l.gradient,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >{l.cta} →</a>
              )}
            </div>
          ))}
        </div>

        {/* Big CTA card */}
        <div
          className="reveal"
          style={{
            borderRadius: 26,
            position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(124,106,240,0.14) 0%, rgba(236,128,245,0.09) 100%)',
            border: '1px solid rgba(124,106,240,0.22)',
            padding: '56px 40px',
            textAlign: 'center',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(124,106,240,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 52, marginBottom: 18, animation: 'float 4s ease-in-out infinite' }}>🤝</div>

            <h3 style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: 'clamp(22px,4vw,38px)', fontWeight: 800,
              color: '#fff', marginBottom: 12, letterSpacing: '-0.02em',
            }}>
              Ready to Hire a Senior iOS Engineer?
            </h3>

            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 38px' }}>
              I'm actively looking for Senior iOS roles anywhere in the world — open to relocation
              with visa sponsorship. Let's talk.
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="mailto:shoaib2000saleem@gmail.com"
                style={{
                  padding: '14px 32px', borderRadius: 12,
                  fontSize: 15, fontWeight: 700, color: '#fff',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg,#7c6af0,#ec80f5)',
                  boxShadow: '0 8px 28px rgba(124,106,240,0.45)',
                  transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 14px 36px rgba(124,106,240,0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,106,240,0.45)'
                }}
              >📧 Send an Email</a>

              <button
                onClick={copyEmail}
                style={{
                  padding: '14px 32px', borderRadius: 12,
                  fontSize: 15, fontWeight: 700, color: '#fff',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >{copied ? '✅ Copied!' : '📋 Copy Email'}</button>

              <a
                href="https://www.linkedin.com/in/sohaib-m-saleem-895314214/"
                target="_blank" rel="noopener noreferrer"
                style={{
                  padding: '14px 32px', borderRadius: 12,
                  fontSize: 15, fontWeight: 700, color: '#fff',
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >🔗 LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-cards { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .contact-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
