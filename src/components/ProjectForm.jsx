import { useState, useEffect } from 'react'
import { ref, push, set, update } from 'firebase/database'
import { database, storage } from '../config/firebase'
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'

const ProjectForm = ({ project, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: [],
    liveLink: '',
    githubLink: '',
    imageUrl: '',
    imageFile: null
  })
  const [tagInput, setTagInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (project) {
      setFormData({
        ...project,
        imageFile: null,
        tags: project.tags || []
      })
    }
  }, [project])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        imageFile: file,
        imageUrl: URL.createObjectURL(file)
      }))
    }
  }

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const handleRemoveTag = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      let imageUrl = formData.imageUrl

      // Upload image if a new file is selected
      if (formData.imageFile) {
        const imageRef = storageRef(storage, `projects/${Date.now()}_${formData.imageFile.name}`)
        await uploadBytes(imageRef, formData.imageFile)
        imageUrl = await getDownloadURL(imageRef)

        // Delete old image if it exists and it's a Firebase URL
        if (project?.imageUrl && project.imageUrl.includes('firebasestorage')) {
          try {
            const oldImageRef = storageRef(storage, project.imageUrl)
            await deleteObject(oldImageRef)
          } catch (err) {
            console.warn('Could not delete old image:', err)
          }
        }
      }

      const projectData = {
        title: formData.title,
        description: formData.description,
        tags: formData.tags,
        liveLink: formData.liveLink,
        githubLink: formData.githubLink,
        imageUrl: imageUrl,
        updatedAt: new Date().toISOString()
      }

      if (project?.id) {
        // Update existing project
        const projectRef = ref(database, `projects/${project.id}`)
        await update(projectRef, projectData)
        setError('')
        onSaved()
      } else {
        // Add new project
        const projectsRef = ref(database, 'projects')
        const newProjectRef = push(projectsRef)
        await set(newProjectRef, {
          ...projectData,
          createdAt: new Date().toISOString()
        })
        setFormData({
          title: '',
          description: '',
          tags: [],
          liveLink: '',
          githubLink: '',
          imageUrl: '',
          imageFile: null
        })
        setError('')
        onSuccess()
        onClose()
      }
    } catch (err) {
      console.error('Error saving project:', err)
      setError('Failed to save project. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
          {error}
        </div>
      )}

      {/* Title */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Project Title *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-orange-500"
          placeholder="Enter project title"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-orange-500"
          placeholder="Describe your project"
        />
      </div>

      {/* Tags */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Technologies / Tags
        </label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-orange-500"
            placeholder="Type a tag and press Enter"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-orange-100 dark:bg-fuchsia-900 text-orange-700 dark:text-fuchsia-300 rounded-full flex items-center gap-2"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(index)}
                className="text-orange-700 dark:text-fuchsia-300 hover:font-bold"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Live Link */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Live Demo Link
        </label>
        <input
          type="url"
          name="liveLink"
          value={formData.liveLink}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-orange-500"
          placeholder="https://example.com"
        />
      </div>

      {/* GitHub Link */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          GitHub Link
        </label>
        <input
          type="url"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-orange-500"
          placeholder="https://github.com/username/repo"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Project Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-orange-500"
        />
        {formData.imageUrl && (
          <div className="mt-4">
            <img
              src={formData.imageUrl}
              alt="Preview"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition"
        >
          {loading ? 'Saving...' : project ? 'Update Project' : 'Create Project'}
        </button>
      </div>
    </form>
  )
}

export default ProjectForm
