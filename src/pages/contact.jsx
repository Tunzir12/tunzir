import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import ModeSwitch from '../components/navbar'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const Contact = () => {


  return (

    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-neutral-50 to-90% dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-blue-950 dark:text-white">
      <ModeSwitch />

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
      <div className="pl-32 pt-10 pr-32 pb-10 ">        
        <div className="grid grid-cols-3 bg-orange-200 bg-opacity-50 p-10 rounded-lg">
          <div className="pl-40 pr-40 col-span-2 grid grid-cols-5 space-y-3 text-left">
            <div className='col-span-1 pt-2'>
              <label className='font-bold'>Name</label>
            </div>
            <div className="col-span-4">
              <input type="text" className='rounded-lg w-full bg-orange-50' required />
            </div>
            <div className='col-span-1'>
              <label className='font-bold'>Email</label>
            </div>
            <div className="col-span-4">
              <input type="email" className='rounded-lg w-full bg-orange-50' required />
            </div>
            <div className='col-span-1'>
              <label className='font-bold'>Subject</label>
            </div>
            <div className="col-span-4">
              <input type="text" className='rounded-lg w-full bg-orange-50' required/>
            </div>
            <div className='col-span-1'>
              <label className='font-bold'>Mesasge</label>
            </div>
            <div className="col-span-4">
              <textarea name="" className='rounded-lg w-full bg-orange-50' id="" required/>
            </div>
            
            <div className="text-right col-span-5 ">
            <button className='font-bold p-2 w-1/3 bg-orange-50 rounded-lg dark:bg-fuchsia-800 dark:bg-opacity-40'>Submit</button>

            </div>
          </div>
          
          <div className="pr-40 pt-4 col-span-1 ">
            <div className="p-10 bg-orange-50 rounded-lg">
              <div className="social space-y-4 ">
                <h2 className='font-bold'>Or,</h2>
                <p>Add me socials</p>
                <div className="flex flex-row gap-4 pt-4 place-content-center">

                  <div className='text-2xl text-center p-2 space-x-4 dark:bg-fuchsia-800 dark:bg-opacity-40'>
                    <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'> <FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/Tunzir12" target='_blank'> <FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://github.com/Tunzir12" target='_blank'> <FontAwesomeIcon icon={faEnvelope} /></a>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="text-center pt-10">
        <span className='text-stone-900'>Visit My <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'>Linkedin</a> or <a href="https://github.com/Tunzir12" target='_blank'>Github</a> page.</span>
      </div>
      
    </div>
    
  )
}

export default Contact