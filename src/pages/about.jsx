import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faMoon } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import ModeSwitch from '../components/navbar'


const About = () => {

  {/*Random skill box colors */}
  const skills = ['C', 'C++' , 'Python' ,'JavaScript', 'PHP' , 'HTML' , 'CSS' , 'R', 'Laravel' , 'React.js' , 'Express.js' , 'Bootstrap CSS' , 'TailwindCSS' , 'Linux','Windows', 'SQL', 'MySQL', 'PostgreSQL',' Manual testing', 'API testing', 'Black-Box Testing' , 'White-Box Testing', 'Jira', 'Jmeter', 'Selenium','Vscode', 'eclipse', 'codeblocks','Adobe Photoshop', 'Adobe XD', 'Figma', 'MS Office suite', 'Google suite',
    'Blender 3D']

  const getRandomColor = () =>{
    const colors = ['#f099a6','#da6df2','#6d71f2','#f2a26d','#42a5a8','#9942a8','#c6c78b' ,'#FF5733', '#33FFBD', '#FF33A6', '#335BFF', '#FFD133',  '#8E44AD', '#E74C3C', '#2980B9', '#27AE60']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (

    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-neutral-50 to-90% dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-blue-950 dark:text-white">
      <ModeSwitch />

      {/*Navbar */}
      <div className="navlink grid grid-cols-2 font-bold">
        <div className="col-p-1 text-left">
          <Link to={'/'} className='pl-32'>Home</Link>
        </div>

        <div className="col-p-1 text-right ">
          <Link to={'/project'} className='pr-32'>Project</Link>
        </div>
      </div>

      {/*About me section*/}
      <div className="pt-10 pl-32 pr-32 pb-10 text-left ">
      <h1 className='font-bold text-2xl pb-10'><FontAwesomeIcon icon={faCircleDot} /> About me</h1>
        <div className='bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40 p-4'>
        
        <p className='aboutme'>Hi there! I'm Maliha Tunzira, a Computer Science graduate student at Linköping University with a passion for technology and a knack for problem-solving. My journey in tech has been fueled by curiosity and a desire to create meaningful solutions that make a difference.<br /><br />When I'm not coding or testing software, you can find me indulging in my hobbies. I love watching movies and documentaries, exploring new cultures through travel, playing video games, and experimenting in the kitchen with new recipes. These interests not only keep me entertained but also inspire my creativity in tech. <br /><br />I'm always eager to expand my skill set and stay updated on the latest trends in technology. You can check out my projects on GitHub at <a target='_blank' href="https:/github.com/Tunzir12">github.com/Tunzir12</a>, where I showcase my work and the technologies I'm passionate about.</p>
      </div>
      </div>

      {/*Skill section */}
      <div className="pl-32 pr-32 pb-16 text-left">
        <h1 className='font-bold text-2xl pb-10'><FontAwesomeIcon icon={faCircleDot} /> Skills</h1>
        <div className="p-4  font-bold grid grid-cols-7 gap-4">

          {skills.map((skill,index) => (
            <p
            key={index}
            className='p-2 rounded-md text-center'
            style={{ backgroundColor: getRandomColor() }}  // Apply random background color
            >
            {skill}
            </p>
          ))}
        </div>
      </div>

      {/*Experience Section */}
      <div className="pl-32 pr-32 pb-28 text-left">
      <h1 className='font-bold text-2xl pb-10'><FontAwesomeIcon icon={faCircleDot} /> Experience</h1>

        <div className="details p-10 bg-trans-box bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40">
          <h1 className='font-bold'>QA Automation Engineer - Internship</h1>
          <h1 className='font-bold'>A1QA</h1>
          <h1 className='font-bold'>January, 2023 - April, 2023</h1>
          <p className='pt-4'>During my internship at A1QA, I worked as a QA Automation Engineer, focusing on web scraping projects using JavaScript to extract and analyze data from websites. This role allowed me to develop my skills in automation and data analysis. I actively contributed to the quality assurance process by assisting in writing and maintaining test cases, as well as executing regression tests. My efforts helped in identifying and resolving critical bugs, which improved overall software stability and functionality.</p>
        </div>
        <div className="details pl-10 pr-10 pb-10 bg-trans-box bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40">
          <h1 className='font-bold'>Trainee QA Engineer</h1>
          <h1 className='font-bold'>Vcube Soft and Tech</h1>
          <h1 className='font-bold'>October, 2021 - October, 2022</h1>
          <p className='pt-4'>As a Trainee QA Engineer at Vcube Soft and Tech, I gained valuable experience in software quality assurance over a year-long period. My responsibilities included close collaboration with the development team to understand project requirements and verify software functionality. I developed comprehensive test plans and cases, executed test scripts, and provided detailed test reports. One of my key achievements was improving testing efficiency by automating manual tests, which significantly reduced testing time and increased overall productivity. This role enhanced my skills in test planning, execution, and automation, while also strengthening my ability to work effectively in a team environment.</p>
        </div>

      </div>


    </div>
    
  )
}

export default About