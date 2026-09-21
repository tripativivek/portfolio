import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Programming',
    icon: '⌨️',
    skills: ['C++', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Web Development',
    icon: '🌐',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Core Concepts',
    icon: '🧠',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="fade-in text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="fade-in w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="fade-in card p-6 rounded-xl border border-dark-600 bg-dark-800/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
