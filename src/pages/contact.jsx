import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'


const Contact = () => {


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
          <Link to={'/project'} className='pr-32'>Project</Link>
        </div>
      </div>

      {/*Body */}
      <div className="p-32">
        <div className="form">
          <form >
          <label htmlFor="">Name:</label>
          <input type="text" name="" id="" placeholder='Name' required/>
          <label htmlFor="">Email:</label>
          <input type="email" name="" id="" placeholder='Email' required/>
          <label htmlFor="">Subject:</label>
          <input type="text" name="" id="" placeholder='Subject'/>
          <label htmlFor="">Message:</label>
          <textarea name="message" id="" placeholder='Message'></textarea>
          </form>
        </div>
          

      </div>

      <div className="footer text-center p-4">
        <span className='text-ghiya'>Visit My <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'>Linkedin</a> or <a href="https://github.com/Tunzir12" target='_blank'>Github</a> page.</span>
      </div>
      
    </div>
    
  )
}

export default Contact