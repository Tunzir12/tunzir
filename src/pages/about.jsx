import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot,  } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import ModeSwitch from '../components/navbar'


const About = () => {

  {/*Random skill box colors */}
  const plskills = ['JavaScript', 'C++' , 'Python' , 'PHP','R' ]
  const webskills = ['HTML' , 'CSS' , 'React.js' , 'Next.js', 'Node.js', 'Angular', 'Express.js' , 'Bootstrap CSS' , 'TailwindCSS',  'Laravel', 'FLask' ]
  const sqldata = ['MySQL', 'PostgreSQL', 'Firebase']
  const testskills = ['Manual testing', 'API testing', 'Black-Box Testing' , 'White-Box Testing', 'Jira', 'Jmeter', 'Selenium']
  const softskills = ['Vscode', 'eclipse', 'codeblocks','Adobe Photoshop', 'Adobe XD', 'Figma', 'MS Office suite', 'Google suite',
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
          <Link to={'/'} className='pl-32 3xs:max-sm:pl-6 '>Home</Link>
        </div>

        <div className="col-p-1 text-right ">
          <Link to={'/project'} className='pr-32 3xs:max-sm:pr-6 '>Project</Link>
        </div>
      </div>

      {/*About me section*/}
      <div className="pt-10 pl-32 pr-32 pb-10 text-left 3xs:max-sm:pl-10 3xs:max-sm:pr-10">
      <h1 className='font-bold text-2xl pb-10'><FontAwesomeIcon icon={faCircleDot} /> About me</h1>
        <div className='bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40 p-4'>
        
        <p className='aboutme'>Hi there! I'm Maliha Tunzira, a Computer Science graduat, currently doing my master's at Linköping University with a passion for technology and a knack for problem-solving. My journey in tech has been fueled by curiosity and a desire to create meaningful solutions that make a difference.<br /><br />When I'm not coding or testing software, you can find me indulging in my hobbies. I love watching movies and documentaries, exploring new cultures through travel, playing video games, and experimenting in the kitchen with new recipes. These interests not only keep me entertained but also inspire my creativity in tech. <br /><br />I'm always eager to expand my skill set and stay updated on the latest trends in technology. You can check out my projects on GitHub at <a target='_blank' href="https:/github.com/Tunzir12">github.com/Tunzir12</a>, where I showcase my work and the technologies I'm passionate about.</p>
      </div>
      </div>

      {/*Skill section */}
      <div className="pl-32 pr-32 pb-16 text-left 3xs:max-sm:pl-10 3xs:max-sm:pr-10 ">
        <h1 className='font-bold text-2xl pb-10'><FontAwesomeIcon icon={faCircleDot} /> Skills</h1>
        <div className="p-4  font-bold grid grid-cols-7 gap-4 3xs:max-xl:flex 3xs:max-xl:flex-wrap">
          <div className="col-span-1">
            <h4>Programming Languages</h4>
          </div>

          <div className="col-span-6 grid grid-cols-5 gap-4 3xs:max-xl:flex 3xs:max-xl:flex-wrap">
            {plskills.map((plskills,index) => (
              <p
              key={index}
              className='p-2 rounded-md text-center '
              style={{ backgroundColor: getRandomColor() }}  // Apply random background color
              >
              {plskills}
              </p>
            ))}
          </div>

          <div className="col-span-1">
            <h4>Webdevelopment Skills:</h4>
          </div>

          <div className="col-span-6  grid grid-cols-5 gap-4 3xs:max-xl:flex 3xs:max-xl:flex-wrap">
            {webskills.map((webskills,index) => (
              <p
              key={index}
              className='p-2 rounded-md text-center '
              style={{ backgroundColor: getRandomColor() }}  // Apply random background color
              >
              {webskills}
              </p>
            ))}
          </div>


          <div className="col-span-1">
            <h4>SQL and Databases:</h4>
          </div>

          <div className="col-span-6  grid grid-cols-5 gap-4 3xs:max-xl:flex 3xs:max-xl:flex-wrap">
            {sqldata.map((sqldata,index) => (
              <p
              key={index}
              className='p-2 rounded-md text-center '
              style={{ backgroundColor: getRandomColor() }}  // Apply random background color
              >
              {sqldata}
              </p>
            ))}
          </div>

          <div className="col-span-1">
            <h4>Test & Testing Tools:</h4>
          </div>

          <div className="col-span-6  grid grid-cols-5 gap-4 3xs:max-xl:flex 3xs:max-xl:flex-wrap">
            {testskills.map((testskills,index) => (
              <p
              key={index}
              className='p-2 rounded-md text-center '
              style={{ backgroundColor: getRandomColor() }}  // Apply random background color
              >
              {testskills}
              </p>
            ))}
          </div>


          <div className="col-span-1">
            <h4>Software Tools:</h4>
          </div>

          <div className="col-span-6  grid grid-cols-5 gap-4 3xs:max-xl:flex 3xs:max-xl:flex-wrap">
            {softskills.map((softskills,index) => (
              <p
              key={index}
              className='p-2 rounded-md text-center '
              style={{ backgroundColor: getRandomColor() }}  // Apply random background color
              >
              {softskills}
              </p>
            ))}
          </div>


        </div>
      </div>

      {/*Experience Section */}
      <div className="pl-32 pr-32 pb-28 text-left 3xs:max-sm:pl-10 3xs:max-sm:pr-10">
      <h1 className='font-bold text-2xl pb-10'><FontAwesomeIcon icon={faCircleDot} /> Experience</h1>

        <div className="details p-10 bg-trans-box bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40">
          <h1 className='font-bold'>QA Automation Engineer - Internship</h1>
          <h1 className='font-bold'>A1QA</h1>
          <h1 className='font-bold'>January, 2023 - April, 2023</h1>
          <p className='pt-4'>During my internship at A1QA, I worked as a QA Automation Engineer, focusing on web scraping projects using JavaScript to extract and analyze data from websites. This role allowed me to develop my skills in automation and data analysis. I actively contributed to the quality assurance process by assisting in writing and maintaining test cases, as well as executing regression tests. My efforts helped in identifying and resolving critical bugs, which improved overall software stability and functionality.</p>
        </div>
        <div className="details pl-10 pr-10 pb-10 bg-trans-box bg-orange-200 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40">
          <h1 className='font-bold'>Quality Assurance Engineer</h1>
          <h1 className='font-bold'>Vcube Soft and Tech</h1>
          <h1 className='font-bold'>October, 2021 - October, 2022</h1>
          <p className='pt-4'>In my role, I delivered quality assurance for 3D property modeling projects, completing at least four projects daily to meet tight deadlines while maintaining high standards of accuracy. I conducted end-to-end QA checks on 3D models, virtual tours, and floor plans to ensure the final output aligned with client specifications and industry standards. Working closely with the 3D modeling team, I helped create precise property visualizations based on images and scans, enhancing client satisfaction. Additionally, I processed complex floor plans and mapping data for real estate visualization, optimizing deliverables for virtual tours. Using advanced photo editing tools, I also enhanced raw images, contributing to visually appealing and professional-quality virtual tours.</p>
        </div>

      </div>


    </div>
    
  )
}

export default About