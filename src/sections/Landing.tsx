import DotGrid from "../components/DotGrid.jsx";

export default function Landing() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={8}
          gap={24}
          baseColor="#301360"
          activeColor="#461b8a"
          proximity={150}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />
      </div>
      <div className="relative text-center max-w-4xl z-10 pointer-events-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Jon Klein</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Engineer & Problem Solver
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            Get In Touch
          </a>
          <a
            href="/Jonathan_Klein_Resume.pdf"
            target="_blank"
            className="px-8 py-3 border border-border hover:bg-accent rounded-lg font-medium transition-colors"
          >
            <div className="flex gap-1 items-center">
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h14v-6q0-.425.288-.712T20 12t.713.288T21 13v6q0 .825-.587 1.413T19 21zM19 6.4L10.4 15q-.275.275-.7.275T9 15t-.275-.7t.275-.7L17.6 5H15q-.425 0-.712-.288T14 4t.288-.712T15 3h5q.425 0 .713.288T21 4v5q0 .425-.288.713T20 10t-.712-.288T19 9z" /></svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}