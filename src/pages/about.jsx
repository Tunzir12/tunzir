import React from 'react'
import '../App.css'
import SkillBar from '../components/skillbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/navbar'

const About = () => {
  const skills = [
    { skill: 'JavaScript', level: 90, color:'#518945' },
    { skill: 'React', level: 85, color:'#7b3b16' },
    { skill: 'C++', level: 90, color:'blue' },
    { skill: 'Python', level: 75, color:'pink' },
    { skill: 'Tailwind CSS', level: 70, color:'teal' },
  ];

  return (
    <div className="container h-screen dark:bg-blue-950">
    <Navbar />

    <section className='pt-8 p-20'>
      <div className="objective p-16 dark:text-white">
        <h1 className='text-3xl text-left pl-8 font-bold'>About me</h1>
        <div className="aboutme dark:bg-purple-950">
        <p className='text-xl'>Hi! I am Maliha, currently pursuing a Master's in Computer Science at Linköping University, building on a solid foundation from my Bachelor's in Computer Science and Engineering from East West University. Being experienced in software quality assurance, with a background in manual testing, API testing, and performance testing, I am proficient in programming languages including Python, C++, JavaScript, and React.js. </p>
        </div>
      </div>
    </section>

    <section>
      <div className="skills p-16 dark:text-white">
      <h1 className='text-3xl text-left pl-8 font-bold'>Skills</h1>

        <div className="skillbar text-left">
          {skills.map((skillObj, index) => (
          <SkillBar key={index} skill={skillObj.skill} level={skillObj.level} color={skillObj.color}/>
          ))}
        </div>
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