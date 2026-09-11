import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '../../data/index.js'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef  = useRef(null)
  const titleRef    = useRef(null)
  const subtitleRef = useRef(null)
  const gridRef     = useRef(null)

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
        gridRef.current.children,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        minHeight: '90vh',
        background: '#0F172A',
        padding: '6rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
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
            marginBottom: '0.75rem',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          Projects Showcase
          <span style={{ color: '#00D9C0' }}>.</span>
        </h2>

        {/* Subtitle */}
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
          What I've Built
        </p>

        {/* Project Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(0,217,192,0.02), rgba(10,15,30,0.8))',
                border: '1px solid rgba(0,217,192,0.12)',
                borderRadius: '14px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,217,192,0.35)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,217,192,0.12)'
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,217,192,0.12)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Top badges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: '#00D9C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {project.date}
                </span>
                {project.isPrivate && (
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      fontWeight: 500,
                      color: '#64748B',
                      background: 'rgba(100,116,139,0.1)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(100,116,139,0.2)',
                    }}
                  >
                    PRIVATE REPO
                  </span>
                )}
              </div>

              {/* Category */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#64748B',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {project.category}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                  color: '#E2E8F0',
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: '#94A3B8',
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tech tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                }}
              >
                {project.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      color: '#00D9C0',
                      background: 'rgba(0,217,192,0.08)',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '5px',
                      border: '1px solid rgba(0,217,192,0.15)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 5 && (
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      color: '#64748B',
                      padding: '0.3rem 0.6rem',
                    }}
                  >
                    +{project.tags.length - 5}
                  </span>
                )}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#00D9C0',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.8rem',
                      border: '1px solid rgba(0,217,192,0.3)',
                      borderRadius: '6px',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0,217,192,0.1)'
                      e.currentTarget.style.borderColor = '#00D9C0'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = 'rgba(0,217,192,0.3)'
                    }}
                  >
                    <span>→</span> Live Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#94A3B8',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.8rem',
                      border: '1px solid rgba(148,163,184,0.3)',
                      borderRadius: '6px',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#E2E8F0'
                      e.currentTarget.style.borderColor = '#94A3B8'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94A3B8'
                      e.currentTarget.style.borderColor = 'rgba(148,163,184,0.3)'
                    }}
                  >
                    <span>⚡</span> GitHub
                  </a>
                )}

                {project.backendUrl && (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#64748B',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.8rem',
                      border: '1px solid rgba(100,116,139,0.3)',
                      borderRadius: '6px',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#94A3B8'
                      e.currentTarget.style.borderColor = '#64748B'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#64748B'
                      e.currentTarget.style.borderColor = 'rgba(100,116,139,0.3)'
                    }}
                  >
                    <span>⚙</span> Backend
                  </a>
                )}

                {project.isPropriety && !project.liveUrl && !project.githubUrl && (
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: '#334155',
                      padding: '0.4rem 0.8rem',
                      border: '1px solid rgba(51,65,85,0.3)',
                      borderRadius: '6px',
                      fontStyle: 'italic',
                    }}
                  >
                    Private Build
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
