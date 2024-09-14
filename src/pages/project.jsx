import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  return (
    <div>
      <nav className=' bg-white font-nanum p-10'>
        <div className="flex flex-row font-bold text-indigo-600 text-3xl">
          <Link to="/" className='basis-1/4'>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go to Homepage
          </Link>
        </div>
      </nav>
  </div>
  )
}

export default Project