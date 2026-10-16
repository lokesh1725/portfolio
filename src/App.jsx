import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import FeaturedProject from './components/sections/FeaturedProject.jsx'
import Projects from './components/sections/Projects.jsx'
import Experience from './components/sections/Experience.jsx'
import Education from './components/sections/Education.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
