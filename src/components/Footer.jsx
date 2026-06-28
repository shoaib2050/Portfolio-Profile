import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '44px 28px 36px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(124,106,240,0.6), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        {/* Logo */}
        <div style={{
          width: 44, height: 44, borderRadius: 13,
          background: 'linear-gradient(135deg,#7c6af0,#ec80f5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 900, fontSize: 20, color: '#fff',
          margin: '0 auto 14px',
          boxShadow: '0 6px 24px rgba(124,106,240,0.4)',
        }}>S</div>

        <div style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontSize: 18, fontWeight: 800,
          background: 'linear-gradient(135deg,#a78bfa,#ec80f5)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          marginBottom: 4,
        }}>Sohaib M. Saleem</div>

        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 22 }}>
          Senior iOS Engineer · Swift · SwiftUI · UIKit · Lahore, Pakistan
        </p>

        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sohaib-m-saleem-895314214/' },
            { label: 'Email',    href: 'mailto:shoaib2000saleem@gmail.com' },
            { label: 'WhatsApp', href: 'https://wa.me/923366359992' },
          ].map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.38)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#a78bfa'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.38)'}
            >{l.label}</a>
          ))}
        </div>

        {/* Availability strip */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 14px', borderRadius: 100,
          background: 'rgba(74,222,128,0.07)',
          border: '1px solid rgba(74,222,128,0.18)',
          fontSize: 12, fontWeight: 600, color: 'rgba(74,222,128,0.8)',
          marginBottom: 22,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
          Open to opportunities worldwide
        </div>

        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)' }}>
          © {new Date().getFullYear()} Sohaib M. Saleem · Built with React & ♥
        </p>
      </div>
    </footer>
  )
}
