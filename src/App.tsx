import { useState, useEffect } from 'react'
import Landing from './components/Landing'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Jon Klein</div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#experience" className="hover:text-primary">Experience</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App