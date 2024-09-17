
import './App.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profile from './assets/profile.jpeg'
import { faEnvelope, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import Navbar from './components/navbar'


function App() {

  return (

    <div className="h-screen w-full dark:bg-blue-950">

      < Navbar />

      <section className='pt-32 pr-28 space-x-5 pl-28 grid grid-cols-4'>
        <div className=" pt-48 pl-16 text-left font-sans text-3xl col-span-3 dark:text-white">
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


      <footer className='font-nanum fixed bottom-0 w-full'>
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
