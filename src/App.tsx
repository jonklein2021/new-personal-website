import { useState, useEffect } from 'react'
import Landing from './sections/Landing'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'

export default function App() {
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
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
