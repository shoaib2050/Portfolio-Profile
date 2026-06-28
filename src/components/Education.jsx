import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const EDU = [
  {
    degree: 'BS Software Engineering',
    institution: 'The University of Lahore',
    period: 'Sep 2018 – Jun 2022',
    icon: '🎓',
    gradient: 'linear-gradient(135deg,#7c6af0,#ec80f5)',
    glow: 'rgba(124,106,240,0.35)',
    badge: '🥈 Silver Medal',
    badgeColor: '#fbbf24',
    desc: 'Graduated top of cohort with a Silver Medal. Focused on software architecture, algorithms, mobile development, and systems programming.',
    highlights: ['Silver Medal','Software Architecture','Mobile Dev','Systems Programming'],
  },
  {
    degree: 'Intermediate in Computer Science',
    institution: 'Punjab Group of Colleges',
    period: 'Apr 2016 – Jul 2018',
    icon: '🏫',
    gradient: 'linear-gradient(135deg,#2dd4bf,#38bdf8)',
    glow: 'rgba(45,212,191,0.3)',
    badge: 'Computer Science',
    badgeColor: '#2dd4bf',
    desc: 'Foundation in computer science, mathematics, and programming fundamentals.',
    highlights: ['Computer Science','Mathematics','Programming Fundamentals'],
  },
]

const CERTS = [
  {
    name: 'API Security Fundamentals',
    issuer: 'API Security',
    icon: '🔐',
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    glow: 'rgba(240,147,251,0.3)',
    desc: 'Certified in API security principles, threat mitigation, and secure API design patterns.',
  },
  {
    name: 'LinkedIn Career Excellence',
    issuer: 'Careerflow',
    icon: '🏆',
    gradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
    glow: 'rgba(251,191,36,0.3)',
    desc: 'Recognition for professional excellence and outstanding career development.',
  },
]

export default function Education() {
  const sectionRef = useScrollReveal()

  return (
    <section id="education" className="section" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div className="section-tag reveal">🎓 Education & Certifications</div>
          <h2 className="section-title reveal d1">
            Academic <span className="gradient-text">Excellence</span>
          </h2>
          <p className="section-subtitle reveal d2">
            Silver Medal graduate backed by professional certifications in security.
          </p>
        </div>

        {/* Education */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 44 }}>
          {EDU.map((e, i) => (
            <div
              key={i}
              className="glass-card reveal"
              style={{ padding: '28px', display: 'flex', gap: 22, transitionDelay: `${i * 0.1}s` }}
            >
              <div style={{
                width: 54, height: 54, borderRadius: 16, flexShrink: 0,
                background: e.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, boxShadow: `0 8px 24px ${e.glow}`,
              }}>{e.icon}</div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: '#fff', marginBottom: 3 }}>{e.degree}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{e.institution}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', marginBottom: 5 }}>{e.period}</div>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6,
                      color: e.badgeColor,
                      background: `${e.badgeColor}18`,
                      border: `1px solid ${e.badgeColor}32`,
                    }}>{e.badge}</span>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, marginBottom: 12 }}>{e.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {e.highlights.map((h, j) => (
                    <span key={j} style={{
                      fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 6,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.45)',
                    }}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 18 }}>
            Certifications
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }} className="cert-grid">
            {CERTS.map((c, i) => (
              <div key={i} className="glass-card reveal" style={{ padding: '22px', display: 'flex', gap: 16, alignItems: 'center', transitionDelay: `${i * 0.1}s` }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 13, flexShrink: 0,
                  background: c.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, boxShadow: `0 6px 18px ${c.glow}`,
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 5 }}>{c.issuer}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.48)', lineHeight: 1.5 }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
