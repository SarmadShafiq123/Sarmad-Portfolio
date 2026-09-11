import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const titleRef   = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      )

      // Content paragraphs stagger
      gsap.fromTo(
        contentRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight: '80vh',
        background: '#0F172A',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Section Title */}
        <h2
          ref={titleRef}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#E2E8F0',
            marginBottom: '3rem',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          About Me
          <span style={{ color: '#00D9C0' }}>.</span>
        </h2>

        {/* Content */}
        <div
          ref={contentRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#94A3B8',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            I'm a final-semester <strong style={{ color: '#E2E8F0' }}>BSCS student</strong> at the{' '}
            <strong style={{ color: '#E2E8F0' }}>University of Central Punjab</strong> (graduating August 2026)
            and a self-employed developer based in <strong style={{ color: '#E2E8F0' }}>Gujranwala, Pakistan</strong>, working across both full-stack web (MERN) and native desktop applications (Electron + React).
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#94A3B8',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            I build real, deployed products — not tutorials — from web platforms to standalone desktop tools with local data processing and packaging (.exe builds). I care about <strong style={{ color: '#E2E8F0' }}>clean architecture</strong>,{' '}
            <strong style={{ color: '#E2E8F0' }}>shipping fast</strong>, and iterating with{' '}
            <strong style={{ color: '#00D9C0' }}>AI-assisted tooling</strong> (Kiro, Claude, Antigravity)
            without losing code quality control.
          </p>

          {/* Accent bar */}
          <div
            style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, #00D9C0, transparent)',
              margin: '2rem auto 0',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>
    </section>
  )
}
