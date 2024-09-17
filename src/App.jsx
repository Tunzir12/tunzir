
import './App.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profile from './assets/profile.jpeg'
import { faEnvelope, faHandPointRight, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'


function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDark = () => {
    setDarkMode(!darkMode);
    // Toggle the data attribute on the root element for dark mode
    if (darkMode) {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  return (

    <div className="h-screen w-full dark:bg-blue-950">

      <nav className='font-open dark:text-purple-500'>
          <div className="space-x-48 font-bold text-2xl">
            <Link to="/" className='hover:outline outline-offset-8 rounded-lg'>Home</Link>
            <Link to="/about" className='hover:outline outline-offset-8 rounded-lg'>About Me</Link>
            <Link to="/project" className='hover:outline outline-offset-8 rounded-lg' >Projects</Link>
            <Link to="/contact" className='hover:outline outline-offset-8 rounded-lg'>Contact</Link>
            <button onClick={toggleDark}>
              
              {darkMode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}
            </button>
          </div>
      </nav>

      <section className='pt-32 pr-28 space-x-5 pl-28 grid grid-cols-4'>
        <div className=" pt-48 pl-16 text-left font-sans text-3xl col-span-3 ">
          <h1 className='font-open font-bold text-5xl '>Hi! I am <span className='name'>Maliha Tunzira</span>.</h1>
          <p className='text-xl'>
             Software engineer | I am passionate about creating software solutions that are user-friendly, accessible and environmental friendly.
            </p>
          <button className='rounded-lg' >
            <Link to="/about" className='' >
            Learn more about me.
            </Link>
            

          </button>
        </div>

        <div className='col-span-1'>
          <img src={profile} alt='profile pic' className='object-fit rounded-xl'/>
        </div>
      </section>


      <footer className='font-nanum bg-gray-100 fixed bottom-0 w-full'>
        <div className=" flex flex-start space-x-6 justify-center text-xl">
          <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank' className=''>
            < FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank' className=''>
            < FontAwesomeIcon icon={faEnvelope} /> 
          </a>
          <a href="https://github.com/Tunzir12" target='_blank' className=''>
             <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>

    </div>
  )
}

export default App
