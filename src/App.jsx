
import './App.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profile from './assets/profile.jpeg'

function App() {

  return (
    <>
    <div className="container h-screen">

      <nav className='font-bebas'>
          
          <div className="space-x-32 text-2xl">
            <Link to="/" className='hover:outline outline-offset-8 rounded-lg'>Home</Link>
            <Link to="/about" className='hover:outline outline-offset-8 rounded-lg'>About Me</Link>
            <Link to="/project" className='hover:outline outline-offset-8 rounded-lg' >Projects</Link>
            <Link to="/contact" className='hover:outline outline-offset-8 rounded-lg'>Contact</Link>
          </div>
      </nav>

      <section className='p-10 grid grid-cols-3'>
        <div className="p-4 font-sans text-3xl col-span-2 ">
          <h1 className='font-nerko p-6 text-4xl '>Hello! this is Maliha Tunzira.</h1>
          <p className='text-3xl'> Welcome to my page!
            <br />
            This project is for self-learning projects. Where I learn different functions and its use everyday. If some pages are not working then it is under construction.
            </p>
      </div>

      <div className='col-span-1'>
        <img src={profile} alt='profile pic' className='object-fit rounded-xl'/>
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
          <button className='bg-blue-500'>
            Ask for CV
          </button>
        </div>
      </footer>

    </div>
    </>
  )
}

export default App
