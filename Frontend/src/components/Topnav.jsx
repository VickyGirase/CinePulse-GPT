import axios from "../utils/Constants"
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import noimage from "../assets/noimage.jpg"
import { setGpt } from "../store/gptSlice"
import { useDispatch } from 'react-redux'

const Topnav = () => {

    const [query, setquery] = useState('')
    const [searches, setsearches] = useState([])
    const dispatch = useDispatch()
    
    const getSearches = async () => {
        try {
            const {data} = await axios.get(`/search/multi?query=${query}`)
            setsearches(data.results)
        }
        catch (error) {           
            console.log("error",error);
        }
    }

    const toggleGptSearch = () => { 
        dispatch(setGpt())
    }

    useEffect(() => {
        getSearches()
    },[query])
  return (
      <div className='p-4 md:p-0 w-full h-[10vh] relative justify-center flex items-center '>
          
          <i class="text-zinc-400 text-3xl ri-search-line"></i>

          <input onChange={(e) => setquery(e.target.value)} value={query} type="text" className='w-[50%] text-zinc-200 border-none outline-none bg-transparent' placeholder='Search anything here' />

          {query.length > 0 && (<i onClick={() => setquery('')} class="text-zinc-400 text-3xl ri-close-line"></i>) }

          <div className='z-[100] absolute w-[70%] md:w-[50%] max-h-[40vh] md:max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded-lg'>
              
              {searches.map((s, i) => (
                  <Link to={`/${s.media_type}/details/${s.id}`} key={i} className='hover:text-black hover:bg-zinc-300 text-zinc-600 w-full p-5 flex justify-start items-center border-b-2 border-zinc-100'>
                      <img className="object-cover h-[10vh] w-[13vh] rounded mr-5"
                          src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage } />
                      <span>{s.name || s.title || s.original_name || s.orginal_title }</span>
              </Link>
            ) )}

          </div>

         

          <button onClick={toggleGptSearch} className='border  hover:bg-[#6556CD] hover:text-white text-xs md:text-base font-semibold px-2 text-white duration-100 md:px-3 md:py-1 rounded-lg ml-3'>GPT Wrapper</button>
    </div>
  )
}

export default Topnav