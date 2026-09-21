import { useEffect, useRef } from 'react'

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Web Development',
  'Database Management',
  'Computer Networks',
]

const learningHighlights = [
  { icon: '🏆', text: 'Data Structures & Algorithms practice' },
  { icon: '💻', text: 'C++ programming proficiency' },
  { icon: '⚛️', text: 'React development skills' },
  { icon: '🌐', text: 'Web development projects' },
  { icon: '📈', text: 'Continuous learning & improvement' },
]

function Education() {
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
    <section id="education" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="fade-in text-3xl sm:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <div className="fade-in w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education card */}
          <div className="fade-in card p-6 rounded-xl border border-dark-600 bg-dark-800/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Computer Science / CSE</h3>
                <p className="text-primary text-sm font-medium">Lovely Professional University</p>
                <p className="muted text-sm">Batch of 2028</p>
              </div>
            </div>

            <h4 className="font-semibold text-sm mb-3 muted">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Learning highlights */}
          <div className="fade-in card p-6 rounded-xl border border-dark-600 bg-dark-800/50">
            <h3 className="text-lg font-bold mb-6">Achievements & Learning</h3>
            <div className="space-y-4">
              {learningHighlights.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <p className="text-sm muted group-hover:text-primary transition-colors">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
