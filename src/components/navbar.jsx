import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logoutUser } = useContext(AuthContext)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }

    const navLinks = [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/project' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ]
  
    return (
      <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 dark:from-fuchsia-500 dark:to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition">
              Maliha
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-700 dark:text-gray-300 font-semibold hover:text-orange-600 dark:hover:text-fuchsia-400 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {user && (
                <>
                  <li>
                    <Link 
                      to="/admin-dashboard"
                      className="text-gray-700 dark:text-gray-300 font-semibold hover:text-orange-600 dark:hover:text-fuchsia-400 transition duration-300"
                    >
                      Admin
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logoutUser}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
              {!user && (
                <li>
                  <Link 
                    to="/admin-login"
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300"
                  >
                    Admin Login
                  </Link>
                </li>
              )}
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden flex flex-col space-y-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-700 dark:text-gray-300 font-semibold hover:text-orange-600 dark:hover:text-fuchsia-400 transition duration-300 block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {user && (
                <>
                  <li>
                    <Link 
                      to="/admin-dashboard"
                      className="text-gray-700 dark:text-gray-300 font-semibold hover:text-orange-600 dark:hover:text-fuchsia-400 transition duration-300 block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        logoutUser()
                        setIsOpen(false)
                      }}
                      className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
              {!user && (
                <li>
                  <Link 
                    to="/admin-login"
                    className="block px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Login
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </nav>
    )
}

export default Navbar