
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="container h-screen">
      <nav className='bg-purple-300 '>
        <div className="flex flex-row">
          <Link to="/" className='basis-1/4'>Home</Link>
          <Link to="/about" className='basis-1/3'>About</Link>
          <Link to="/blog" className='basis-1/3'>Blog</Link>
          <Link to="/contact" className='basis-1/3'>Contact</Link>
        </div>
      </nav>
      <div className="section">
        
          <h1>Hello! this is Maliha Tunzira.</h1>
          <p className='text-3xl'>I dont know what to write. but I am not going to be anxious. I will write whatever i want and move on. because i am not publishing it yet</p>
      </div>
    </div>
    </>
  )
}

export default App
