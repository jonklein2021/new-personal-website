interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
};

export default function Experience() {
  const experiences: Experience[] = [
    {
      title: "Software Dev Engineer",
      company: "Amazon",
      period: "Jun 2025 - Present",
      description: "API design and implementation, CI/CD pipeline development, AWS resource management"
    },
    {
      title: "Software Engineering Intern",
      company: "Finfolio Inc.",
      period: "May 2024 - Aug 2024",
      description: "Developed financial report creation software in .NET"
    },
    {
      title: "Data Science Intern",
      company: "Mutual of America",
      period: "May 2022 - Jun 2022",
      description: "Implemented natural language processing (NLP) algorithms in Python to find useful correlations"
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}