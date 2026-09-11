export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/sarmad-shafiq', icon: 'in' },
    { label: 'GitHub', url: 'https://github.com/SarmadShafiq123/', icon: 'gh' },
  ]

  return (
    <footer
      style={{
        background: '#080D1A',
        borderTop: '1px solid rgba(0,217,192,0.15)',
        padding: '3rem 1.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.5rem',
            color: '#E2E8F0',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#00D9C0' }}>S</span>armad Shafiq
          <span style={{ color: '#00D9C0' }}>.</span>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            color: '#64748B',
            textAlign: 'center',
            maxWidth: '500px',
            lineHeight: 1.6,
          }}
        >
          Full-Stack Developer · Gujranwala, Pakistan
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                border: '1px solid rgba(0,217,192,0.2)',
                background: 'rgba(0,217,192,0.05)',
                color: '#00D9C0',
                textDecoration: 'none',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00D9C0'
                e.currentTarget.style.background = 'rgba(0,217,192,0.15)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,217,192,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,217,192,0.2)'
                e.currentTarget.style.background = 'rgba(0,217,192,0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {link.icon}
            </a>
          ))}

          <a
            href="mrsarmadshafiq@gmail.com"
            aria-label="Email"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              border: '1px solid rgba(0,217,192,0.2)',
              background: 'rgba(0,217,192,0.05)',
              color: '#00D9C0',
              textDecoration: 'none',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00D9C0'
              e.currentTarget.style.background = 'rgba(0,217,192,0.15)'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,217,192,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,217,192,0.2)'
              e.currentTarget.style.background = 'rgba(0,217,192,0.05)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            @
          </a>
        </div>

        <div
          style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,217,192,0.2), transparent)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              color: '#334155',
              textAlign: 'center',
            }}
          >
            © {currentYear} Sarmad Shafiq. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: '#1E293B',
              letterSpacing: '0.05em',
            }}
          >
            Built with React · Vite · Three.js · GSAP · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
