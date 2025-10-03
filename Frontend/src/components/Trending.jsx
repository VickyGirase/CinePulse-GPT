import React from 'react'
import {useNavigate} from 'react-router-dom'
import Topnav from './Topnav'
import Dropdown from '../utils/Dropdown'
import axios from '../utils/Constants'
import { useState,useEffect } from 'react'
import InnnerCards from '../utils/InnnerCards'
import Loader from '../utils/Loader'
import InfiniteScroll from 'react-infinite-scroll-component'



const Trending = () => {
  const navigate = useNavigate()
  const [category, setcategory] = useState('all')
  const [duration, setduration] = useState("day")
  const [trending, settrending] = useState([])
  // const [page, setpage] = useState(1)

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`)
      settrending(data.results)

      // settrending((prevState) => [...prevState, ...data.results])
      // setpage(page + 1)

      
    }
    catch (error) {
      console.log("error",error);    
    }
  }
  useEffect(() => {
    getTrending()  
  }, [category,duration])
  


  return trending.length > 0  ? (
    <div className='w-screen h-screen p-[3%] bg-[#1F1E24]'>
      <div className='w-full flex items-center '>
        <h1 className='w-[20%] text-zinc-400 font-semibold text-2xl'><i onClick={() => navigate(-1)} class="hover:text-[#6556CD] ri-arrow-left-line"></i> Trending</h1>

        <Topnav />
        <div className='flex gap-2 w-[30%]'>
        <Dropdown func={(e) => setcategory(e.target.value)} title='Category' option={['movie', 'tv', 'all']} />
        <Dropdown func={(e) => setduration(e.target.value)} title='Duration' option={['day','week']} />
        </div>
      </div>

      {/* <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={true}
      loader={<h1>Loading...</h1>}> */}


      <InnnerCards data={trending} title={category} />

      {/* </InfiniteScroll> */}

     
   </div>
  ) : (
    <Loader />
  )
}

export default Trending