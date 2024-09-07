
import './App.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
    <div className="container h-screen">
      <nav className=' bg-white font-nanum'>
        <div className="flex flex-row font-bold  text-3xl">
          <Link to="/" className='basis-1/4'>Home</Link>
          <Link to="/about" className='basis-1/3'>About</Link>
          <Link to="/blog" className='basis-1/3'>Blog</Link>
          <Link to="/contact" className='basis-1/3'>Contact</Link>
        </div>
      </nav>
      <section>
        <div className="p-4">
          <h1 className='font-nerko p-6 text-4xl'>Hello! this is Maliha Tunzira.</h1>
          <p className='text-xl'> Welcome to my page!
            <br />
            This project is for self-learning projects. Where I learn different functions and its use everyday. If some page is not working then it is under construction.
            </p>
            <p>why footer is not showing at all</p>
      </div>
      </section>
      <footer>
        <div className="p-20 flex flex-row space-x-6 justify-center text-xl">
          <caption>Follow me on: </caption>
          <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'>
            < FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          <p>why footer is not showing at all</p>
          <a href="https://github.com/Tunzir12" target='_blank'>
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
