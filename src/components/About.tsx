import pfp from '../images/linkedin_pfp.jpeg';

export default function About() {
  const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'AWS'];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate developer with experience in building modern applications. 
              I love creating efficient, scalable solutions and learning new technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open source projects, or enjoying outdoor activities.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <img src={pfp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}