import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus]       = useState({ type: '', message: '' })
  const [loading, setLoading]     = useState(false)

  const sectionRef = useRef(null)
  const titleRef   = useRef(null)
  const formRef    = useRef(null)

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
        formRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (status.message) setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'All fields are required.' })
      setLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        minHeight: '70vh',
        background: '#0F172A',
        padding: '6rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
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
            marginBottom: '1rem',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          Get In Touch
          <span style={{ color: '#00D9C0' }}>.</span>
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            color: '#94A3B8',
            textAlign: 'center',
            marginBottom: '3rem',
            lineHeight: 1.6,
          }}
        >
          Have a project in mind or just want to connect? Drop me a message and I'll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            background: 'linear-gradient(135deg, rgba(0,217,192,0.03), rgba(10,15,30,0.6))',
            border: '1px solid rgba(0,217,192,0.15)',
            borderRadius: '14px',
            padding: '2.5rem',
          }}
        >
          {/* Name */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#E2E8F0',
                marginBottom: '0.5rem',
                letterSpacing: '0.02em',
              }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                padding: '0.85rem 1rem',
                background: 'rgba(10,15,30,0.8)',
                border: '1px solid rgba(0,217,192,0.2)',
                borderRadius: '8px',
                color: '#E2E8F0',
                outline: 'none',
                transition: 'all 0.3s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00D9C0'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,217,192,0.1)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,217,192,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#E2E8F0',
                marginBottom: '0.5rem',
                letterSpacing: '0.02em',
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                padding: '0.85rem 1rem',
                background: 'rgba(10,15,30,0.8)',
                border: '1px solid rgba(0,217,192,0.2)',
                borderRadius: '8px',
                color: '#E2E8F0',
                outline: 'none',
                transition: 'all 0.3s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00D9C0'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,217,192,0.1)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,217,192,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#E2E8F0',
                marginBottom: '0.5rem',
                letterSpacing: '0.02em',
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{
                width: '100%',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                padding: '0.85rem 1rem',
                background: 'rgba(10,15,30,0.8)',
                border: '1px solid rgba(0,217,192,0.2)',
                borderRadius: '8px',
                color: '#E2E8F0',
                outline: 'none',
                transition: 'all 0.3s',
                resize: 'vertical',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00D9C0'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,217,192,0.1)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,217,192,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div
              style={{
                padding: '0.85rem 1rem',
                marginBottom: '1.5rem',
                borderRadius: '8px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                background: status.type === 'success' ? 'rgba(0,217,192,0.1)' : 'rgba(239,68,68,0.1)',
                border: status.type === 'success' ? '1px solid rgba(0,217,192,0.3)' : '1px solid rgba(239,68,68,0.3)',
                color: status.type === 'success' ? '#00D9C0' : '#EF4444',
              }}
            >
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '1rem',
              borderRadius: '8px',
              border: '2px solid #00D9C0',
              background: loading ? 'rgba(0,217,192,0.3)' : '#00D9C0',
              color: loading ? '#64748B' : '#0A0F1E',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              opacity: loading ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#00D9C0'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,217,192,0.3)'
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.background = '#00D9C0'
                e.currentTarget.style.color = '#0A0F1E'
                e.currentTarget.style.boxShadow = 'none'
              }
            }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
