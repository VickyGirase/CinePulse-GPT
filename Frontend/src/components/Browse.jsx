import React from 'react'
import Topnav from './Topnav'
import axios from '../utils/Constants'
import { useState, useEffect } from 'react'
import Header from './Header'
import Cards from "../utils/Cards"
import Dropdown from '../utils/Dropdown'
import Loader from '../utils/Loader'
import Sidenavbar from './Sidenavbar'

const Browse = () => {

  const [wallPaper, setWallpaper] = useState(null)
  const [trending, settrending] = useState([])
  
  const [category, setcategory] = useState("all")


  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`)
      
     const randomData = data.results[( Math.random()*data.results.length).toFixed()]
        setWallpaper(randomData)
    }
    catch (error) {           
        console.log("error",error);
    }
  }

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`)
      settrending(data.results)
      

    }
    catch (error) {
      console.log("error",error);
      
    }
  }

  useEffect(() => {

    getTrending()
    !wallPaper && getWallpaper()
   
  }, [category])
  
  
  return wallPaper && trending ? (

    <>
    <Sidenavbar/>
    <div className='w-full h-full overflow-auto overflow-x-hidden'><Topnav />
      <Header data={wallPaper} />

      <div className='mx-5 my-3 flex justify-between '>
              <h1 className='font-semibold text-zinc-400 text-xl md:text-2xl '>Trending</h1>

              <Dropdown title='Filter' option={["tv","movie","all"]} func={(e) => setcategory(e.target.value)} />
              
      </div>
      <Cards data={trending}/>
    </div>
    
    
    </>
  ) : (
    <h1 className='text-white font-bold text-4xl flex items-center justify-center h-screen w-screen bg-black'>Please Use VPN ....</h1>  
  )
 
}

export default Browse