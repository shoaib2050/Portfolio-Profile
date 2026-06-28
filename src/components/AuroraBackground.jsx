import React from 'react'

/**
 * Full-page aurora gradient background.
 * Fixed position so it persists while scrolling.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Orb 1 — large purple top-left */}
      <div style={{
        position: 'absolute',
        top: '-10%', left: '-5%',
        width: 700, height: 700,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,106,240,0.22) 0%, transparent 68%)',
        filter: 'blur(60px)',
        animation: 'aurora-move-1 18s ease-in-out infinite',
      }} />

      {/* Orb 2 — pink/accent mid-right */}
      <div style={{
        position: 'absolute',
        top: '25%', right: '-8%',
        width: 550, height: 550,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,128,245,0.18) 0%, transparent 68%)',
        filter: 'blur(70px)',
        animation: 'aurora-move-2 22s ease-in-out infinite',
      }} />

      {/* Orb 3 — teal bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: '5%', left: '10%',
        width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 68%)',
        filter: 'blur(80px)',
        animation: 'aurora-move-3 26s ease-in-out infinite',
      }} />

      {/* Orb 4 — deep indigo centre */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '40%',
        width: 800, height: 800,
        transform: 'translate(-50%,-50%)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(88,28,235,0.08) 0%, transparent 60%)',
        filter: 'blur(100px)',
        animation: 'aurora-move-1 30s ease-in-out infinite reverse',
      }} />

      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
        opacity: 0.4,
      }} />
    </div>
  )
}
