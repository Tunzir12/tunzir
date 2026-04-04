import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Project from './pages/project.jsx'
import Contact from './pages/contact.jsx'
import Blog from './pages/blog.jsx'
import './index.css'

//using hashrouter for github
import { Route, Routes, HashRouter} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
      <Routes>
          <Route path='/' element={< App />}/>
          <Route path='/blog' element={< Blog />}/>
          <Route path='/project' element={< Project />}/>
          <Route path='/contact' element={< Contact />}/>
      </Routes>
      </HashRouter>
  </StrictMode>,
)
