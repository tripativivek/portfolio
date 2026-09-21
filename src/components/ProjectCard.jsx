function ProjectCard({ project }) {
  return (
    <div className="group card rounded-xl border border-dark-600 bg-dark-800/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5">
      {/* Thumbnail */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl">{project.emoji}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-sm muted mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="text-sm muted space-y-1 mb-5">
          {project.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent mt-0.5">▹</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.demo ? 'flex-1' : 'w-full'} text-center px-4 py-2 text-sm font-medium border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300`}
          >
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
