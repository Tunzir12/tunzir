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
          <Link to={'/'} className='pl-32'>Home</Link>
        </div>

        <div className="col-p-1 text-right ">
          <Link to={'/contact'} className='pr-32'>Contact</Link>
        </div>
      </div>

      {/*Body */}
      <div className="p-32 text-left">
        <div className="grid grid-cols-2 gap-3">
          {/*project 1 */}
          <div className="details p-10 bg-trans-box space-y-4 col-span-1">
              <h1 className='font-bold text-xl'>Online Portfolio</h1>
              <div className="flex flex-row space-x-6">
                <h1 className='font-bold'>Tools</h1>
                <span>JavaScript</span>
                <span>Vite</span>
                <span>React.JS</span>
                <span>Figma</span>
              </div>
              <p>This is a responsive online portfolio built using Vite and React.js. The tech stack includes HTML, CSS, Tailwind CSS, JavaScript, and React Router Dom for navigation. By developing this project from scratch, I've enhanced my skills in modern web design, front-end development, and deployment processes. Through this project, I've gained valuable experience in creating responsive layouts, implementing smooth user interactions, and optimizing performance using Vite's build tools. The source code is managed using Git, allowing for version control and easy updates. </p>
              <button className='p-4 bg-ghiya'><a href="https://github.com/Tunzir12/tunzir" target='_blank'>View the project on github</a></button>
            </div>

          {/*project 1 */}
            <div className="details p-10 bg-trans-box space-y-4 col-span-1">
              <h1 className='font-bold text-xl'>Text-editor</h1>
              <div className="flex flex-row space-x-6">
                <h1 className='font-bold'>Tools</h1>
                <span>C++</span>
              </div>
              <p>The text-editor is a module developed using C++ in the Visual Studio Code IDE. It leverages C++'s standard library, containers, and algorithms to provide a range of text manipulation functionalities. The key features of this text editor include: Text search functionality, Text removal capabilities, Text replacement options, Text printing from files. One of the significant aspects of this project is its modularity and extensibility. It allows other developers to easily add to the codebase, implement new features, and improve existing ones.</p>
              <button className='p-4 bg-ghiya'><a href="https://github.com/Tunzir12/Text-editor" target='_blank'>View the project on github</a></button>
            </div>

          </div>
          

      </div>

      <div className="footer text-center p-4">
        <span className='text-ghiya'>Visit My <a href="https://github.com/Tunzir12" target='_blank'>Github</a> page for more projects</span>
      </div>
      
    </div>
    
  )
}

export default Project