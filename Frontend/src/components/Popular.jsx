import React from 'react'
import {useNavigate} from 'react-router-dom'
import Topnav from './Topnav'
import Dropdown from '../utils/Dropdown'
import axios from '../utils/Constants'
import { useState,useEffect } from 'react'
import InnnerCards from '../utils/InnnerCards'
import Loader from '../utils/Loader'

const Popular = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState('movie')
    const [popular, setpopular] = useState([])
  
    const getPopular = async () => {
      try {
        const { data } = await axios.get(`${category}/popular?`)
        setpopular(data.results) 
      }
      catch (error) {
        console.log("error",error);    
      }
    }
    
    useEffect(() => {
      getPopular()  
    }, [category])
    
  
  
    return popular.length > 0  ? (
      <div className='w-screen h-screen p-[3%] bg-[#1F1E24]'>
        <div className='w-full flex items-center '>
          <h1 className='w-[20%] text-zinc-400 font-semibold text-2xl'><i onClick={() => navigate(-1)} class="hover:text-[#6556CD] ri-arrow-left-line"></i> Trending</h1>
  
          <Topnav />
          <div className='flex gap-2 w-[30%]'>
          <Dropdown func={(e) => setcategory(e.target.value)} title='Category' option={['movie', 'tv', 'all']} />
          </div>
        </div>
  
        <InnnerCards data={popular} title={category} />
     </div>
    ) : (
      <Loader />
    )
  }
export default Popular