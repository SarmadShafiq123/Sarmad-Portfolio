import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Certifications() {
  const sectionRef = useRef(null)
  const titleRef   = useRef(null)
  const messageRef = useRef(null)

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
        messageRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: messageRef.current,
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="certifications"
      ref={sectionRef}
      style={{
        minHeight: '50vh',
        background: '#0F172A',
        padding: '6rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Title */}
        <h2
          ref={titleRef}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#E2E8F0',
            marginBottom: '2rem',
            letterSpacing: '-0.02em',
          }}
        >
          Certifications
          <span style={{ color: '#00D9C0' }}>.</span>
        </h2>

        {/* Placeholder message */}
        <div
          ref={messageRef}
          style={{
            background: 'linear-gradient(135deg, rgba(0,217,192,0.03), rgba(15,23,42,0.5))',
            border: '1px dashed rgba(0,217,192,0.2)',
            borderRadius: '12px',
            padding: '3rem 2rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: '#64748B',
              lineHeight: 1.7,
              marginBottom: '1rem',
            }}
          >
            This section is ready for professional certifications, hackathon achievements, and
            course completions.
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#334155',
              letterSpacing: '0.05em',
            }}
          >
            Coming soon — add your credentials here as you earn them.
          </p>

          {/* Decorative element */}
          <div
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #00D9C0, transparent)',
              margin: '2rem auto 0',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>
    </section>
  )
}
