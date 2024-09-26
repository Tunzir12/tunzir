import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faMoon } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className="h-screen">
      {/*switch to dark mode */}
      <div className="navbar p-14 text-left">
        <FontAwesomeIcon className='text-2xl' icon={faMoon} />
      </div>

      {/*Navbar */}
      <div className="navlink grid grid-cols-2 font-bold">
        <div className="col-p-1 text-left">
          <Link to={'/'} className='pl-32'>Home</Link>
        </div>
        <div className="col-p-1 text-right ">
          <Link to={'/contact'} className='pr-32'>Contact</Link>
        </div>
      </div>

      {/*About me section*/}
      <div className="p-32 text-left">
        <h1 className='font-bold text-2xl pb-10'><FontAwesomeIcon icon={faCircleDot} /> About me</h1>
        <p className='aboutme'>Hi there! I'm Maliha Tunzira, a Computer Science graduate student at Linköping University with a passion for technology and a knack for problem-solving. My journey in tech has been fueled by curiosity and a desire to create meaningful solutions that make a difference.<br /><br />When I'm not coding or testing software, you can find me indulging in my hobbies. I love watching movies and documentaries, exploring new cultures through travel, playing video games, and experimenting in the kitchen with new recipes. These interests not only keep me entertained but also inspire my creativity in tech. <br /><br />I'm always eager to expand my skill set and stay updated on the latest trends in technology. You can check out my projects on GitHub at <a target='_blank' href="https:/github.com/Tunzir12">github.com/Tunzir12</a>, where I showcase my work and the technologies I'm passionate about.</p>
      </div>

      {/*Skill section */}
      <div className="pl-32 pr-32 pb-28 text-left">
        <h1 className='font-bold text-2xl pb-10'><FontAwesomeIcon icon={faCircleDot} /> Skills</h1>
        <div className="p-4  font-bold grid grid-cols-7 gap-4">

          <p className='p-2 rounded-md bg-cyan-600'>C</p>
          <p className='rounded-md bg-pink-400'>C++</p>
          <p className='p-2 rounded-md bg-teal-500'>JavaScript</p>
          <p className='p-2 rounded-md bg-green-500'>Python</p>
          <p className='p-2 rounded-md bg-yellow-200'>HTML</p>
          <p className='p-2 rounded-md bg-emerald-300'>CSS</p>
          <p className='p-2 rounded-md bg-orange-300'>PHP</p>
          <p className='p-2 rounded-md bg-lime-500'>React.JS</p>
          <p className='p-2 rounded-md bg-cyan-600'>Express.JS</p>
          <p className='p-2 rounded-md bg-fuchsia-500'>Bootstrap</p>
          <p className='p-2 rounded-md bg-red-400'>TailwindCSS</p>
          <p className='p-2 rounded-md bg-pink-400'>C++</p>
          <p className='p-2 rounded-md bg-teal-500'>JavaScript</p>
          <p className='p-2 rounded-md bg-green-500'>Python</p>
          <p className='p-2 rounded-md bg-yellow-200'>HTML</p>
          <p className='p-2 rounded-md bg-emerald-300'>CSS</p>
          <p className='p-2 rounded-md bg-orange-300'>PHP</p>
          <p className='p-2 rounded-md bg-lime-500'>React.JS</p>
          <p className='p-2 rounded-md bg-fuchsia-500'>Bootstrap</p>
        </div>
      </div>

      {/*Experience Section */}
      <div className="pl-32 pr-32 pb-28 text-left">
        <div className="p-10 bg-orange-400">
          <table className='w-auto'>
            <tr className=''>
              <th>Position</th>
              <td>QA Engineer</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>QA Engineer</td>
            </tr>
            <tr>
              <th>Duration</th>
              <td>QA Engineer</td>
            </tr>
            <tr>
              <th>Responsibilities</th>
              <td>QA Engineer</td>
            </tr>
          </table>
        </div>
      </div>


    </div>
    
  )
}

export default About