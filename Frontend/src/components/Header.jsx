import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
  return (
      <div
          style={{
          background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat"
      }} className='w-full h-[50vh] md:h-[60vh] flex flex-col justify-end items-start p-[6%]'>
      
      <h1 className='w-[60%] text-white font-bold text-3xl items-end'>{data.name || data.title || data.original_name || data.orginal_title}</h1>

      <p className='mt-3 w-[60%] text-sm text-white'>{data.overview.slice(0, 200)}  ...<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'>More</Link></p>

      <p className='text-white mt-2'>
        <i class="ri-megaphone-fill">  {data.release_date || "No Information"} </i>

        <i class="ml-5 ri-movie-2-fill">  {data.media_type.toUpperCase()}</i>
      </p>
      <Link className='bg-[#6556CD] p-3 text-white rounded-lg mt-4'>Watch Trailer</Link>

    </div> 
  )
}

export default Header