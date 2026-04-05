import '../App.css'
import { useEffect, useState, useContext } from 'react'
import { ref, onValue } from 'firebase/database'
import { database } from '../config/firebase'
import ModeSwitch from '../components/navbar'
import { AuthContext } from '../context/AuthContext'
import BlogForm from '../components/BlogForm'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
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
          // Sort by creation date (newest first)
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

  const handleBlogAdded = () => {
    setShowForm(false)
    // Blogs will be automatically updated via onValue listener
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-neutral-50 to-90% dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-blue-950 dark:text-white">
      <ModeSwitch />

      {/*Body */}
      <div className="pl-32 pr-32 pt-10 3xs:max-sm:pl-10 3xs:max-sm:pr-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-6">My Blog</h1>
          {user && (
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
            >
              + Add New Blog Post
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
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                {blog.imageUrl && (
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
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
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    {blog.liveLink && (
                      <a
                        href={blog.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Read More →
                      </a>
                    )}
                    {blog.githubLink && (
                      <a
                        href={blog.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
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

      <div className="footer text-center pt-10 pb-10">
        <span className=''>Visit My <a href="https://github.com/Tunzir12" target='_blank' className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Github</a> page for more content</span>
      </div>

      {/* Blog Form Modal */}
      {showForm && (
        <BlogForm
          onClose={() => setShowForm(false)}
          onSuccess={handleBlogAdded}
        />
      )}
    </div>
  )
}

export default Blog