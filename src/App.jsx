
import './App.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
    <div className="container h-screen">
      <nav className=' bg-white font-bebas p-10'>
        <div className="flex flex-row font-bold text-2xl">
          <Link to="/" className='basis-1/4 font-logo text-3xl font-extrabold'>MT</Link>
          <Link to="/about" className='basis-1/3'>About Me</Link>
          <Link to="/blog" className='basis-1/3'>Blog</Link>
          <Link to="/contact" className='basis-1/3'>Contact</Link>
        </div>
      </nav>
      <section className='justify-center'>
        <div className="p-4 font-nanum text-3xl ">
          <h1 className='font-nerko p-6 text-4xl text-purple-600'>Hello! this is Maliha Tunzira.</h1>
          <p className='text-3xl'> Welcome to my page!
            <br />
            This project is for self-learning projects. Where I learn different functions and its use everyday. If some pages are not working then it is under construction.
            </p>
      </div>
      </section>
      <footer className='font-nanum'>
        <div className="p-20 flex flex-row space-x-6 justify-center text-xl">
          <span>Follow me on: </span>
          <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank' className='text-purple-600'>
            < FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          <a href="https://github.com/Tunzir12" target='_blank' className='text-purple-600'>
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
