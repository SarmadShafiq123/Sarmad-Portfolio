import { useLenis } from './hooks/useLenis.js'
import Navbar from './components/ui/Navbar.jsx'
import Footer from './components/ui/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Experience from './components/sections/Experience.jsx'
import Projects from './components/sections/Projects.jsx'
import Skills from './components/sections/Skills.jsx'
import Profiles from './components/sections/Profiles.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  // Initialise Lenis smooth scroll + GSAP ScrollTrigger sync
  useLenis()

  return (
    <div className="noise" style={{ minHeight: '100vh', background: '#0A0F1E' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
