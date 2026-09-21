import { useEffect, useRef } from 'react'

function Hero() {
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
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="fade-in text-primary font-mono text-sm mb-4 tracking-wide">
              &lt;Hello World /&gt;
            </p>
            <h1 className="fade-in text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Vivek Tripathi</span>
            </h1>
            <h2 className="fade-in text-lg sm:text-xl muted font-medium mb-6">
              Computer Science Student &amp; Aspiring Software Developer
            </h2>
            <p className="fade-in muted leading-relaxed mb-8 max-w-lg">
              I build responsive web applications and enjoy solving programming
              and data structure problems. I'm continuously improving my skills
              in software development and modern web technologies.
            </p>
            <div className="fade-in flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1DkYfrERScA7LzpMA1w-sHZcQpizyJos1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-semibold border border-accent/50 text-accent rounded-lg hover:bg-accent/10 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Illustration – code editor graphic */}
          <div className="fade-in hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              {/* Terminal card */}
              <div className="relative bg-dark-800 dark:bg-dark-800 border border-dark-600 rounded-2xl p-6 shadow-2xl">
                {/* Dots */}
                <div className="flex gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-primary-light">const</span>{' '}
                    <span className="text-accent-light">developer</span>{' '}
                    <span className="text-light-300">=</span> {'{'}
                    {'\n'}  <span className="text-green-400">name</span>:{' '}
                    <span className="text-amber-300">'Vivek Tripathi'</span>,
                    {'\n'}  <span className="text-green-400">role</span>:{' '}
                    <span className="text-amber-300">'CS Student'</span>,
                    {'\n'}  <span className="text-green-400">skills</span>:{' '}
                    [<span className="text-amber-300">'React'</span>,{' '}
                    <span className="text-amber-300">'C++'</span>,{' '}
                    <span className="text-amber-300">'JavaScript'</span>],
                    {'\n'}  <span className="text-green-400">passion</span>:{' '}
                    <span className="text-amber-300">'Building Things'</span>,
                    {'\n'}
                    {'}'};{'\n\n'}
                    <span className="text-primary-light">while</span>
                    {'('}<span className="text-accent-light">developer</span>.passion{')'} {'{'}
                    {'\n'}  <span className="text-accent-light">developer</span>
                    .<span className="text-green-400">learn</span>();
                    {'\n'}  <span className="text-accent-light">developer</span>
                    .<span className="text-green-400">build</span>();
                    {'\n'}  <span className="text-accent-light">developer</span>
                    .<span className="text-green-400">grow</span>();
                    {'\n'}
                    {'}'}
                  </code>
                </pre>
                {/* Blinking cursor */}
                <span className="inline-block w-2 h-5 bg-primary animate-pulse mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
