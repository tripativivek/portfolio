import { useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Big Integer Calculator',
    emoji: '🔢',
    description:
      'Implemented a custom Big Integer class capable of performing arithmetic operations on numbers larger than standard integer data types. The project uses strings to represent large numbers and implements addition, subtraction and sign handling.',
    tech: ['C++', 'DSA', 'OOP'],
    features: [
      'Large number arithmetic',
      'Positive and negative number support',
      'String-based number representation',
      'Custom arithmetic algorithms',
      'Object-oriented design',
    ],
    github: 'https://github.com/tripativivek/CPP_BIGINTEGER_VIVEK_TRIPATHI.git',
    demo: null,
  },
  {
    name: 'Fresh Vibe Cafe',
    emoji: '☕',
    description:
      'A responsive cafe website designed with a modern user interface to showcase the cafe, menu and overall brand experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive design for all devices',
      'Modern and attractive UI',
      'Interactive menu section',
      'Attractive visual layout',
      'Mobile-friendly navigation',
    ],
    github: 'https://github.com/Prem836/fresh-vibes-cafe',
    demo: 'https://freshvibescafe.foo',
  },
]

function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.fade-in')
    els?.forEach(el => observer.observe(el))
    return () => els?.forEach(el => observer.unobserve(el))
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="fade-in text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="fade-in w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="fade-in muted mt-4 max-w-lg mx-auto">
            Here are some projects I've built to practice and showcase my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="fade-in">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
