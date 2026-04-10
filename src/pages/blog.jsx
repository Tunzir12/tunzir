import '../App.css'
import { useEffect, useState, useContext } from 'react'
import { ref, onValue, remove } from 'firebase/database'
import { ref as storageRef, deleteObject } from 'firebase/storage'
import { database, storage } from '../config/firebase'
import ModeSwitch from '../components/navbar'
import { AuthContext } from '../context/AuthContext'
import BlogForm from '../components/BlogForm'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)   // detail modal
  const [editingBlog, setEditingBlog] = useState(null)     // edit modal
  const [deletingId, setDeletingId] = useState(null)       // delete loading state
  const { user } = useContext(AuthContext)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = () => {
    try {
      setLoading(true)
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
        setLoading(false)
      })
    } catch (error) {
      console.error('Error fetching blogs:', error)
      setLoading(false)
    }
  }

  const handleBlogSaved = () => {
    setShowForm(false)
    setEditingBlog(null)
  }

  const handleEdit = (blog, e) => {
    e.stopPropagation()
    setSelectedBlog(null)
    setEditingBlog(blog)
  }

  const handleDelete = async (blog, e) => {
    e.stopPropagation()
    if (!window.confirm(`Are you sure you want to delete "${blog.title}"?`)) return

    setDeletingId(blog.id)
    try {
      if (blog.imageUrl && blog.imageUrl.includes('firebasestorage')) {
        try {
          const imageRef = storageRef(storage, blog.imageUrl)
          await deleteObject(imageRef)
        } catch (err) {
          console.warn('Could not delete image:', err)
        }
      }
      await remove(ref(database, `blogs/${blog.id}`))
      if (selectedBlog?.id === blog.id) setSelectedBlog(null)
    } catch (err) {
      console.error('Error deleting blog:', err)
      alert('Failed to delete blog. Please try again.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-neutral-50 to-90 dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-blue-950 dark:text-white pt-20">
      <ModeSwitch />
      <div className="pl-32 pr-32 3xs:max-sm:pl-10 3xs:max-sm:pr-10">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-6">My Blog</h1>
          {user && (
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
            >
              Add New Blog Post
            </button>
          )}
        </div>

        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
            <p className="mt-4">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">No blogs yet</h2>
            <p className="text-gray-600 dark:text-gray-400">Check back later for new blog posts!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map(blog => (
              <div
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
              >
                {blog.imageUrl && (
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {blog.content?.substring(0, 150)}...
                  </p>
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mt-2">
                    <div className="flex gap-3">
                      {blog.liveLink && (
                        <a href={blog.liveLink} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm">
                          Read More
                        </a>
                      )}
                      {blog.githubLink && (
                        <a href={blog.githubLink} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 text-sm">
                          GitHub
                        </a>
                      )}
                    </div>

                    {user && (
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => handleEdit(blog, e)}
                          className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold rounded-lg transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => handleDelete(blog, e)}
                          disabled={deletingId === blog.id}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white text-xs font-semibold rounded-lg transition"
                        >
                          {deletingId === blog.id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="footer text-center pt-10 pb-10">
          <span>Visit My <a href="https://github.com/Tunzir12" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Github</a> page for more content</span>
        </div>
      </div>

      {/* Add Blog Modal */}
      {showForm && (
        <BlogForm onClose={() => setShowForm(false)} onSuccess={handleBlogSaved} />
      )}

      {/* Edit Blog Modal */}
      {editingBlog && (
        <BlogForm
          blog={editingBlog}
          onClose={() => setEditingBlog(null)}
          onSuccess={handleBlogSaved}
        />
      )}

      {/* Full Blog Detail Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {selectedBlog.imageUrl && (
              <img src={selectedBlog.imageUrl} alt={selectedBlog.title} className="w-full h-64 object-cover rounded-t-xl" />
            )}
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-3xl font-bold dark:text-white">{selectedBlog.title}</h2>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-2xl font-bold ml-4"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                {new Date(selectedBlog.createdAt).toLocaleDateString()}
              </p>

              {selectedBlog.tags && selectedBlog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedBlog.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap mb-8">
                {selectedBlog.content}
              </p>

              <div className="flex gap-3 flex-wrap items-center">
                {selectedBlog.liveLink && (
                  <a href={selectedBlog.liveLink} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition">
                    Read More →
                  </a>
                )}
                {selectedBlog.githubLink && (
                  <a href={selectedBlog.githubLink} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition">
                    GitHub
                  </a>
                )}
                {user && (
                  <>
                    <button
                      onClick={(e) => handleEdit(selectedBlog, e)}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-semibold transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => handleDelete(selectedBlog, e)}
                      disabled={deletingId === selectedBlog.id}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-lg text-sm font-semibold transition"
                    >
                      {deletingId === selectedBlog.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog