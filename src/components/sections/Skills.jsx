import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SKILLS, SKILL_CATEGORIES } from '../../data/index.js'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All')
  const sectionRef  = useRef(null)
  const titleRef    = useRef(null)
  const subtitleRef = useRef(null)
  const tabsRef     = useRef(null)
  const skillsRef   = useRef(null)

  const filteredSkills = activeFilter === 'All'
    ? SKILLS
    : SKILLS.filter((skill) => skill.category === activeFilter)

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
        tabsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tabsRef.current,
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(
        skillsRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Re-animate skills when filter changes
  useEffect(() => {
    if (!skillsRef.current) return
    gsap.fromTo(
      skillsRef.current.children,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, stagger: 0.03, ease: 'back.out(1.3)' }
    )
  }, [activeFilter])

  return (
    <section
      id="skills"
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
          Technical Skills
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
            marginBottom: '3rem',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}
        >
          Core Expertise
        </p>

        {/* Filter Tabs */}
        <div
          ref={tabsRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {SKILL_CATEGORIES.map((category) => {
            const isActive = activeFilter === category
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  border: isActive ? '2px solid #00D9C0' : '2px solid rgba(100,116,139,0.3)',
                  background: isActive ? 'rgba(0,217,192,0.1)' : 'transparent',
                  color: isActive ? '#00D9C0' : '#94A3B8',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(0,217,192,0.4)'
                    e.currentTarget.style.color = '#00D9C0'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(100,116,139,0.3)'
                    e.currentTarget.style.color = '#94A3B8'
                  }
                }}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#E2E8F0',
                background: 'linear-gradient(135deg, rgba(0,217,192,0.08), rgba(15,23,42,0.6))',
                border: '1px solid rgba(0,217,192,0.2)',
                borderRadius: '10px',
                padding: '0.75rem 1.25rem',
                transition: 'all 0.3s',
                cursor: 'default',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00D9C0'
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,217,192,0.15), rgba(15,23,42,0.8))'
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,217,192,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,217,192,0.2)'
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,217,192,0.08), rgba(15,23,42,0.6))'
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon dot */}
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  background: '#00D9C0',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px rgba(0,217,192,0.6)',
                }}
              />
              {skill.name}
            </div>
          ))}
        </div>

        {/* Count indicator */}
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            color: '#334155',
            textAlign: 'center',
            marginTop: '3rem',
            letterSpacing: '0.05em',
          }}
        >
          {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'} shown
          {activeFilter !== 'All' && ` in ${activeFilter}`}
        </p>
      </div>
    </section>
  )
}
