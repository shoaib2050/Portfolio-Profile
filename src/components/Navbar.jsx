import React, { useState, useEffect } from 'react'

const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Apps',       href: '#apps' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open,     setOpen]       = useState(false)
  const [active,   setActive]     = useState('')

  /* scroll + active-section tracking */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = NAV.map(n => n.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]); break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const glass = scrolled
    ? 'rgba(7,7,26,0.88)'
    : 'transparent'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 28px',
      background: glass,
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70,
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #7c6af0, #ec80f5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800, fontSize: 16, color: '#fff',
            boxShadow: '0 4px 16px rgba(124,106,240,0.5)',
          }}>S</div>
          <div>
            <div style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700, fontSize: 15, color: '#fff', lineHeight: 1.1,
            }}>Sohaib Saleem</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1 }}>
              Senior iOS Engineer
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desk-nav">
          {NAV.map(link => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  padding: '7px 13px', borderRadius: 9,
                  fontSize: 13, fontWeight: 600,
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                  background: isActive ? 'rgba(124,106,240,0.18)' : 'transparent',
                  border: isActive ? '1px solid rgba(124,106,240,0.3)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {link.label}
              </a>
            )
          })}

          <a
            href="mailto:shoaib2000saleem@gmail.com"
            style={{
              marginLeft: 10, padding: '9px 20px', borderRadius: 10,
              fontSize: 13, fontWeight: 700, color: '#fff',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #7c6af0, #ec80f5)',
              boxShadow: '0 4px 18px rgba(124,106,240,0.45)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,106,240,0.6)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(124,106,240,0.45)'
            }}
          >
            Hire Me ✦
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mob-btn"
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', fontSize: 22, color: '#fff', padding: 4,
          }}
        >{open ? '✕' : '☰'}</button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: 'rgba(7,7,26,0.97)',
          backdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '12px 0 20px',
        }}>
          {NAV.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '11px 28px',
                fontSize: 15, fontWeight: 500,
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
              }}
            >{link.label}</a>
          ))}
          <div style={{ padding: '10px 28px 0' }}>
            <a
              href="mailto:shoaib2000saleem@gmail.com"
              style={{
                display: 'block', padding: '11px 20px',
                borderRadius: 10, textAlign: 'center',
                fontSize: 14, fontWeight: 700, color: '#fff',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #7c6af0, #ec80f5)',
              }}
            >Hire Me ✦</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desk-nav { display: none !important; }
          .mob-btn  { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
