import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EXPERIENCE } from '../../data/index.js'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef(null)
  const titleRef   = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        cardsRef.current.children,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        minHeight: '75vh',
        background: '#0A0F1E',
        padding: '6rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <h2
          ref={titleRef}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#E2E8F0',
            marginBottom: '0.75rem',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          Work Experience
          <span style={{ color: '#00D9C0' }}>.</span>
        </h2>

        <p
          ref={subtitleRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            color: '#64748B',
            textAlign: 'center',
            marginBottom: '4rem',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}
        >
          Professional Journey
        </p>

        <div
          ref={cardsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(0,217,192,0.03), rgba(15,23,42,0.5))',
                border: '1px solid rgba(0,217,192,0.15)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,217,192,0.4)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,217,192,0.1)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,217,192,0.15)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '2rem',
                  background: '#00D9C0',
                  color: '#0A0F1E',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.3rem 0.8rem',
                  borderRadius: '6px',
                  letterSpacing: '0.05em',
                }}
              >
                {exp.id}
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                  color: '#E2E8F0',
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {exp.company}
              </h3>

              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: '#00D9C0',
                  marginBottom: '0.5rem',
                }}
              >
                {exp.role}
              </h4>

              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  color: '#64748B',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                }}
              >
                {exp.period}
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  paddingLeft: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {exp.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: '#94A3B8',
                      paddingLeft: '1.5rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.6rem',
                        width: '6px',
                        height: '6px',
                        background: '#00D9C0',
                        borderRadius: '50%',
                      }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
