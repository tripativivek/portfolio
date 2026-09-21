import { useEffect, useRef } from 'react'

const highlights = [
  { icon: '💻', title: 'Software Development', desc: 'Building clean, efficient and scalable code' },
  { icon: '🌐', title: 'Web Development', desc: 'Creating responsive, modern web applications' },
  { icon: '🧩', title: 'Problem Solving', desc: 'DSA practice and competitive thinking' },
  { icon: '📚', title: 'Continuous Learner', desc: 'Always exploring new technologies and tools' },
]

function About() {
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
    <section id="about" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="fade-in text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="fade-in w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <p className="fade-in muted leading-relaxed mb-6">
              I'm a Computer Science student with a strong interest in software
              development and web technologies. I enjoy turning ideas into
              functional, user-friendly applications and constantly challenge
              myself with data structure and algorithm problems to sharpen my
              problem-solving skills.
            </p>
            <p className="fade-in muted leading-relaxed mb-6">
              My core toolkit includes <strong className="text-primary">React</strong>,{' '}
              <strong className="text-primary">JavaScript</strong>,{' '}
              <strong className="text-primary">C++</strong>, and modern web
              technologies. I'm passionate about writing clean code, learning
              new frameworks, and building projects that solve real-world
              problems.
            </p>
            <p className="fade-in muted leading-relaxed">
              I'm actively looking for internship and entry-level software
              development opportunities where I can contribute, learn and grow
              as a developer.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="fade-in card p-5 rounded-xl border border-dark-600 bg-dark-800/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
