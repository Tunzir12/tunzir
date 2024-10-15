import { useState } from 'react'
import sun from '../assets/Sun.svg'
import moon from '../assets/Moon.svg'

const ModeSwitch = () => {
    
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

          <div className="navbar p-14 max-w-5xl text-left">
          <button onClick={toggleDark} className='' >
              {darkMode? <img src={sun} alt="sun" /> : <img src={moon} alt="moon" /> }
          </button>
          </div>

    </div>
  )
}

export default ModeSwitch