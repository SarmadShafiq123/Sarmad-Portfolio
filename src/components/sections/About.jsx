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
  I'm a Full Stack Developer and a recent graduate of{' '}
  <strong style={{ color: '#E2E8F0' }}>
    the University of Central Punjab
  </strong>{' '}
  (August 2026), based in{' '}
  <strong style={{ color: '#E2E8F0' }}>Gujranwala, Pakistan</strong>.
  I work across full-stack web development using the MERN stack and
  native desktop application development with Electron and React.
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
            I build MERN-stack web apps and Electron desktop tools - everything from full e-commerce platforms to Windows-packaged scrapers and business automation utilities. I use AI-assisted tooling like <strong style={{ color: '#00D9C0' }}>Kiro</strong>, <strong style={{ color: '#00D9C0' }}>Claude</strong> and <strong style={{ color: '#00D9C0' }}> Antigravity</strong>  to move fast while keeping code maintainable and production-ready.
          </p>

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
