interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Sockfish",
      description: "A low-latency chess engine optimized with modern ML algorithms, built entirely from scratch in C++",
      tech: ["C++", "CMake"],
      github: "https://github.com/jonklein2021/sockfish",
    },
    {
      title: 'UniMart',
      description: 'A student-exclusive e-commerce platform featuring a modern ID card authentication system, and winner of Lehigh\'s 2024 AWS Hackathon',
      tech: ['React', 'Firebase', 'Rekognition', 'Lambda', 'S3', 'Amplify'],
      github: 'https://github.com/jonklein2021/2024-lv-hackathon',
      demo: 'https://devpost.com/software/unimart'
    },
    {
      title: "IMC Prosperity 3",
      description: "Realtime trading competition hosted by IMC",
      tech: ["Python", "Pandas", "Seaborn"],
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.github || project.demo) && <div className="flex gap-4">
                {project.github && <a
                  href={project.github}
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>}
                {project.demo && <a
                  href={project.demo}
                  className="text-primary hover:underline"
                >
                  Live Demo
                </a>}
              </div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}