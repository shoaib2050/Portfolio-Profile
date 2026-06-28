import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const IMPACTS = [
  {
    icon: '⚡', value: '70%', label: 'Faster',
    desc: 'Cut image-processing time in a large-scale photo analysis app.',
    gradient: 'linear-gradient(135deg,#7c6af0,#ec80f5)',
    glow: 'rgba(124,106,240,0.3)',
  },
  {
    icon: '🔒', value: '80K+', label: 'VPN Users',
    desc: 'Hardened VPN networking systems with better stability & retention.',
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    glow: 'rgba(240,147,251,0.3)',
  },
  {
    icon: '🏥', value: '500+', label: 'Hospitals',
    desc: 'Shipped Palarum fall-prevention IoT system deployed globally.',
    gradient: 'linear-gradient(135deg,#2dd4bf,#38bdf8)',
    glow: 'rgba(45,212,191,0.3)',
  },
  {
    icon: '🛡️', value: '0s', label: 'Alert Delay',
    desc: 'Built school safety app with instant emergency alerts.',
    gradient: 'linear-gradient(135deg,#4ade80,#22d3ee)',
    glow: 'rgba(74,222,128,0.3)',
  },
]

const INFO = [
  { icon: '📍', label: 'Location',     value: 'Lahore, Pakistan' },
  { icon: '📱', label: 'Phone',         value: '+92 336 6359992' },
  { icon: '📧', label: 'Email',         value: 'shoaib2000saleem@gmail.com' },
  { icon: '🌍', label: 'Open To',       value: 'Worldwide · Visa Sponsorship' },
  { icon: '🏢', label: 'Current Role',  value: 'Sr. Engineer @ PentaLoop' },
  { icon: '🎓', label: 'Degree',        value: 'BS Software Eng. (Silver Medal)' },
]

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">

        {/* Two-column layout — header lives inside left col so right col starts at the top */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 36, paddingTop: 24 }}
          className="about-main-grid"
        >
          {/* Bio — includes section header */}
          <div className="reveal-left">
            <div className="section-tag">👋 About Me</div>
            <h2 className="section-title" style={{ marginBottom: 10 }}>
              Engineering iOS That <span className="gradient-text">Scales & Performs</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 24 }}>
              5+ years building production apps — from VPN architecture to real-time BLE
              hardware integration. I ship products that reach millions.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.9, marginBottom: 18 }}>
              I build and ship iOS products that scale — from greenfield apps to systems running
              for <strong style={{ color: '#fff' }}>1M+ users</strong> across utility, IoT, AI,
              and healthcare. I specialise in VPN networking architecture, real-time BLE hardware
              integration, and performance-critical mobile systems built with Swift, SwiftUI,
              UIKit, and MVVM / Clean Architecture.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.9, marginBottom: 18 }}>
              Beyond code, I mentor junior engineers, run technical R&D, and have cross-platform
              exposure through Flutter. I'm based in <strong style={{ color: '#fff' }}>Lahore, Pakistan</strong>{' '}
              and actively open to Senior iOS Engineer roles worldwide — ready to relocate with
              visa sponsorship.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.9, marginBottom: 28 }}>
              I hold a <strong style={{ color: '#fff' }}>BS in Software Engineering with a Silver Medal</strong>{' '}
              from the University of Lahore, and I'm API Security Fundamentals certified.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="mailto:shoaib2000saleem@gmail.com" className="btn btn-primary">
                📧 Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/sohaib-m-saleem-895314214/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                🔗 LinkedIn
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }} className="reveal-right">
            {INFO.map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 13 }}
              >
                <span style={{
                  fontSize: 18, width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(124,106,240,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.32)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2, fontWeight: 700 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.82)' }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual poster — side by side layout */}
        <div className="reveal" style={{ marginBottom: 36, display: 'flex', gap: 36, alignItems: 'center' }} id="poster-row">

          {/* Left: poster image constrained */}
          <div style={{
            flexShrink: 0, width: 340,
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(124,106,240,0.28)',
            boxShadow: '0 0 50px rgba(124,106,240,0.2), 0 20px 50px rgba(0,0,0,0.5)',
          }}>
            <img
              src="/sohaib-poster.jpg"
              alt="Sohaib M. Saleem — Visual Resume"
              style={{ width: '100%', display: 'block' }}
              onError={e => { e.currentTarget.closest('#poster-row').style.display = 'none' }}
            />
            {/* Bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
              background: 'linear-gradient(to top, rgba(7,7,26,0.6), transparent)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Right: key highlights */}
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, color: 'rgba(124,106,240,0.9)',
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14,
            }}>My Philosophy</div>
            <h3 style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800,
              color: '#fff', lineHeight: 1.15, marginBottom: 20,
            }}>
              Build. Learn.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa, #ec80f5)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Grow.</span>
            </h3>

            {[
              { icon: '🎯', text: 'Build products people love and solve real-world problems through technology.' },
              { icon: '🧠', text: 'Consistency over motivation. Ideas are cheap — execution wins.' },
              { icon: '🚀', text: 'Ship. Learn. Improve. Repeat — every single day.' },
              { icon: '🤝', text: 'Combine creativity, AI, and engineering to deliver impactful apps.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                marginBottom: 14,
              }}>
                <span style={{
                  fontSize: 16, width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                  background: 'rgba(124,106,240,0.1)',
                  border: '1px solid rgba(124,106,240,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{item.icon}</span>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, marginTop: 6 }}>
                  {item.text}
                </p>
              </div>
            ))}

            <div style={{
              marginTop: 24, padding: '14px 18px', borderRadius: 12,
              background: 'rgba(124,106,240,0.08)',
              border: '1px solid rgba(124,106,240,0.18)',
            }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                "iOS Engineer · AI Builder · Product Creator — fueled by coffee & curiosity."
              </span>
            </div>
          </div>
        </div>

        {/* Impact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }} className="impact-grid">
          {IMPACTS.map((h, i) => (
            <div
              key={i}
              className="glass-card reveal"
              style={{ padding: '24px 20px', transitionDelay: `${i * 0.08}s` }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 13,
                background: h.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, marginBottom: 14,
                boxShadow: `0 6px 20px ${h.glow}`,
              }}>{h.icon}</div>
              <div style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: 26, fontWeight: 800,
                background: h.gradient,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                marginBottom: 2,
              }}>{h.value}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{h.label}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.44)', lineHeight: 1.6 }}>{h.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-main-grid { grid-template-columns: 1fr !important; }
          .impact-grid { grid-template-columns: repeat(2,1fr) !important; }
          #poster-row { flex-direction: column !important; }
          #poster-row > div:first-child { width: 100% !important; }
        }
        @media (max-width: 480px) {
          .impact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
