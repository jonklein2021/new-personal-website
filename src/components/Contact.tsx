export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-muted-foreground mb-12">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary text-xl">📧</span>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:jonklein2021@gmail.com"
              className="text-primary hover:underline"
            >
              jonklein2021@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary text-xl">💼</span>
            </div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-primary hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary text-xl">🐙</span>
            </div>
            <h3 className="font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/yourusername"
              className="text-primary hover:underline"
            >
              github.com/yourusername
            </a>
          </div>
        </div>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
        >
          Send Message
        </a>
      </div>
    </section>
  )
}