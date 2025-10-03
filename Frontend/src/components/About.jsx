import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()
  return (

  
   
    <div className='bg-white w-screen h-screen flex items-center justify-center'>
       
     
          <div className='flex flex-col items-center justify-center'>
        <div className='text-[#6556CD] text-4xl font-bold mt-[2%]'>
          <i onClick={() => {
      navigate(-1)
          }} class='ri-arrow-left-line cursor-pointer text-2xl flex text-black hover:text-[#6556CD] mb-5 ml-[-15%]'>
          </i>
          Welcome To The Cinepulse ❤️
        </div>
              <p className='w-[40%] text-[#1F1E24] text-sm mt-3 '>Cinepulse is movie recommendation app where you can find your Favourite movies and webseries that you willing to watch.Also try to catch out upcoming movies and webseries with trailer.</p>
              <h1 className='text-black text-xl font-semibold mt-4'>Try To Find Your Favourite Movie Here...👇</h1>
              <Link to="/" className='bg-[#6556CD] hover:bg-[#52469e] text-white px-5 py-2 rounded-lg mt-5 '>Browse</Link>
              <h1 className='text-2xl font-semibold text-black mt-24  '>Made With 🩷 By  Vicky Girase</h1>
         </div>
      </div>
    
      
      
  )
}

export default About