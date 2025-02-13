import React from 'react'
import {useNavigate} from 'react-router-dom'
import Topnav from './Topnav'
import Dropdown from '../utils/Dropdown'
import axios from '../utils/Constants'
import { useState,useEffect } from 'react'
import InnnerCards from '../utils/InnnerCards'
import Loader from '../utils/Loader'

const Movies = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState('top_rated')
    const [movies, setmovies] = useState([])
  
    const getMovies = async () => {
      try {
        const { data } = await axios.get(`/movie/${category}`)
        setmovies(data.results) 
      }
      catch (error) {
        console.log("error",error);    
      }
    }
    
    useEffect(() => {
      getMovies()  
    }, [category])
    
  
  
    return movies.length > 0  ? (
      <div className='w-screen h-screen p-[3%] bg-[#1F1E24]'>
        <div className='w-full flex items-center '>
          <h1 className='w-[20%] text-zinc-400 font-semibold text-2xl'><i onClick={() => navigate(-1)} class="hover:text-[#6556CD] ri-arrow-left-line"></i> Movies</h1>
  
          <Topnav />
          <div className='flex gap-2 w-[30%]'>
          <Dropdown func={(e) => setcategory(e.target.value)} title='Category' option={['popular', 'top_rated', 'upcoming','now_playing']} />
          </div>
        </div>
  
        <InnnerCards data={movies} title="movie" />
     </div>
    ) : (
      <Loader />
    )
  }
export default Movies