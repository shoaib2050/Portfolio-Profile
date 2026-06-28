import React, { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CATEGORIES = [
  {
    title: 'Core iOS',
    icon: '🍎',
    gradient: 'linear-gradient(135deg, #FF6B35, #f7931e)',
    glow: 'rgba(255,107,53,0.35)',
    skills: [
      { name: 'Swift',         pct: 98 },
      { name: 'SwiftUI',       pct: 95 },
      { name: 'UIKit',         pct: 95 },
      { name: 'iOS SDK',       pct: 95 },
      { name: 'Objective-C',   pct: 68 },
    ],
  },
  {
    title: 'Architecture',
    icon: '🏗️',
    gradient: 'linear-gradient(135deg, #7c6af0, #ec80f5)',
    glow: 'rgba(124,106,240,0.35)',
    skills: [
      { name: 'MVVM',             pct: 98 },
      { name: 'Clean Architecture',pct: 90 },
      { name: 'Combine',          pct: 86 },
      { name: 'Async / Await',    pct: 90 },
      { name: 'MVC',              pct: 92 },
    ],
  },
  {
    title: 'Networking & Systems',
    icon: '🔒',
    gradient: 'linear-gradient(135deg, #2dd4bf, #38bdf8)',
    glow: 'rgba(45,212,191,0.35)',
    skills: [
      { name: 'VPN Networking',  pct: 92 },
      { name: 'REST APIs',        pct: 96 },
      { name: 'BLE / Bluetooth',  pct: 88 },
      { name: 'Core Data',        pct: 88 },
      { name: 'WebSocket',        pct: 80 },
    ],
  },
  {
    title: 'Quality & Delivery',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #4ade80, #22d3ee)',
    glow: 'rgba(74,222,128,0.35)',
    skills: [
      { name: 'XCTest / TDD',            pct: 88 },
      { name: 'Performance Optimization', pct: 93 },
      { name: 'App Store Deployment',     pct: 98 },
      { name: 'Core ML',                  pct: 80 },
      { name: 'Agile / Scrum',            pct: 90 },
    ],
  },
]

const BADGES = [
  'Swift','SwiftUI','UIKit','MVVM','Clean Architecture','VPN','BLE','Core ML',
  'XCTest','Combine','Core Data','REST APIs','WebSocket','Flutter','Git','Xcode',
  'CocoaPods','SPM','Fastlane','TestFlight','App Store','Agile','Scrum',
]

function SkillBar({ name, pct, gradient, animate }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.78)' }}>{name}</span>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>{pct}%</span>
      </div>
      <div style={{
        height: 6, borderRadius: 4,
        background: 'rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: animate ? `${pct}%` : '0%',
          background: gradient,
          borderRadius: 4,
          transition: animate ? 'width 1.1s cubic-bezier(0.22,1,0.36,1)' : 'none',
          boxShadow: animate ? `0 0 12px rgba(124,106,240,0.4)` : 'none',
        }} />
      </div>
    </div>
  )
}

function CategoryCard({ cat, delay }) {
  const ref  = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="glass-card reveal"
      style={{
        padding: '28px 24px',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 24 }}>
        <div style={{
          width: 46, height: 46, borderRadius: 13,
          background: cat.gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22,
          boxShadow: `0 6px 20px ${cat.glow}`,
          flexShrink: 0,
        }}>{cat.icon}</div>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{cat.title}</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        {cat.skills.map((s, i) => (
          <SkillBar
            key={i}
            name={s.name}
            pct={s.pct}
            gradient={cat.gradient}
            animate={visible}
          />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useScrollReveal()

  return (
    <section id="skills" className="section" ref={sectionRef} style={{ background: 'rgba(0,0,0,0.12)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="section-tag reveal" style={{ display: 'inline-flex' }}>
            ⚡ Technical Skills
          </div>
          <h2 className="section-title reveal d1">
            Built for <span className="gradient-text">Production</span> at Scale
          </h2>
          <p className="section-subtitle reveal d2" style={{ margin: '0 auto' }}>
            5+ years of hands-on expertise shipping mission-critical iOS apps across healthcare,
            IoT, VPN, and consumer utility.
          </p>
        </div>

        {/* Category grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: 22,
            marginBottom: 48,
          }}
          className="skills-cat-grid"
        >
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={i} cat={cat} delay={i * 0.08} />
          ))}
        </div>

        {/* Badge cloud */}
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.28)',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 18,
          }}>
            Technologies & Tools
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, justifyContent: 'center' }}>
            {BADGES.map((b, i) => (
              <span
                key={i}
                style={{
                  padding: '6px 14px', borderRadius: 8,
                  fontSize: 12, fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.2s ease', cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(124,106,240,0.15)'
                  e.currentTarget.style.borderColor = 'rgba(124,106,240,0.38)'
                  e.currentTarget.style.color = '#c4b5fd'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >{b}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) { .skills-cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
