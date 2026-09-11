import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: 0, y: 0 })
  const textRef   = useRef(null)
  const ctaRef    = useRef(null)

  // ── Three.js particle system ────────────────────────────────────────────
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // ── Particle geometry ──
    const particleCount = 3000
    const positions     = new Float32Array(particleCount * 3)
    const colors        = new Float32Array(particleCount * 3)

    const color1 = new THREE.Color(0x00D9C0) // accent teal
    const color2 = new THREE.Color(0x1E293B) // surface gray
    const color3 = new THREE.Color(0x0F172A) // bg surface

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Spread particles in a sphere
      positions[i3]     = (Math.random() - 0.5) * 12
      positions[i3 + 1] = (Math.random() - 0.5) * 12
      positions[i3 + 2] = (Math.random() - 0.5) * 8

      // Mix colors randomly
      const mixColor = Math.random() < 0.1 ? color1 : Math.random() < 0.6 ? color2 : color3
      colors[i3]     = mixColor.r
      colors[i3 + 1] = mixColor.g
      colors[i3 + 2] = mixColor.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // ── Mouse interaction ──
    const onMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth)  * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Animation loop ──
    const clock = new THREE.Clock()
    const animate = () => {
      requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      // Rotate particles slowly
      particles.rotation.x = elapsed * 0.05
      particles.rotation.y = elapsed * 0.08

      // Mouse parallax
      particles.rotation.x += mouseRef.current.y * 0.02
      particles.rotation.y += mouseRef.current.x * 0.02

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize handler ──
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  // ── GSAP text entrance animation ────────────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    tl.fromTo(
      textRef.current.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
    )
    tl.fromTo(
      ctaRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out' },
      '-=0.4'
    )
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0A0F1E',
        overflow: 'hidden',
      }}
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '900px',
        }}
      >
        <div ref={textRef}>
          {/* Name */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              color: '#E2E8F0',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Sarmad Shafiq
          </h1>

          {/* Role */}
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
              color: '#00D9C0',
              marginBottom: '1rem',
              letterSpacing: '0.02em',
            }}
            className="text-glow"
          >
            Full-Stack MERN Developer & Desktop App Builder
          </h2>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              color: '#94A3B8',
              marginBottom: '2.5rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Building. Shipping. Iterating.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://linkedin.com/in/sarmad-shafiq"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '0.85rem 1.75rem',
              borderRadius: '8px',
              background: '#00D9C0',
              color: '#0A0F1E',
              border: '2px solid #00D9C0',
              transition: 'all 0.3s',
              cursor: 'pointer',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#00D9C0'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,217,192,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#00D9C0'
              e.currentTarget.style.color = '#0A0F1E'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Let's Connect
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '0.85rem 1.75rem',
              borderRadius: '8px',
              background: 'transparent',
              color: '#00D9C0',
              border: '2px solid #00D9C0',
              transition: 'all 0.3s',
              cursor: 'pointer',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#00D9C0'
              e.currentTarget.style.color = '#0A0F1E'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,217,192,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#00D9C0'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.6,
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            color: '#64748B',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </p>
        <div
          style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, #00D9C0, transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}
