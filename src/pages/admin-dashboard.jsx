import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Navbar from '../components/navbar'
import { ref, onValue, remove } from 'firebase/database'
import { database } from '../config/firebase'
import ProjectForm from '../components/ProjectForm'
import BlogForm from '../components/BlogForm'

const AdminDashboard = () => {
  const { user, logoutUser } = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState('projects')
  const [projects, setProjects] = useState([])
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [editingBlog, setEditingBlog] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchProjects()
    fetchBlogs()
  }, [])

  const fetchProjects = () => {
    try {
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

  const fetchBlogs = () => {
    try {
      const blogsRef = ref(database, 'blogs')
      onValue(blogsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
          const blogsArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }))
          blogsArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          setBlogs(blogsArray)
        } else {
          setBlogs([])
        }
      })
    } catch (error) {
      console.error('Error fetching blogs:', error)
    }
  }

  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const projectRef = ref(database, `projects/${projectId}`)
        await remove(projectRef)
      } catch (error) {
        console.error('Error deleting project:', error)
      }
    }
  }

  const handleDeleteBlog = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        const blogRef = ref(database, `blogs/${blogId}`)
        await remove(blogRef)
      } catch (error) {
        console.error('Error deleting blog:', error)
      }
    }
  }

  const handleLogout = async () => {
    await logoutUser()
    navigate('/')
  }

  const handleItemSaved = () => {
    setShowForm(false)
    setEditingProject(null)
    setEditingBlog(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-neutral-50 to-white dark:bg-gradient-to-b dark:from-fuchsia-900 dark:via-blue-950 dark:to-gray-900 dark:text-white">
      <Navbar />

      <div className="pt-20 px-6 py-12 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome, {user?.displayName || user?.email}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition duration-200 ${
              activeTab === 'projects'
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition duration-200 ${
              activeTab === 'blogs'
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Blogs ({blogs.length})
          </button>
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {activeTab === 'projects'
                  ? (editingProject ? 'Edit Project' : 'Add New Project')
                  : (editingBlog ? 'Edit Blog Post' : 'Add New Blog Post')
                }
              </h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  setEditingProject(null)
                  setEditingBlog(null)
                }}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
              >
                ✕
              </button>
            </div>
            {activeTab === 'projects' ? (
              <ProjectForm
                project={editingProject}
                onClose={() => {
                  setShowForm(false)
                  setEditingProject(null)
                }}
                onSuccess={handleItemSaved}
              />
            ) : (
              <BlogForm
                blog={editingBlog}
                onClose={() => {
                  setShowForm(false)
                  setEditingBlog(null)
                }}
                onSuccess={handleItemSaved}
              />
            )}
          </div>
        )}

        {/* Add Button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="mb-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300"
          >
            + Add New {activeTab === 'projects' ? 'Project' : 'Blog Post'}
          </button>
        )}

        {/* Content based on active tab */}
        {activeTab === 'projects' ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Projects ({projects.length})
            </h2>

            {loading ? (
              <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
            ) : projects.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">
                No projects yet. Create your first one!
              </p>
            ) : (
              <div className="grid gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-orange-100 dark:bg-fuchsia-900 text-orange-700 dark:text-fuchsia-300 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 text-sm">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              Live Demo
                            </a>
                          )}
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => {
                            setEditingProject(project)
                            setShowForm(true)
                          }}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Blog Posts ({blogs.length})
            </h2>

            {blogs.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">
                No blog posts yet. Create your first one!
              </p>
            ) : (
              <div className="grid gap-6">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                          {blog.content?.substring(0, 200)}...
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 text-sm">
                          {blog.liveLink && (
                            <a
                              href={blog.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              Read More
                            </a>
                          )}
                          {blog.githubLink && (
                            <a
                              href={blog.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => {
                            setEditingBlog(blog)
                            setShowForm(true)
                          }}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(blog.id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {blog.imageUrl && (
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
