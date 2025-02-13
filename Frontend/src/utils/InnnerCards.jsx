import React from 'react'
import { Link } from 'react-router-dom'

const InnnerCards = ({data,title}) => {
    return (
      
        <div className='h-full flex flex-wrap mt-7 justify-center overflow-y-auto max-h-[80vh]'>
            {data.map((c, i) => (
                <Link to={`/${data.media_type || title}/details/${c.id}`} className='relative w-[25vh] mr-[5%] mb-[3%]' key={i} >

                    <img className='object-cover h-[40vh] rounded-lg' src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`} />
                    
                    <h1 className='text-zinc-400 text-lg mt-3 font-semibold'>
                    { c.name || c.title || c.original_name ||  c.orginal_title}
                    </h1>

                   {c.vote_average && ( <div className='text-white absolute right-[-10%] bottom-[30%] rounded-full text-xl font-semibold bg-yellow-600 w-[6vh] h-[6vh] flex justify-center items-center'>
                        {(c.vote_average * 10).toFixed()} <sup className='text-sm'>%</sup>
                    </div>)}
                
                </Link>
            ))}
        </div>
   
  )
}

export default InnnerCards