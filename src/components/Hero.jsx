import React, { useState, useEffect } from 'react'

const STATS = [
  { value: '5+',   label: 'Years Exp.',      icon: '⚡' },
  { value: '20+',  label: 'Apps Shipped',    icon: '📱' },
  { value: '1M+',  label: 'Users Reached',   icon: '🚀' },
  { value: '500+', label: 'Hospitals',        icon: '🏥' },
]

const TECH_PILLS = ['Swift', 'SwiftUI', 'UIKit', 'MVVM', 'BLE', 'VPN', 'Core ML']

export default function Hero() {
  const [photoError, setPhotoError] = useState(false)
  const [pillIndex,  setPillIndex]  = useState(0)

  /* Cycling tech pill in subtitle */
  useEffect(() => {
    const t = setInterval(() => setPillIndex(i => (i + 1) % TECH_PILLS.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* ── Left ── */}
          <div>
            {/* Open-to-work badge */}
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                padding: '6px 16px 6px 10px',
                background: 'rgba(74,222,128,0.08)',
                border: '1px solid rgba(74,222,128,0.22)',
                borderRadius: 100,
                fontSize: 12, fontWeight: 600, color: '#4ade80',
                marginBottom: 32,
                animation: 'fade-in-up 0.6s ease both',
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#4ade80',
                animation: 'pulse-dot 1.8s ease-in-out infinite',
                flexShrink: 0,
              }} />
              Open to Opportunities Worldwide · Visa Sponsorship Welcome
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: 'clamp(42px, 5.5vw, 76px)',
                fontWeight: 900,
                lineHeight: 1.03,
                letterSpacing: '-0.03em',
                marginBottom: 14,
                animation: 'fade-in-up 0.6s ease 0.1s both',
              }}
            >
              Sohaib M.
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #ec80f5 50%, #f472b6 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 4s ease infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Saleem
              </span>
            </h1>

            {/* Subtitle row */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
                fontSize: 'clamp(15px, 2vw, 19px)',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.62)',
                marginBottom: 26,
                animation: 'fade-in-up 0.6s ease 0.2s both',
              }}
            >
              <span>Senior iOS Engineer</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 18 }}>·</span>
              {/* Cycling pill */}
              <span
                key={pillIndex}
                style={{
                  padding: '3px 12px', borderRadius: 100,
                  background: 'rgba(124,106,240,0.15)',
                  border: '1px solid rgba(124,106,240,0.3)',
                  color: '#a78bfa', fontSize: 14, fontWeight: 700,
                  animation: 'fade-in-up 0.35s ease both',
                }}
              >
                {TECH_PILLS[pillIndex]}
              </span>
            </div>

            {/* Summary */}
            <p
              style={{
                fontSize: 16, color: 'rgba(255,255,255,0.52)', lineHeight: 1.85,
                maxWidth: 540, marginBottom: 40,
                animation: 'fade-in-up 0.6s ease 0.3s both',
              }}
            >
              I build and ship iOS products that scale — from greenfield apps to systems serving{' '}
              <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>1M+ users</strong>{' '}
              across utility, IoT, AI, and healthcare. Based in{' '}
              <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Lahore, Pakistan</strong>{' '}
              — open to relocation anywhere with visa sponsorship.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52,
                animation: 'fade-in-up 0.6s ease 0.4s both',
              }}
            >
              <a href="#contact" className="btn btn-primary">
                📬 Get In Touch
              </a>
              <a href="#apps" className="btn btn-secondary">
                📱 View Apps
              </a>
              <a
                href="https://www.linkedin.com/in/sohaib-m-saleem-895314214/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                🔗 LinkedIn
              </a>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
                borderRadius: 18, overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.025)',
                backdropFilter: 'blur(16px)',
                animation: 'fade-in-up 0.6s ease 0.5s both',
              }}
              className="stats-grid"
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: '18px 12px', textAlign: 'center',
                    borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,106,240,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800,
                    background: 'linear-gradient(135deg, #a78bfa, #ec80f5)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text', lineHeight: 1.1, marginBottom: 4,
                  }}>{s.value}</div>
                  <div style={{
                    fontSize: 10, color: 'rgba(255,255,255,0.38)',
                    fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div
            className="hero-photo-wrap"
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              position: 'relative',
              animation: 'fade-in-up 0.7s ease 0.25s both',
            }}
          >
            {/* Outer rotating ring */}
            <div style={{
              position: 'absolute',
              width: 340, height: 340,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #7c6af0, #ec80f5, #2dd4bf, #7c6af0)',
              animation: 'spin-slow 8s linear infinite',
              filter: 'blur(2px)',
            }} />

            {/* Inner gap ring */}
            <div style={{
              position: 'absolute',
              width: 330, height: 330,
              borderRadius: '50%',
              background: '#07071a',
            }} />

            {/* Photo */}
            <div style={{
              width: 310, height: 310,
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
              animation: 'float 6s ease-in-out infinite',
              boxShadow: '0 24px 70px rgba(124,106,240,0.35)',
            }}>
              {!photoError ? (
                <img
                  src="/profile.jpg"
                  alt="Sohaib M. Saleem"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, #7c6af0, #ec80f5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 90,
                }}>👨‍💻</div>
              )}
            </div>

            {/* Floating chip: Swift */}
            <div style={{
              position: 'absolute', top: 16, right: -10, zIndex: 2,
              padding: '8px 15px', borderRadius: 12,
              background: 'rgba(13,13,43,0.85)',
              border: '1px solid rgba(255,107,53,0.4)',
              backdropFilter: 'blur(16px)',
              fontSize: 13, fontWeight: 700, color: '#ff8a65',
              boxShadow: '0 8px 24px rgba(255,107,53,0.25)',
              animation: 'float-sm 4s ease-in-out infinite 0.3s',
            }}>🍎 Swift</div>

            {/* Floating chip: 1M+ Users */}
            <div style={{
              position: 'absolute', bottom: 50, left: -20, zIndex: 2,
              padding: '8px 15px', borderRadius: 12,
              background: 'rgba(13,13,43,0.85)',
              border: '1px solid rgba(124,106,240,0.4)',
              backdropFilter: 'blur(16px)',
              fontSize: 13, fontWeight: 700, color: '#a78bfa',
              boxShadow: '0 8px 24px rgba(124,106,240,0.3)',
              animation: 'float-sm 4s ease-in-out infinite 0.9s',
            }}>🚀 1M+ Users</div>

            {/* Floating chip: Silver Medal */}
            <div style={{
              position: 'absolute', bottom: -4, right: 4, zIndex: 2,
              padding: '8px 15px', borderRadius: 12,
              background: 'rgba(13,13,43,0.85)',
              border: '1px solid rgba(251,191,36,0.4)',
              backdropFilter: 'blur(16px)',
              fontSize: 13, fontWeight: 700, color: '#fbbf24',
              boxShadow: '0 8px 24px rgba(251,191,36,0.25)',
              animation: 'float-sm 4s ease-in-out infinite 1.5s',
            }}>🥈 Silver Medal</div>

            {/* Glow under photo */}
            <div style={{
              position: 'absolute', bottom: -30, left: '50%',
              transform: 'translateX(-50%)',
              width: 200, height: 60,
              background: 'radial-gradient(ellipse, rgba(124,106,240,0.45) 0%, transparent 70%)',
              filter: 'blur(20px)',
              borderRadius: '50%',
            }} />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'float 2.5s ease-in-out infinite',
        opacity: 0.4,
      }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
          Scroll
        </span>
        <div style={{
          width: 22, height: 36, border: '2px solid rgba(255,255,255,0.35)',
          borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div style={{
            width: 3, height: 8, borderRadius: 2,
            background: '#7c6af0',
            animation: 'float 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-photo-wrap { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
