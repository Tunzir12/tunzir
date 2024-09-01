import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//using hashrouter for github
import { Route, Routes, HashRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
      <Routes>
        <Route path='/' element={< App />}/>

      </Routes>
      </HashRouter>
  </StrictMode>,
)
