import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

const Navbar = () => {
    
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
    <div>
        <nav className='font-open dark:text-purple-500'>
            <div className="space-x-48 font-bold ">
                <Link to="/" className='hover:outline outline-offset-8 rounded-lg'>Home</Link>
                <Link to="/about" className='hover:outline outline-offset-8 rounded-lg'>About Me</Link>
                <Link to="/project" className='hover:outline outline-offset-8 rounded-lg' >Projects</Link>
                <Link to="/contact" className='hover:outline outline-offset-8 rounded-lg'>Contact</Link>
                <button onClick={toggleDark}>
            
                    {darkMode? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar