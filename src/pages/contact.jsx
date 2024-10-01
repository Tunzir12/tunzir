import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import ModeSwitch from '../components/navbar'


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
      <div className="pl-32 pt-20 pr-32 pb-10 ">        
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
            <div className="text-right ">
            <button className='font-bold p-2 w-1/3 bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40'>Submit</button>

            </div>
          </div>
          
          <div className="pr-40 pt-12 col-span-1 ">
            <div className="p-10 bg-orange-200">
              <div className="social">
                <h2>Or,</h2>
                <p>Add me socials</p>
                <div className="flex flex-row gap-4 pt-4 place-content-center">

                  <div className='text-2xl ring-offset-4 text-center bg-white bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40'>
                  <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'> <FontAwesomeIcon icon={faLinkedin} /></a>
                  </div>
                  <div className='text-2xl bg-orange-200 dark:bg-fuchsia-600 p-2'>
                  <a href="https://github.com/Tunzir12" target='_blank'> <FontAwesomeIcon icon={faGithub} /></a>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="text-center pt-2">
        <span className='text-stone-900'>Visit My <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'>Linkedin</a> or <a href="https://github.com/Tunzir12" target='_blank'>Github</a> page.</span>
      </div>
      
    </div>
    
  )
}

export default Contact