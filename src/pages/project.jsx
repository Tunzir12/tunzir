import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import ModeSwitch from '../components/navbar'


const Project = () => {


  return (

    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-neutral-50 to-90% dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-blue-950 dark:text-white">
      <ModeSwitch />

      {/*Navbar */}
      <div className="navlink grid grid-cols-2 font-bold">
        <div className="col-p-1 text-left">
          <Link to={'/'} className='pl-32 3xs:max-sm:pl-6'>Home</Link>
        </div>

        <div className="col-p-1 text-right ">
          <Link to={'/contact'} className='pr-32 3xs:max-sm:pr-6'>Contact</Link>
        </div>
      </div>

      {/*Body */}
      <div className="pl-32 pr-32 pt-10 text-left 3xs:max-sm:pl-10 3xs:max-sm:pr-10">
        <div className="grid grid-cols-2 gap-3  3xs:max-lg:flex  3xs:max-lg:flex-col">
          {/*project 1 */}
          <div className="details p-10 space-y-4 col-span-1 rounded-lg  bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40">
              <h1 className='font-bold text-xl'>Python-Data-Analysis</h1>
              <div className="flex flex-row space-x-6 3xs:max-[654px]:flex-wrap">
                <h1 className='font-bold'>Tools</h1>
                <span>Python</span>
              </div>
              <p>This is a responsive online portfolio built using Vite and React.js. The tech stack includes HTML, CSS, Tailwind CSS, JavaScript, and React Router Dom for navigation. </p>
              <button className='p-4 bg-orange-50 rounded-lg dark:bg-fuchsia-800 dark:bg-opacity-40'><a href="https://github.com/Tunzir12/Python-Data-Analysis" target='_blank'>View the project on github</a></button>
            </div>

        {/*project 2 */}
          <div className="details p-10 space-y-4 col-span-1 rounded-lg  bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40">
              <h1 className='font-bold text-xl'>Online Portfolio</h1>
              <div className="flex flex-row space-x-6 3xs:max-[654px]:flex-wrap">
                <h1 className='font-bold'>Tools</h1>
                <span>JavaScript</span>
                <span>Vite</span>
                <span>React.JS</span>
                <span>Figma</span>
              </div>
              <p>This is a responsive online portfolio built using Vite and React.js. The tech stack includes HTML, CSS, Tailwind CSS, JavaScript, and React Router Dom for navigation. </p>
              <button className='p-4 bg-orange-50 rounded-lg dark:bg-fuchsia-800 dark:bg-opacity-40'><a href="https://github.com/Tunzir12/tunzir" target='_blank'>View the project on github</a></button>
            </div>

          {/*project 3 */}
            <div className="details p-10 space-y-4 col-span-1 rounded-lg bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40">
              <h1 className='font-bold text-xl'>Text-editor</h1>
              <div className="flex flex-row space-x-6">
                <h1 className='font-bold'>Tools</h1>
                <span>C++</span>
              </div>
              <p>The text-editor is a module developed using C++ in the Visual Studio Code IDE. It leverages C++'s standard library, containers, and algorithms to provide a range of text manipulation functionalities.</p>
              <button className='p-4 bg-orange-50 rounded-lg dark:bg-fuchsia-800 dark:bg-opacity-40'><a href="https://github.com/Tunzir12/Text-editor" target='_blank'>View the project on github</a></button>
            </div>

          </div>
          

      </div>

      <div className="footer text-center pt-10">
        <span className=''>Visit My <a href="https://github.com/Tunzir12" target='_blank'>Github</a> page for more projects</span>
      </div>
      
    </div>
    
  )
}

export default Project