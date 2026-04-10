import { useEffect, useState, useContext } from 'react'
import { ref, onValue, remove } from 'firebase/database'
import { ref as storageRef, deleteObject } from 'firebase/storage'
import { database, storage } from '../config/firebase'
import Navbar from '../components/navbar'
import { AuthContext } from '../context/AuthContext'
import ProjectForm from '../components/ProjectForm'

const Project = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)  // detail modal
  const [editingProject, setEditingProject] = useState(null)    // edit modal
  const [deletingId, setDeletingId] = useState(null)            // delete loading state
  const { user } = useContext(AuthContext)

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

  const handleProjectSaved = () => {
    setShowForm(false)
    setEditingProject(null)
  }

  const handleEdit = (project, e) => {
    e.stopPropagation()
    setSelectedProject(null)
    setEditingProject(project)
  }

  const handleDelete = async (project, e) => {
    e.stopPropagation()
    if (!window.confirm(`Are you sure you want to delete "${project.title}"?`)) return

    setDeletingId(project.id)
    try {
      if (project.imageUrl && project.imageUrl.includes('firebasestorage')) {
        try {
          const imageRef = storageRef(storage, project.imageUrl)
          await deleteObject(imageRef)
        } catch (err) {
          console.warn('Could not delete image:', err)
        }
      }
      await remove(ref(database, `projects/${project.id}`))
      if (selectedProject?.id === project.id) setSelectedProject(null)
    } catch (err) {
      console.error('Error deleting project:', err)
      alert('Failed to delete project. Please try again.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-neutral-50 dark:from-gray-900 dark:to-gray-950 dark:text-white pt-20">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Explore the projects I have built with modern technologies and best practices
          </p>
          {user && (
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300"
            >
              + Add New Project
            </button>
          )}
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>

        /* Empty */
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">No projects yet</h2>
            <p className="text-gray-600 dark:text-gray-400">Check back soon!</p>
          </div>

        /* Project Grid */
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                {/* Project Image */}
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                )}

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-orange-100 dark:bg-fuchsia-900 text-orange-700 dark:text-fuchsia-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mt-2">
                    {/* Links */}
                    <div className="flex gap-3">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="text-orange-600 hover:text-orange-800 dark:text-orange-400 text-sm font-medium">
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 text-sm font-medium">
                          GitHub
                        </a>
                      )}
                    </div>

                    {/* Admin buttons */}
                    {user && (
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => handleEdit(project, e)}
                          className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold rounded-lg transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => handleDelete(project, e)}
                          disabled={deletingId === project.id}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white text-xs font-semibold rounded-lg transition"
                        >
                          {deletingId === project.id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Project Modal */}
      {showForm && (
        <ProjectForm onClose={() => setShowForm(false)} onSuccess={handleProjectSaved} />
      )}

      {/* Edit Project Modal */}
      {editingProject && (
        <ProjectForm
          project={editingProject}
          onClose={() => setEditingProject(null)}
          onSuccess={handleProjectSaved}
        />
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {selectedProject.imageUrl ? (
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
            ) : (
              <div className="w-full h-40 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center rounded-t-xl">
                <span className="text-6xl">🚀</span>
              </div>
            )}

            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-3xl font-bold dark:text-white">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-2xl font-bold ml-4"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                {new Date(selectedProject.createdAt).toLocaleDateString()}
              </p>

              {/* Tags */}
              {selectedProject.tags && selectedProject.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 dark:bg-fuchsia-900 text-orange-700 dark:text-fuchsia-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Full description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap mb-8">
                {selectedProject.description}
              </p>

              {/* Action buttons */}
              <div className="flex gap-3 flex-wrap items-center">
                {selectedProject.liveLink && (
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold transition">
                    Live Demo →
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition">
                    GitHub
                  </a>
                )}
                {user && (
                  <>
                    <button
                      onClick={(e) => handleEdit(selectedProject, e)}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-semibold transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => handleDelete(selectedProject, e)}
                      disabled={deletingId === selectedProject.id}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-lg text-sm font-semibold transition"
                    >
                      {deletingId === selectedProject.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white rounded-lg text-sm font-semibold transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Project