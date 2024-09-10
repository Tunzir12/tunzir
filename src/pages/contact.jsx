import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
  return (
    <div>
      <nav className='font-nanum p-10'>
        <div className="flex flex-row font-bold text-indigo-600 text-3xl">
          <Link to="/" className='basis-1/4'>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go to Homepage
          </Link>
        </div>
      </nav>

      <section className='justify-center bg-indigo-500 p-20'>
        <div className="form grid grid-col-2 col-span-3">

              <input type="text" placeholder='Full Name' />
              <input type="email" placeholder='Email' />
              <textarea name="Message" id="msg" placeholder='Message'></textarea>
              <button className='bg-green-400'>Submit</button>

        </div>
      </section>
    </div>
  )
}

export default Contact