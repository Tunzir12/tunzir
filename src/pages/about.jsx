import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faMoon } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'


const About = () => {

  {/*Random skill box colors */}
  const skills = ['C', 'C++' , 'Python' ,'JavaScript', 'PHP' , 'HTML' , 'CSS' , 'R', 'Laravel' , 'React.js' , 'Express.js' , 'Bootstrap CSS' , 'TailwindCSS' , 'Linux','Windows', 'SQL', 'MySQL', 'PostgreSQL',' Manual testing', 'API testing', 'Black-Box Testing' , 'White-Box Testing', 'Jira', 'Jmeter', 'Selenium','Vscode', 'eclipse', 'codeblocks','Adobe Photoshop', 'Adobe XD', 'Figma', 'MS Office suite', 'Google suite',
    'Blender 3D']

  const getRandomColor = () =>{
    const colors = ['#f099a6','#da6df2','#6d71f2','#f2a26d','#42a5a8','#9942a8','#c6c78b' ,'#FF5733', '#33FFBD', '#FF33A6', '#335BFF', '#FFD133',  '#8E44AD', '#E74C3C', '#2980B9', '#27AE60']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (

    <div className="min-h-screen bg-gradient-to-r from-Beige to-white to-90%">
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
          <Link to={'/project'} className='pr-32'>Project</Link>
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

        <div className="details p-10 bg-trans-box">
          <h1 className='font-bold'>Trainee QA Engineer</h1>
          <h1 className='font-bold'>Vcube SOft & Tech</h1>
          <h1 className='font-bold'>October,2021 - October,2022</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque harum doloribus asperiores soluta rem impedit delectus culpa commodi suscipit, tempora eaque voluptatem odio ipsa veniam ea corrupti iusto odit!</p>
        </div>
        <div className="details p-10 bg-trans-box">
          <h1 className='font-bold'>QA Engineer</h1>
          <h1 className='font-bold'>Company name</h1>
          <h1 className='font-bold'>Duration</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque harum doloribus asperiores soluta rem impedit delectus culpa commodi suscipit, tempora eaque voluptatem odio ipsa veniam ea corrupti iusto odit!</p>
        </div>
        <div className="details p-10 bg-trans-box">
          <h1 className='font-bold'>QA Engineer</h1>
          <h1 className='font-bold'>Company name</h1>
          <h1 className='font-bold'>Duration</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque harum doloribus asperiores soluta rem impedit delectus culpa commodi suscipit, tempora eaque voluptatem odio ipsa veniam ea corrupti iusto odit!</p>
        </div>

      </div>


    </div>
    
  )
}

export default About