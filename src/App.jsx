import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Project from './pages/project'
import Contact from './pages/contact'
import Skill from './pages/skills'

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Project />
      <Contact />
      <Skill />
    </div>
  )
}

export default App