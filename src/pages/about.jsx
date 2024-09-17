import React from 'react'
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/navbar'

const About = () => {
  return (
    <div className="container h-screen dark:bg-slate-700">
    <Navbar />

    <section className='grid grid-cols-3'>
      <div className="objective col-span-2 dark:text-white">
        <p>I am Maliha, a passionate software engineer, based on Linkoping, Sweden, originally from Dhaka, Bangladesh. I moved to Sweden to pursue Master's degree in Computer Science in 2023, since then I fell in love with the nature and its people. </p>
      </div>
      <div className="linkoping">
        <img src="" alt="" />
      </div>
    </section>

    <section>
      <div className="skills">

      </div>
    </section>

    <section>
      <div className="hobbies">

      </div>
    </section>

    </div>
  )
}

export default About