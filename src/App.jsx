
import './App.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import Navbar from './components/navbar'


function App() {

  return (

    <div className="h-screen">

      <div className="navbar p-14 max-w-5xl text-left">
        <FontAwesomeIcon className='text-2xl' icon={faMoon} />
      </div>


      <div className="grid grid-cols-6">

        {/*social sidebar*/}
        <div className="text-left col-span-1 pt-20">
            <ul className='text-2xl p-1 space-y-3'>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
            <li><FontAwesomeIcon icon={faGithub} /></li>
            </ul>
        </div>

          {/*Jumbtron */}
          <div className="jumbo col-span-3 text-left pt-20">
            <h1 className='font-bold text-5xl'>Hi ! I am Maliha Tunzira.</h1>
            <p className='text-xl pt-10 pr-10'>Software engineer | I am passionate about creating software solutions that are user-friendly, accessible and environmental friendly.</p>
          </div>

        <div className="col-span-2 pt-24 pl-20 pr-10">
          <ul className='space-y-14 text-4xl font-bold'>
          <li className='text-right'>
            <Link className='bg-red-500 pl-4 pr-4 rounded-2xl'>About</Link>
          </li>
          <li className='text-right pr-24'><Link className='bg-red-500 pl-4 pr-4 rounded-2xl'>Projects</Link></li>
          <li className='text-right'><Link className='bg-red-500 pl-4 pr-4 rounded-2xl'>Contact</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default App
