import React from 'react'
import {useNavigate} from 'react-router-dom'
import Topnav from './Topnav'
import Dropdown from '../utils/Dropdown'
import axios from '../utils/Constants'
import { useState,useEffect } from 'react'
import InnnerCards from '../utils/InnnerCards'
import Loader from '../utils/Loader'

const Tvshow = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState('airing_today')
    const [tvshow, settvshow] = useState([])
  
    const getTvshow = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}`)
        settvshow(data.results) 
      }
      catch (error) {
        console.log("error",error);    
      }
    }
    
    useEffect(() => {
      getTvshow()  
    }, [category])
    
  
  
    return tvshow ? (
      <div className='w-screen h-screen p-[3%] bg-[#1F1E24]'>
        <div className='w-full flex items-center '>
          <h1 className='w-[20%] text-zinc-400 font-semibold text-2xl'><i onClick={() => navigate(-1)} class="hover:text-[#6556CD] ri-arrow-left-line"></i> Tv Show</h1>
  
          <Topnav />
          <div className='flex gap-2 w-[30%]'>
          <Dropdown func={(e) => setcategory(e.target.value)} title='Category' option={['airing_today', 'on_the_air', 'popular','top_rated']} />
          </div>
        </div>
  
        <InnnerCards data={tvshow} title="tv" />
     </div>
    ) : (
      <Loader />
    )
  }

export default Tvshow