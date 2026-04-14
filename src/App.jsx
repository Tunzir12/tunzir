
import './App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import { ref, onValue } from 'firebase/database'
import { database } from './config/firebase'

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = () => {
    try {
      setLoading(true)
      const projectsRef = ref(database, 'projects')
      onValue(projectsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
          const projectsArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }))
          // Sort by creation date (newest first)
          projectsArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          setProjects(projectsArray)
        } else {
          setProjects([])
        }
        setLoading(false)
      })
    } catch (error) {
      console.error('Error fetching projects:', error)
      setLoading(false)
    }
  }

  const skills = [
    'React',
    'JavaScript',
    'Node.js',
    'Responsive Design',
    'Web Accessibility',
    'UI/UX Development'
  ]

  const testimonials = [
    {
      quote: 'Maliha delivered an exceptional solution that exceeded our expectations.',
      author: 'Client Name',
      role: 'Project Manager'
    },
    {
      quote: 'Great attention to detail and a strong focus on accessibility and user experience.',
      author: 'Team Lead',
      role: 'Tech Lead'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-neutral-50 to-white dark:bg-gradient-to-b dark:from-fuchsia-900 dark:via-blue-950 dark:to-gray-900 dark:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 dark:from-fuchsia-400 dark:to-purple-500 bg-clip-text text-transparent">
            Maliha Tunzira
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Creative Problem Solver
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
            Building user-friendly, accessible, and sustainable software solutions
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto">
            I&apos;m a passionate software engineer dedicated to creating innovative digital experiences that make a meaningful impact on people&apos;s lives and our environment.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/project"
              className="px-8 py-4 bg-orange-600 dark:bg-fuchsia-600 text-white font-semibold rounded-lg hover:bg-orange-700 dark:hover:bg-fuchsia-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-orange-600 dark:text-fuchsia-400 font-semibold rounded-lg border-2 border-orange-600 dark:border-fuchsia-400 hover:bg-orange-50 dark:hover:bg-gray-700 transition duration-300"
            >
              Get in touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Core Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-fuchsia-900 dark:to-purple-800 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
              >
                <p className="font-semibold text-lg text-gray-800 dark:text-white">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          {loading ? (
            <p className="text-center text-gray-600 dark:text-gray-400">Loading projects...</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No projects yet. Check back soon!
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project) => (
                <div 
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group"
                >
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-fuchsia-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6 line-clamp-2">
                      {project.tags?.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-orange-100 dark:bg-fuchsia-900 text-orange-700 dark:text-fuchsia-300 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.liveLink && (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-orange-600 dark:text-fuchsia-400 font-semibold hover:underline"
                        >
                          Live Demo →
                        </a>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-orange-600 dark:text-fuchsia-400 font-semibold hover:underline"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            What People Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Ready to work together?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let&apos;s create something amazing. Get in touch and let&apos;s discuss your next project.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-10 py-4 bg-orange-600 dark:bg-fuchsia-600 text-white font-semibold rounded-lg hover:bg-orange-700 dark:hover:bg-fuchsia-700 transition duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Maliha Tunzira. Building solutions that matter.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
