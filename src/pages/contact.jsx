import React , {useRef, useState, useEffect} from 'react'
import emailjs from '@emailjs/browser';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import ModeSwitch from '../components/navbar'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const Contact = () => {

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_291mu0i', 'template_bvkjc9h', form.current, {
        publicKey: '3iKwBxNucnxoji1Dl',
      })
      .then(
        () => {
          setIsSubmitted(true);
          setIsError(false);
          e.target.reset(); 
        },
        (error) => {
          console.error('FAILED...', error.text);
          setIsError(true); 
        },
      );
  };

  useEffect(() => {
    if (isSubmitted || isError) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setIsError(false);
      }, 4000);  // Message disappears after 4 seconds

      return () => clearTimeout(timer); 
    }
  }, [isSubmitted, isError]);

  return (

    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-neutral-50 to-90% dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-blue-950 dark:text-white">

      <ModeSwitch />

      {/*Navbar */}
      <div className="navlink grid grid-cols-2 font-bold">
        <div className="col-p-1 text-left">
          <Link to={'/'} className='pl-32 3xs:max-sm:pl-6'>Home</Link>
        </div>

        <div className="col-p-1 text-right ">
          <Link to={'/project'} className='pr-32 3xs:max-sm:pr-6'>Project</Link>
        </div>
      </div>

      {/*Body */}
      <div className="pl-32 pt-10 pr-32 pb-10 md:max-lg:pl-20 md:max-lg:pr-20 sm-2:max-md:pl-10  sm-2:max-md:pr-10 3xs:max-sm-2:pl-4 3xs:max-sm-2:pr-4 ">        
        <div className="grid grid-cols-3 3xs:max-md:flex 3xs:max-md:flex-col bg-orange-200 bg-opacity-50 p-10 dark:bg-gradient-to-tl dark:from-cyan-800 dark:to-blue-900 rounded-lg">
          <div className="pl-40 pr-40 col-span-2 text-left lg:max-xlq:pl-10 lg:max-xlq:pr-16 md:max-lg:pl-2 md:max-lg:pr-2 3xs:max-md:pl-2 3xs:max-md:pr-2 ">
            <form ref={form} onSubmit={sendEmail} className='grid grid-cols-5  space-y-3 3xs:max-sm-2:flex 3xs:max-sm-2:flex-col' >
            <div className='col-span-1 pt-2'>
              <label className='font-bold'>Name</label>
            </div>
            <div className="col-span-4">
              <input type="text" name='name' className='rounded-lg w-full bg-orange-50  dark:bg-fuchsia-800 bg-opacity-40 dark:bg-opacity-40' required />
            </div>
            <div className='col-span-1'>
              <label className='font-bold'>Email</label>
            </div>
            <div className="col-span-4">
              <input type="email" name='email' className='rounded-lg w-full bg-orange-50 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40' required />
            </div>
            <div className='col-span-1'>
              <label className='font-bold'>Subject</label>
            </div>
            <div className="col-span-4">
              <input type="text" name='subject' className='rounded-lg w-full bg-orange-50 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40' required/>
            </div>
            <div className='col-span-1'>
              <label className='font-bold'>Mesasge</label>
            </div>
            <div className="col-span-4">
              <textarea name="message" className='rounded-lg w-full bg-orange-50 bg-opacity-40 dark:bg-fuchsia-800 dark:bg-opacity-40' id="" required/>
            </div>
            
            <div className="text-right col-span-5 ">
            <button type='submit' className='font-bold p-2 w-1/3 bg-orange-50 rounded-lg dark:bg-fuchsia-800'>Submit</button>

            </div>
            </form>
          </div>

          
          
          <div className="pr-40 pt-4 col-span-1 lg:max-xlq:pr-10 md:max-lg:pr-2 md:max-lg:pl-2 3xs:max-md:pl-10 3xs:max-md:pr-10 3xs:max-md:pt-10">
            <div className="p-10 bg-orange-50  lg:max-xlq:p-4 md:max-lg:p-2 dark:bg-fuchsia-800 dark:bg-opacity-40 rounded-lg">
              <div className="social space-y-4 ">
                <h2 className='font-bold'>Or,</h2>
                <p className='text-sm'>Add me on socials</p>
                <div className="flex flex-row gap-4 pt-4 place-content-center md:max-[1338px]:pt-2">

                  <div className='text-2xl text-center p-2 space-x-4 '>
                    <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'> <FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/Tunzir12" target='_blank'> <FontAwesomeIcon icon={faGithub} /></a>


                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

               {/* Success/Failure Message with Pop-up Effect */}
               {isSubmitted && !isError && (
              <div className="text-green-500 font-bold">
                Your message has been sent successfully!
              </div>
            )}

            {isError && (
              <div className="text-red-500 font-bold">
                Failed to send the message. Please try again.
              </div>
            )}

      <div className="text-center pt-10">
        <span className='text-stone-900 dark:text-gray-500'>Visit My <a href="https://www.linkedin.com/in/m16tunzi/" target='_blank'>Linkedin</a> or <a href="https://github.com/Tunzir12" target='_blank'>Github</a> page.</span>
      </div>
      
    </div>
    
  )
}

export default Contact