import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './pages/about.jsx'
import Blog from './pages/blog.jsx'
import Contact from './pages/contact.jsx'
import './index.css'

//using hashrouter for github
import { Route, Routes, HashRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
      <Routes>
          <Route path='/' element={< App />}/>
          <Route path='/blog' element={< Blog />}/>
          <Route path='/about' element={< About />}/>
          <Route path='/contact' element={< Contact />}/>
      </Routes>
      </HashRouter>
  </StrictMode>,
)
