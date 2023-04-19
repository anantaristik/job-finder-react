import React from 'react'
import  {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid 
    grid-cols-5 m-auto items-center justify-center'>

      <div>
        <div className="logoDiv">
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            <strong>Ananta</strong>Job
          </h1>
          <p className='text-white pb-[13px] opacity-70 leading-7'>
            We always make our seekers and employers happy by providing them the best services.
          </p>
        </div>
      </div>

      <div className="grid">
          <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
            Company
          </span>

          <div className="grid gap-3">
            <li className='text-white opacity-[.7] hover:opacity[1]'>About Us</li>
            <li className='text-white opacity-[.7] hover:opacity[1]'>Features</li>
            <li className='text-white opacity-[.7] hover:opacity[1]'>News</li>
            <li className='text-white opacity-[.7] hover:opacity[1]'>FAQ</li>
          </div>
        </div>

        <div className="grid">
          <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
            Resources
          </span>

          <div className="grid gap-3">
            <li className='text-white opacity-[.7] hover:opacity[1]'>Account</li>
            <li className='text-white opacity-[.7] hover:opacity[1]'>Support Center</li>
            <li className='text-white opacity-[.7] hover:opacity[1]'>Feedback</li>
            <li className='text-white opacity-[.7] hover:opacity[1]'>Contact Us</li>
          </div>
        </div>

        <div className="grid">
          <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
            Support
          </span>

          <div className="grid gap-3">
            <li className='text-white opacity-[.7] hover:opacity[1]'>Events</li>
            <li className='text-white opacity-[.7] hover:opacity[1]'>Promo</li>
            <li className='text-white opacity-[.7] hover:opacity[1]'>Demo</li>
            <li className='text-white opacity-[.7] hover:opacity[1]'>Careers</li>
          </div>
        </div>

        <div className="grid">
          <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
            Contact Info
          </span>
          <small className='text[14px] text-white'>
            anantaristik@gmail.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillFacebook className='text-[25px] text-white cursor-pointer hover:text-[#3b5998]'/>
            <AiFillTwitterSquare className='text-[25px] text-white cursor-pointer hover:text-[#1da1f2]'/>
            <AiFillInstagram className='text-[25px] text-white cursor-pointer hover:text-[#c13584]'/>
          </div>
        </div>


    </div>
  )
}

export default Footer