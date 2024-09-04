import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container h-screen">
      <nav className='bg-purple-300 '>
        <div className="flex flex-row font-bold text-white">
          <Link to="/" className='basis-1/4'>Home</Link>
          <Link to="/about" className='basis-1/3'>About</Link>
          <Link to="/blog" className='basis-1/3'>Blog</Link>
          <Link to="/contact" className='basis-1/3'>Contact</Link>
        </div>
      </nav>

    </div>
  )
}

export default About