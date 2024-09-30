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
      <div className="pl-32 pt-20 pr-32 ">        
        <div className="grid grid-cols-3">
          <div className="pl-40 pr-40 col-span-2 flex flex-col space-y-3 text-left">
            <div>
              <label className='font-bold'>Name</label><br />
              <input type="text" className='rounded-lg w-full bg-trans-box' />
            </div>
            <div>
              <label className='font-bold'>Email</label>
              <input type="email" className='rounded-lg w-full' />
            </div>
            <div>
              <label className='font-bold'>Subject</label>
              <input type="text" className='rounded-lg w-full' />
            </div>
            <div>
              <label className='font-bold'>Mesasge</label>
              <textarea name="" className='rounded-lg w-full' id=""></textarea>
            </div>
            <div className="text-right">
            <button className='font-bold p-2 bg-ghiya w-1/3'>Submit</button>

            </div>
          </div>
          <div className="pr-40 col-span-1">
            <div className="p-28 bg-ghiya">

            </div>
          </div>
        </div>
      </div>

      <div className="footer text-center p-4">
        <span className='text-ghiya'>Visit My <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'>Linkedin</a> or <a href="https://github.com/Tunzir12" target='_blank'>Github</a> page.</span>
      </div>
      
    </div>
    
  )
}

export default Contact