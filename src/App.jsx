
import './App.css'
import { Link } from 'react-router-dom'

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
      </div>
      </section>
    </div>
    </>
  )
}

export default App
