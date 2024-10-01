import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

const ModeSwitch = () => {
    
    const [darkMode, setDarkMode] = useState(false)

    const toggleDark = () => {
      // Toggle the data attribute on the root element for dark mode
     
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);

    }
  
  return (
    <div>

          <div className="navbar p-14 max-w-5xl text-2xl text-left">
          <button onClick={toggleDark}>
              {darkMode? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}
          </button>
          </div>

    </div>
  )
}

export default ModeSwitch