import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { database } from '../config/firebase'
import Navbar from '../components/navbar'

const Project = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-neutral-50 to-white dark:bg-gradient-to-b dark:from-fuchsia-900 dark:via-blue-950 dark:to-gray-900 dark:text-white">
      <Navbar />

      {/* Projects Section */}
      <section className="pt-32 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore the projects I've built with modern technologies and best practices
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 dark:border-fuchsia-400"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
              </div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No projects yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group h-full flex flex-col"
                >
                  {/* Project Image */}
                  {project.imageUrl && (
                    <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-700">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300"></div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-fuchsia-400 transition duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags && project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-fuchsia-900 dark:to-purple-800 text-orange-700 dark:text-fuchsia-300 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-orange-600 hover:bg-orange-700 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 text-white font-semibold rounded-lg transition duration-300 text-center"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 border-2 border-orange-600 dark:border-fuchsia-600 text-orange-600 dark:text-fuchsia-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition duration-300 text-center"
                        >
                          GitHub
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

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Maliha Tunzira. Building solutions that matter.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Project
