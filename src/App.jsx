
import './App.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ModeSwitch from './components/navbar'


function App() {

  return (

    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-neutral-50 to-90% dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-blue-950 dark:text-white">
      < ModeSwitch />

      <div className="grid grid-cols-6 md:max-lg:pt-16">

        {/*social sidebar*/}
        <div className="text-left col-span-1 pt-24 ">
            <ul className='text-2xl w-10 bg-orange-200 dark:bg-fuchsia-600 p-2 space-y-5'>
            <li><a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'> <FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://github.com/Tunzir12" target='_blank'> <FontAwesomeIcon icon={faGithub} />
            </a></li>
            </ul>
        </div>

        {/*Jumbtron */}
        <div className="jumbo col-span-3 text-left pt-20 3xs:max-lg:col-span-5">
          <h1 className='font-bold text-5xl'>Hi ! I am Maliha Tunzira.</h1>
          <p className='text-xl pt-10 pr-10'>Software engineer | I am passionate about creating software solutions that are user-friendly, accessible and environmental friendly.</p>
        </div>

        <div className=" navlinks col-span-2 pt-24 pl-20 pr-10 md:max-lg:pl-10 lg:max-xl:pt-20 3xs:max-lg:hidden">
          <ul className='space-y-14 text-4xl font-bold'>
            <li className='text-right  hover:text-6xl '>
              <Link to={'/about'} className='ring-offset-4 bg-orange-200 pl-8 pr-8 rounded-2xl dark:bg-fuchsia-800'>About</Link>
            </li>
            <li className='text-right pr-24 hover:text-6xl'>
              <Link to={'/project'} className='ring-offset-4 bg-orange-200 pl-8 pr-8 rounded-2xl dark:bg-fuchsia-800'>Projects</Link>
            </li>
            <li className='text-right text-balance hover:text-6xl'>
              <Link to={'/contact'} className='ring-offset-4 bg-orange-200 pl-8 pr-8 rounded-2xl dark:bg-fuchsia-800'>Contact</Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="p-16 justify-center flex flex-row space-x-10 font-bold 3xs:max-[520px]:pt-10 3xs:max-[520px]:space-x-1 lg:hidden">

          <div className='hover:text-6xl 3xs:max-[520px]:hover:text-2xl'>
            <Link to={'/about'} className='ring-offset-4 bg-orange-200 pl-8 pr-8 rounded-2xl dark:bg-fuchsia-800'>About</Link>
          </div>
          <div className='hover:text-6xl 3xs:max-[520px]:hover:text-2xl'>
            <Link to={'/project'} className='ring-offset-4 bg-orange-200 pl-8 pr-8 rounded-2xl dark:bg-fuchsia-800'>Projects</Link>
          </div>
          <div className='hover:text-6xl 3xs:max-[520px]:hover:text-2xl'>
            <Link to={'/contact'} className='ring-offset-4 bg-orange-200 pl-8 pr-8 rounded-2xl dark:bg-fuchsia-800'>Contact</Link>
          </div> 

      </div>

    </div>
  )
}

export default App
