
import './App.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
    <div className="container h-screen max-w-full">
      <nav className='font-bebas'>
        <div className="flex justify-between items-center px-4 py-2 text-2xl">
          <Link to="/" className='font-logo text-3xl font-extrabold'>MT</Link>
          <div className="space-x-10">
            <Link to="/about" className='hover:outline outline-offset-4'>About Me</Link>
            <Link to="/blog" className='hover:outline outline-offset-4'>Blog</Link>
            <Link to="/contact" className='hover:outline outline-offset-4'>Contact</Link>
          </div>
        </div>
      </nav>
      <section className='justify-center p-10'>
        <div className="p-4 font-nanum text-3xl ">
          <h1 className='font-nerko p-6 text-4xl '>Hello! this is Maliha Tunzira.</h1>
          <p className='text-3xl'> Welcome to my page!
            <br />
            This project is for self-learning projects. Where I learn different functions and its use everyday. If some pages are not working then it is under construction.
            </p>
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
