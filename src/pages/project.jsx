import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faMoon } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'


const Project = () => {


  return (

    <div className="min-h-screen bg-gradient-to-r from-Beige to-white to-90%">
      {/*switch to dark mode */}
      <div className="navbar p-14 text-left">
        <FontAwesomeIcon className='text-2xl' icon={faMoon} />
      </div>

      {/*Navbar */}
      <div className="navlink grid grid-cols-2 font-bold">
        <div className="col-p-1 text-left">
          <Link to={'/'} className='pl-32'>Home</Link>
        </div>

        <div className="col-p-1 text-right ">
          <Link to={'/contact'} className='pr-32'>Contact</Link>
        </div>
      </div>

      {/*Body */}
      <div className="p-32 text-left">
      <div className="details p-10 bg-trans-box">
          <h1 className='font-bold'>Online Portfolio</h1>
          <div className="flex flex-row space-x-6">
            <h1 className='font-bold'>Skills</h1>
            <span>JavaScript</span>
            <span>Vite</span>
            <span>React.JS</span>
          </div>
          <h1 className='font-bold'>October,2021 - October,2022</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque harum doloribus asperiores soluta rem impedit delectus culpa commodi suscipit, tempora eaque voluptatem odio ipsa veniam ea corrupti iusto odit!</p>
        </div>
      </div>

    </div>
    
  )
}

export default Project