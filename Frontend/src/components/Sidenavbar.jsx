import React from 'react'
import {Link} from 'react-router-dom'

const Sidenavbar = () => {
  return (
      <div className='hidden md:block w-[20%] h-full border-r-2 border-zinc-200 p-10'>
          
          <h1 className='font-bold text-white text-xl'>
              <i class="text-[#6556CD] mr-2 ml-2 ri-tv-fill"></i>
              <span>CinePulse</span>
          </h1>
          <nav className='flex flex-col text-zinc-500 gap-2 text-xl'>
              <h1 className='font-semibold text-white mt-7 mb-3 ml-2'>New Feed</h1>

              <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg'><i class="ri-fire-fill"></i> Trending</Link>

              <Link to='/popular' className='hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg'><i class="ri-magic-fill"></i> Popular</Link>

              <Link to='/movies' className='hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg'><i class="ri-tv-2-fill"></i> Movies</Link>

              <Link to='/tvshow' className='hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg'><i class="ri-slideshow-3-line"></i> Tv Shows</Link>

              <Link to='/people' className='hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg'><i class="ri-group-3-fill"></i> People</Link>

              <hr className='border-none bg-zinc-400 h-[1px]' />
              <h1 className='font-semibold text-white mt-3 mb-2 ml-2'>Website Info</h1>

              <Link to='/about' className='hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg'><i class="ri-information-line"></i> About</Link>

              <Link to='/contact' className='hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg'><i class="ri-phone-line"></i> Contact</Link>

          </nav>
          

    </div>
  )
}

export default Sidenavbar