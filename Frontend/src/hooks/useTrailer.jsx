import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'

const useTrailer = () => {
    const navigate = useNavigate()

    const { pathname } = useLocation()
    const category = pathname.includes("movie") ? 'movie' : "tv"
    
    const ytvideos = useSelector((state) => state[category].info.videos)
    
  return (
      <div className='absolute md:w-screen  h-[70vh] w-[100vw] md:h-screen flex items-center justify-center top-0 left-0 z-[100] bg-[rgba(0,0,0,0.9)]'>
           <Link className='absolute text-white text-3xl right-[7%] top-[5%]'><i onClick={() => navigate(-1)} class="hover:text-[#6556CD]  ri-close-fill"></i></Link>
          <ReactPlayer
              height={550}
              width={950}
              url={`https://www.youtube.com/watch?v=${ytvideos.key}`} />
    </div>
  )
}

export default useTrailer