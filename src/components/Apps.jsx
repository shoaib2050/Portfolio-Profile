import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ======================================================
// ADD YOUR APP STORE LINKS HERE — replace '' with URL
// ======================================================
const APPS = [
  {
    name: 'OrNet VPN',
    tagline: 'Secure · Fast · 80K+ Users',
    desc: 'Production VPN app serving 80K+ users with advanced networking architecture, secure data communication, and optimised connection stability.',
    icon: '🔒',
    gradient: 'linear-gradient(135deg,#7c6af0,#ec80f5)',
    glow: 'rgba(124,106,240,0.3)',
    tags: ['Swift','UIKit','VPN','Networking'],
    company: 'PentaLoop', users: '80K+', status: 'live',
    appStoreUrl: 'https://apps.apple.com/us/app/ornet-vpn/id1664418937',
  },
  {
    name: 'AI Phone Cleaner',
    tagline: 'Clean Storage · Speed Up iPhone',
    desc: 'AI-powered media cleaner that scans, analyses, and removes duplicate photos, large files, and junk — freeing up storage with a 70% faster processing pipeline.',
    icon: '🧹',
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    glow: 'rgba(240,147,251,0.3)',
    tags: ['Swift','Core ML','SwiftUI','Performance'],
    company: 'PentaLoop', users: '1M+', status: 'live',
    appStoreUrl: 'https://apps.apple.com/us/app/ai-phone-cleaner-clean-storage/id6464309998',
  },
  {
    name: 'Photo Vault — Lock It',
    tagline: 'Private Media Locker · OrNet',
    desc: 'Secure private photo and video vault with PIN/Face ID protection, hidden album management, and encrypted local storage for sensitive media.',
    icon: '🔐',
    gradient: 'linear-gradient(135deg,#fbbf24,#f97316)',
    glow: 'rgba(251,191,36,0.3)',
    tags: ['Swift','Face ID','Encryption','UIKit'],
    company: 'PentaLoop', users: 'Live', status: 'live',
    appStoreUrl: 'https://apps.apple.com/us/app/photo-vault-ornet-lock-it/id6462699208',
  },
  {
    name: 'Palarum — Fall Prevention',
    tagline: 'IoT Healthcare · 500+ Hospitals',
    desc: 'iOS app for Palarum deployed across 500+ hospitals. Real-time BLE patient monitoring with instant fall alerts and hardware integration.',
    icon: '🏥',
    gradient: 'linear-gradient(135deg,#2dd4bf,#38bdf8)',
    glow: 'rgba(45,212,191,0.3)',
    tags: ['Swift','BLE','IoT','Core Data'],
    company: 'MikroStarTech', users: '500+ Hospitals', status: 'internal',
    appStoreUrl: '',
  },
  {
    name: 'School Safety & Emergency Alert',
    tagline: 'Instant Emergency Response',
    desc: 'Safety app enabling staff to trigger instant emergency calls to designated contacts when threats are detected — zero-delay alert delivery.',
    icon: '🚨',
    gradient: 'linear-gradient(135deg,#4ade80,#22d3ee)',
    glow: 'rgba(74,222,128,0.3)',
    tags: ['Swift','UIKit','Push Notifications'],
    company: 'MikroStarTech', users: 'Enterprise', status: 'internal',
    appStoreUrl: '',
  },
  {
    name: '15+ More Apps',
    tagline: '20+ Total on the App Store',
    desc: '20+ production apps shipped across utility, consumer, and enterprise — spanning multiple categories and millions of combined installs.',
    icon: '📱',
    gradient: 'linear-gradient(135deg,#a78bfa,#ec80f5)',
    glow: 'rgba(167,139,250,0.3)',
    tags: ['Swift','SwiftUI','20+ Apps'],
    company: 'Various', users: '1M+ Combined', status: 'multiple',
    appStoreUrl: '',
  },
]

const STATUS_BADGE = {
  live:     { label: '● Live',     bg: 'rgba(74,222,128,0.1)',  color: '#4ade80',  border: 'rgba(74,222,128,0.25)' },
  internal: { label: '🔒 Internal', bg: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: 'rgba(251,191,36,0.25)' },
  multiple: { label: '📦 20+ Apps', bg: 'rgba(167,139,250,0.1)',color: '#c4b5fd', border: 'rgba(167,139,250,0.25)' },
}

function StoreBtn({ url, label, icon }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 5,
    padding: '7px 13px', borderRadius: 9,
    fontSize: 11, fontWeight: 700,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  }
  if (url) return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      style={{ ...base, color: '#fff', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >{icon} {label}</a>
  )
  return (
    <span style={{ ...base, color: 'rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.1)' }}>
      {icon} Coming Soon
    </span>
  )
}

export default function Apps() {
  const sectionRef = useScrollReveal()

  return (
    <section id="apps" className="section" ref={sectionRef} style={{ background: 'rgba(0,0,0,0.1)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="section-tag reveal" style={{ display: 'inline-flex' }}>📱 App Portfolio</div>
          <h2 className="section-title reveal d1">
            20+ Apps Shipped to the <span className="gradient-text">App Store</span>
          </h2>
          <p className="section-subtitle reveal d2" style={{ margin: '0 auto' }}>
            From healthcare IoT to VPN security — production apps serving millions across multiple industries.
          </p>
        </div>

        {/* ── Featured Project: TattooAI ── */}
        <div className="reveal" style={{ marginBottom: 28 }}>
          <div style={{
            borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(124,106,240,0.1) 50%, rgba(45,212,191,0.08) 100%)',
            border: '1px solid rgba(236,72,153,0.28)',
            padding: '32px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Background glow blobs */}
            <div style={{
              position: 'absolute', top: -60, right: -60, width: 300, height: 300,
              background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -40, left: -40, width: 250, height: 250,
              background: 'radial-gradient(circle, rgba(124,106,240,0.12) 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Top row: icon + badges */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  {/* App icon */}
                  <div style={{
                    width: 72, height: 72, borderRadius: 20, flexShrink: 0,
                    background: 'linear-gradient(135deg, #ec4899, #a855f7, #2dd4bf)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 34,
                    boxShadow: '0 10px 32px rgba(236,72,153,0.45)',
                  }}>🎨</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6,
                        background: 'rgba(236,72,153,0.15)', color: '#f472b6',
                        border: '1px solid rgba(236,72,153,0.35)',
                      }}>✦ Featured Project</span>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6,
                        background: 'rgba(74,222,128,0.12)', color: '#4ade80',
                        border: '1px solid rgba(74,222,128,0.28)',
                      }}>● Live on App Store</span>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6,
                        background: 'rgba(45,212,191,0.1)', color: '#2dd4bf',
                        border: '1px solid rgba(45,212,191,0.25)',
                      }}>🤖 AI · AR</span>
                    </div>
                    <h3 style={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#fff',
                      lineHeight: 1.1,
                    }}>TattooAI</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontWeight: 500, marginTop: 2 }}>
                      AI Tattoo Generator & AR Try-On · iOS 16+
                    </p>
                  </div>
                </div>

                {/* App Store button */}
                <StoreBtn url={'https://apps.apple.com/us/app/tattoo-generator-ink-master/id6748456922'} label="App Store" icon="🍎" />
              </div>

              {/* Description */}
              <p style={{
                fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8,
                marginBottom: 24, maxWidth: 780,
              }}>
                A native iOS app that turns text prompts into studio-quality tattoo artwork in seconds using
                multiple AI diffusion models (Flux Dev, Flux Schnell, Imagine Turbo). Users pick a style,
                customise and edit the design, then <strong style={{ color: '#fff' }}>visualise it on their
                body in real time with ARKit</strong> — bridging the gap between idea and ink.
              </p>

              {/* Feature grid */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 24,
              }} className="tattoo-features">
                {[
                  { icon: '🤖', title: 'AI Generation', desc: 'Flux Dev · Flux Schnell · Imagine Turbo via serverless Cloud Run backend' },
                  { icon: '🪞', title: 'AR Try-On', desc: 'Real-time preview on skin with ARKit + SceneKit + person segmentation' },
                  { icon: '🎨', title: '30+ Art Styles', desc: 'Realism, Japanese, Tribal, Chicano, Dotwork, Watercolor, 8-bit & more' },
                  { icon: '✏️', title: 'Design Editor', desc: 'Zoom, rotate, reposition, and erase/mask brush to fine-tune designs' },
                  { icon: '💰', title: 'Subscriptions', desc: 'Daily/monthly/yearly plans, free-trial tiers, promo codes & AdMob' },
                  { icon: '☁️', title: 'Cloud Sync', desc: 'Firebase Auth + Firestore + Storage, Supabase, and Core Data' },
                ].map((f, i) => (
                  <div key={i} style={{
                    padding: '14px 16px', borderRadius: 14,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <div style={{ fontSize: 18, marginBottom: 6 }}>{f.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.42)', lineHeight: 1.55 }}>{f.desc}</div>
                  </div>
                ))}
              </div>

              {/* Tech stack tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {['Swift','UIKit','Storyboards','ARKit','SceneKit','Core Image','Core Data',
                  'Firebase','Supabase','Cloud Run','Flux AI','StoreKit','AdMob'].map((t, i) => (
                  <span key={i} style={{
                    fontSize: 11, fontWeight: 700, padding: '4px 11px', borderRadius: 7,
                    background: 'rgba(236,72,153,0.08)', color: '#f9a8d4',
                    border: '1px solid rgba(236,72,153,0.2)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Featured Project: AdVanish ── */}
        <div className="reveal" style={{ marginBottom: 28 }}>
          <div style={{
            borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(56,189,248,0.09) 0%, rgba(124,106,240,0.09) 50%, rgba(45,212,191,0.07) 100%)',
            border: '1px solid rgba(56,189,248,0.28)',
            padding: '32px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Background glow blobs */}
            <div style={{
              position: 'absolute', top: -60, right: -60, width: 300, height: 300,
              background: 'radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -40, left: -40, width: 250, height: 250,
              background: 'radial-gradient(circle, rgba(124,106,240,0.1) 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Top row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: 20, flexShrink: 0,
                    background: 'linear-gradient(135deg, #0ea5e9, #6366f1, #2dd4bf)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 34,
                    boxShadow: '0 10px 32px rgba(56,189,248,0.4)',
                  }}>🛡️</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6,
                        background: 'rgba(56,189,248,0.14)', color: '#38bdf8',
                        border: '1px solid rgba(56,189,248,0.32)',
                      }}>✦ Featured Project</span>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6,
                        background: 'rgba(74,222,128,0.12)', color: '#4ade80',
                        border: '1px solid rgba(74,222,128,0.28)',
                      }}>● Live on App Store</span>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6,
                        background: 'rgba(124,106,240,0.12)', color: '#a78bfa',
                        border: '1px solid rgba(124,106,240,0.25)',
                      }}>🔒 Privacy · Safari</span>
                    </div>
                    <h3 style={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#fff', lineHeight: 1.1,
                    }}>AdVanish</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontWeight: 500, marginTop: 2 }}>
                      iOS Ad Blocker & Private Browser · iOS 16+
                    </p>
                  </div>
                </div>
                <StoreBtn url={'https://apps.apple.com/us/app/ornet-shield-ad-blocker/id6752376175'} label="App Store" icon="🍎" />
              </div>

              {/* Description */}
              <p style={{
                fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8,
                marginBottom: 24, maxWidth: 780,
              }}>
                A privacy-first iOS app that blocks ads and trackers system-wide through{' '}
                <strong style={{ color: '#fff' }}>6 Safari content-blocker extensions</strong>, a native
                ad-free private browser with multi-tab management, and DNS-level filtering — all backed by
                a freemium StoreKit subscription model with remote-configurable A/B-tested paywalls.
              </p>

              {/* Feature grid */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 24,
              }} className="advanish-features">
                {[
                  { icon: '🚫', title: 'System-wide Blocking', desc: '6 categorized Safari extensions — General, Privacy, Security, Annoyances, Custom & more' },
                  { icon: '🌐', title: 'Private Browser', desc: 'WKWebView browser with multi-tab, bookmarks, history, download manager & draggable nav' },
                  { icon: '🔒', title: 'DNS Protection', desc: 'Network-level blocking of malware, phishing, and tracker domains' },
                  { icon: '⚙️', title: 'Shared Filter Engine', desc: 'Safari extensions and in-app browser share rule sets via App Group container' },
                  { icon: '💰', title: 'Paywall & IAP', desc: 'StoreKit monthly/yearly plans, free-trial, restore purchases & Firebase A/B testing' },
                  { icon: '✨', title: 'Polished Onboarding', desc: 'SwiftUI animated full-screen flow with in-context Safari extension tutorial' },
                ].map((f, i) => (
                  <div key={i} style={{
                    padding: '14px 16px', borderRadius: 14,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <div style={{ fontSize: 18, marginBottom: 6 }}>{f.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.42)', lineHeight: 1.55 }}>{f.desc}</div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {['Swift','UIKit','SwiftUI','WKWebView','SafariServices','Network Extension',
                  'StoreKit','Firebase','PostHog','Lottie','App Group','WKContentRuleList','Coordinator Pattern'].map((t, i) => (
                  <span key={i} style={{
                    fontSize: 11, fontWeight: 700, padding: '4px 11px', borderRadius: 7,
                    background: 'rgba(56,189,248,0.08)', color: '#7dd3fc',
                    border: '1px solid rgba(56,189,248,0.2)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }} className="apps-grid">
          {APPS.map((app, i) => {
            const badge = STATUS_BADGE[app.status]
            return (
              <div
                key={i}
                className="glass-card reveal"
                style={{ padding: '26px 22px', display: 'flex', flexDirection: 'column', transitionDelay: `${i * 0.06}s` }}
              >
                {/* Icon */}
                <div style={{
                  width: 62, height: 62, borderRadius: 18,
                  background: app.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, marginBottom: 16,
                  boxShadow: `0 8px 24px ${app.glow}`,
                }}>{app.icon}</div>

                {/* Status + company */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9, flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 6,
                    background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`,
                  }}>{badge.label}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{app.company}</span>
                </div>

                {/* Name */}
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{app.name}</h3>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', fontWeight: 600, marginBottom: 11 }}>{app.tagline}</p>

                {/* Desc */}
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.52)', lineHeight: 1.7, marginBottom: 14, flex: 1 }}>
                  {app.desc}
                </p>

                {/* Users */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '4px 10px', borderRadius: 8, width: 'fit-content',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                  marginBottom: 14,
                }}>👥 {app.users}</div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {app.tags.map((t, j) => (
                    <span key={j} style={{
                      fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 6,
                      background: 'rgba(124,106,240,0.1)', color: '#c4b5fd',
                      border: '1px solid rgba(124,106,240,0.18)',
                    }}>{t}</span>
                  ))}
                </div>

                {/* Store buttons */}
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                  <StoreBtn url={app.appStoreUrl} label="App Store" icon="🍎" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="reveal" style={{
          marginTop: 44, padding: '18px 22px', borderRadius: 14,
          background: 'rgba(124,106,240,0.07)',
          border: '1px solid rgba(124,106,240,0.15)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
            📌 App Store links will be added soon. For a full walkthrough, reach out directly.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .apps-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px)  { .apps-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 760px)  { .tattoo-features, .advanish-features { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { .tattoo-features, .advanish-features { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
