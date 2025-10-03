import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data}) => {
  return (
          <div className='w-[170%] h-[75vh] md:h-[50vh] md:w-[100%] mb-5 flex overflow-y-hidden p-5'>
              {data.map((d, i) => (
                  <Link to={`/${d.media_type}/details/${d.id}`} className='min-w-[20%] bg-zinc-900 mr-5 mb-5 rounded-lg' key={i}>
                      <img className='rounded-t-lg w-full h-[25%] md:h-[40%] object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} />
                      

                      <div className='text-white p-3'>
                          <h1 className='font-semibold text-sm'>
                              {   d.name ||
                                  d.title ||
                                  d.original_name ||
                                  d.orginal_title}
                          </h1>
                          <p className='text-sm mt-2 mb-1'>{d.overview.slice(0, 50)} ...
                          <Link className='text-zinc-500'>More</Link>
                              </p>
                      </div>
                  </Link>
              ))}
              
          </div>
  )
}

export default Cards