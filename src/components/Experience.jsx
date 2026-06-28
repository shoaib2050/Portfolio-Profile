import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const JOBS = [
  {
    company: 'PentaLoop',
    role: 'Senior Software Engineer',
    period: 'Oct 2024 – Present',
    duration: '1 yr 9 mos',
    location: 'Lahore, Pakistan',
    icon: '🏢',
    gradient: 'linear-gradient(135deg, #7c6af0, #ec80f5)',
    glow: 'rgba(124,106,240,0.4)',
    current: true,
    bullets: [
      'Designed, developed, and shipped multiple production iOS apps using Swift, SwiftUI, and UIKit.',
      'Implemented advanced VPN networking solutions improving connection reliability for 80K+ users.',
      'Cut image-processing time by 70% through pipeline optimization and Core ML integration.',
      'Led R&D initiatives covering networking architecture, VPN systems, and performance strategies.',
      'Mentored junior engineers through code reviews, architecture discussions, and technical guidance.',
      'Collaborated with PMs, designers, and backend teams to deliver scalable user-centric apps.',
    ],
    tags: ['Swift', 'SwiftUI', 'UIKit', 'VPN', 'MVVM', 'Performance'],
  },
  {
    company: 'PentaLoop',
    role: 'Software Engineer',
    period: 'Jul 2023 – Oct 2024',
    duration: '1 yr 4 mos',
    location: 'Lahore, Pakistan',
    icon: '💼',
    gradient: 'linear-gradient(135deg, #a78bfa, #7c6af0)',
    glow: 'rgba(167,139,250,0.35)',
    current: false,
    bullets: [
      'Contributed to production iOS apps with Swift and UIKit, focusing on scalable architecture.',
      'Worked on networking and API integration ensuring reliable data communication.',
      'Participated in code reviews and architecture discussions within the engineering team.',
    ],
    tags: ['Swift', 'UIKit', 'REST APIs', 'Clean Architecture'],
  },
  {
    company: 'MikroStarTech (SMC-Pvt.) Ltd.',
    role: 'Software Engineer',
    period: 'Jun 2022 – Jul 2023',
    duration: '1 yr 2 mos',
    location: 'Lahore, Pakistan',
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #2dd4bf, #38bdf8)',
    glow: 'rgba(45,212,191,0.35)',
    current: false,
    bullets: [
      'Built Palarum iOS app — a fall-prevention IoT system deployed in 500+ hospitals, improving real-time patient monitoring.',
      'Developed a hardware QA app for Palarum to validate BLE device integration and reduce debugging time.',
      'Created a school safety emergency-response app enabling instant alerts to designated contacts.',
      'Stack: Swift, UIKit, Core Data, BLE, REST APIs, real-time push notifications.',
    ],
    tags: ['Swift', 'BLE', 'UIKit', 'Core Data', 'IoT', 'Healthcare'],
  },
  {
    company: 'DexterSol',
    role: 'Trainee Software Engineer',
    period: 'Jun 2021 – Feb 2022',
    duration: '9 mos',
    location: 'Pakistan',
    icon: '🌱',
    gradient: 'linear-gradient(135deg, #4ade80, #22d3ee)',
    glow: 'rgba(74,222,128,0.3)',
    current: false,
    bullets: [
      'Learned Swift and Flutter for native and cross-platform mobile development.',
      'Built foundational expertise in iOS architecture patterns and app lifecycle.',
    ],
    tags: ['Swift', 'Flutter', 'iOS'],
  },
  {
    company: 'SVC Short Course Institute',
    role: 'Front-End Web Dev Instructor',
    period: 'May 2021 – Aug 2021',
    duration: '4 mos',
    location: 'DG Khan, Punjab',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    glow: 'rgba(240,147,251,0.3)',
    current: false,
    bullets: [
      'Instructed students in HTML, CSS, Bootstrap, and JavaScript.',
      'Authored blog content for WordPress websites as part of teaching responsibilities.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
]

export default function Experience() {
  const [open, setOpen] = useState(0)
  const sectionRef = useScrollReveal()

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div className="section-tag reveal">💼 Work Experience</div>
          <h2 className="section-title reveal d1">
            3+ Years Shipping <span className="gradient-text">Production iOS</span>
          </h2>
          <p className="section-subtitle reveal d2">
            From healthcare IoT to VPN networking — building apps that matter at scale.
          </p>
        </div>

        {/* Summary chips */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 44, flexWrap: 'wrap' }} className="reveal d3">
          {[
            { label: '3 yrs', sub: 'at PentaLoop', g: 'linear-gradient(135deg,#7c6af0,#ec80f5)' },
            { label: '1.2 yrs', sub: 'at MikroStarTech', g: 'linear-gradient(135deg,#2dd4bf,#38bdf8)' },
            { label: '5+ yrs', sub: 'Total iOS', g: 'linear-gradient(135deg,#f093fb,#f5576c)' },
          ].map((c,i) => (
            <div key={i} style={{
              padding: '10px 18px', borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <span style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: 20, fontWeight: 800,
                background: c.g,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>{c.label}</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', marginLeft: 6 }}>{c.sub}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 23, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(to bottom, rgba(124,106,240,0.6), rgba(236,128,245,0.2), transparent)',
            borderRadius: 2,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingLeft: 56 }}>
            {JOBS.map((job, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.07}s`, position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: -44, top: 22,
                  width: 20, height: 20, borderRadius: '50%',
                  background: job.gradient,
                  boxShadow: `0 0 14px ${job.glow}`,
                  border: '3px solid #07071a',
                  zIndex: 1,
                }} />

                {/* Card */}
                <div
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    borderRadius: 18,
                    background: open === i ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.028)',
                    border: open === i ? '1px solid rgba(124,106,240,0.35)' : '1px solid rgba(255,255,255,0.07)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    if (open !== i) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                  onMouseLeave={e => {
                    if (open !== i) e.currentTarget.style.background = 'rgba(255,255,255,0.028)'
                  }}
                >
                  {/* Row */}
                  <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 13,
                      background: job.gradient,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, flexShrink: 0,
                      boxShadow: `0 4px 16px ${job.glow}`,
                    }}>{job.icon}</div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{job.role}</span>
                        {job.current && (
                          <span style={{
                            fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 6,
                            background: 'rgba(74,222,128,0.14)', color: '#4ade80',
                            border: '1px solid rgba(74,222,128,0.28)',
                          }}>● NOW</span>
                        )}
                      </div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>
                        {job.company} · {job.location}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{job.period}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', marginTop: 2 }}>{job.duration}</div>
                    </div>

                    <div style={{
                      fontSize: 14, color: 'rgba(255,255,255,0.3)', marginLeft: 4,
                      transform: open === i ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                    }}>▾</div>
                  </div>

                  {/* Expanded */}
                  {open === i && (
                    <div style={{ padding: '0 24px 22px', animation: 'fade-in-up 0.3s ease both' }}>
                      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 18 }} />
                      <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 9 }}>
                        {job.bullets.map((b, j) => (
                          <li key={j} style={{ fontSize: 13, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75 }}>{b}</li>
                        ))}
                      </ul>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 18 }}>
                        {job.tags.map((t, j) => (
                          <span key={j} style={{
                            fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 6,
                            background: 'rgba(124,106,240,0.1)', color: '#c4b5fd',
                            border: '1px solid rgba(124,106,240,0.2)',
                          }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
