import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">
          <a href="#" className="hover:text-primary">Jon Klein</a>
        </div>
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
  )
}