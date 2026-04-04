import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Project from './pages/project.jsx'
import Contact from './pages/contact.jsx'
import Blog from './pages/blog.jsx'
import AdminLogin from './pages/admin-login.jsx'
import AdminDashboard from './pages/admin-dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'

//using hashrouter for github
import { Route, Routes, HashRouter} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
            <Route path='/' element={< App />}/>
            <Route path='/blog' element={< Blog />}/>
            <Route path='/project' element={< Project />}/>
            <Route path='/contact' element={< Contact />}/>
            <Route path='/admin-login' element={<AdminLogin />}/>
            <Route path='/admin-dashboard' element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}/>
        </Routes>
        </HashRouter>
      </AuthProvider>
  </StrictMode>,
)

