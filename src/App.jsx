
import './App.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profile from './assets/profile.jpeg'

function App() {

  return (
    <>
    <div className="h-screen">

      <nav className='font-open'>
          <div className="space-x-32 font-bold text-2xl">
            <Link to="/" className='hover:outline outline-offset-8 rounded-lg'>Home</Link>
            <Link to="/about" className='hover:outline outline-offset-8 rounded-lg'>About Me</Link>
            <Link to="/project" className='hover:outline outline-offset-8 rounded-lg' >Projects</Link>
            <Link to="/contact" className='hover:outline outline-offset-8 rounded-lg'>Contact</Link>
          </div>
      </nav>

      <section className='pt-32 pr-28 pl-28 grid grid-cols-4'>
        <div className=" pt-48 pl-16 text-left font-sans text-3xl col-span-3 ">
          <h1 className='font-open font-bold text-4xl '>Hi! I am <span className='name'>Maliha Tunzira</span>.</h1>
          <p className='text-xl'>
             As a software engineer, I am passionate about creating software solutions that are user-friendly, accessible and environmental friendly.
            </p>
        </div>

        <div className='col-span-1'>
          <img src={profile} alt='profile pic' className='object-fit rounded-xl'/>
        </div>
      </section>

      <section>
        <div className="skill text-left p-20">
          <h2 className='text-4xl'>Skills</h2>
        </div>
      </section>

      <footer className='font-nanum'>
        <div className="p-20 flex flex-row space-x-6 justify-center text-xl">
          <span>Follow me on: </span>
          <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank' className=''>
            < FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          <a href="https://github.com/Tunzir12" target='_blank' className=''>
             <FontAwesomeIcon icon={faGithub} />
          </a>
          <button className='bg-blue-500 hover: outline outline-offset-8'>
            Ask for CV
          </button>
        </div>
      </footer>

    </div>
    </>
  )
}

export default App
