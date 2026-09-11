import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { NAV_LINKS } from '../../data/index.js'

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [activeSection, setActive]    = useState('home')
  const [menuOpen, setMenuOpen]       = useState(false)
  const navRef                        = useRef(null)

  // ── Entrance animation ──────────────────────────────────────────────────
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  // ── Scroll: backdrop blur + active section tracking ─────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = NAV_LINKS.map((l) => l.href.slice(1))
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Smooth-scroll click ─────────────────────────────────────────────────
  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s',
        background: scrolled
          ? 'rgba(10, 15, 30, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,217,192,0.1)' : '1px solid transparent',
      }}
    >
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#E2E8F0',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#00D9C0' }}>S</span>armad<span style={{ color: '#00D9C0' }}>.</span>
          </a>

          {/* ── Desktop links ── */}
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '0.25rem',
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1)
              const isActive = activeSection === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      padding: '0.4rem 0.75rem',
                      borderRadius: '6px',
                      transition: 'color 0.2s, background 0.2s',
                      color: isActive ? '#00D9C0' : '#94A3B8',
                      background: isActive ? 'rgba(0,217,192,0.08)' : 'transparent',
                    }}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* ── Mobile hamburger ── */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '2px',
                    background: '#00D9C0',
                    borderRadius: '2px',
                    transition: 'all 0.3s',
                    transform:
                      menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                      menuOpen && i === 1 ? 'scaleX(0)' :
                      menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' :
                      'none',
                  }}
                />
              ))}
            </div>
          </button>
        </div>

        {/* ── Mobile dropdown ── */}
        {menuOpen && (
          <div
            style={{
              borderTop: '1px solid rgba(0,217,192,0.1)',
              paddingBottom: '1rem',
              background: 'rgba(10,15,30,0.97)',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: activeSection === href.slice(1) ? '#00D9C0' : '#94A3B8',
                  borderLeft: activeSection === href.slice(1) ? '2px solid #00D9C0' : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
