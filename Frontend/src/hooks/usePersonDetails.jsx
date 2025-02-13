import React, { useEffect,useState } from 'react'
import { asyncloadperson, removeperson } from '../store/personActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import Loader from '../utils/Loader'
import Cards from '../utils/Cards'
import Dropdown from '../utils/Dropdown'


const usePersonDetails = () => {

  const { pathname } = useLocation()
  const [category, setcategory] = useState("movie")
  const { id } = useParams()
  const {info} = useSelector((state) => state.person)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(info);
  

  useEffect(() => {
    dispatch(asyncloadperson(id))
    return () => {
      dispatch(removeperson())
    }
  },[id])
  return info ? (
    <div className='w-screen px-[13%] py-5 h-screen bg-[#1F1E24] overflow-y-auto '>

      <nav className='w-full text-zinc-200 relative flex gap-7 text-lg '>
        
        <Link className=' text-white text-xl'><i onClick={() => navigate(-1)} class="hover:text-[#6556CD]  ri-arrow-left-line"></i>
        </Link>

      </nav>
      
      <div className='w-full flex'>
      <div className='w-[20%]'>

<img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] rounded-lg h-[40vh] mt-5 object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} />


<hr className='mt-10 mb-3 border-none h-[2px] bg-zinc-500' />

<div className='text-2xl text-white flex gap-x-5'>

  <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
    <i class="hover:text-[#6556CD] w-[15%] text-white  text-xl ri-earth-line"></i>
  </a>

  
  <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
    <i class="hover:text-[#6556CD] w-[15%] text-white  text-xl ri-facebook-circle-fill"></i>
  </a>


  <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
    <i class="hover:text-[#6556CD] w-[15%] text-white  text-xl ri-instagram-fill"></i>
  </a>


  <a target='_blank' href={`https://www.twitter.com/${info.externalid.twitter_id}`}>
    <i class="hover:text-[#6556CD] w-[15%] text-white  text-xl ri-twitter-x-fill"></i>
  </a>


</div>

<h1 className='text-2xl font-semibold text-zinc-400'>
  Personal Info
</h1>


<h1 className='text-lg text-zinc-400 font-semibold mt-3'>
  Known For
</h1>


<h1 className='text-zinc-400'>
  {info.detail.known_for_department}
</h1>


<h1 className='text-lg text-zinc-400 font-semibold mt-3'>
  Gender
</h1>


<h1 className='text-zinc-400'>
  {info.detail.gender === 2 ? "Male" : "Female"}
</h1>


<h1 className='text-lg text-zinc-400 font-semibold mt-3'>
  Birthday
</h1>


<h1 className='text-zinc-400'>
  {info.detail.birthday}
</h1>


<h1 className='text-lg text-zinc-400 font-semibold mt-3'>
  Deathday
</h1>


<h1 className='text-zinc-400'>
  {info.detail.deathday ? info.detail.deathday : "Still Alive"}
</h1>

<h1 className='text-lg text-zinc-400 font-semibold mt-3'>
  Place Of Birth
</h1>


<h1 className='text-zinc-400'>
  {info.detail.place_of_birth}
</h1>


<h1 className='text-lg text-zinc-400 font-semibold mt-3'>
  Also Known As
</h1>


<h1 className='text-zinc-400'>
  {info.detail.also_known_as.join(", ")}
</h1>


        </div>

        <div className='w-[80%] ml-[5%] '>

        <h1 className='text-6xl font-semibold text-zinc-400'>
 {info.detail.name}
</h1>


<h1 className='text-lg text-zinc-400 font-semibold mt-3'>
  Biography
</h1>


<p className='text-zinc-400 text-sm'>
  {info.detail.biography}
</p>


<h1 className='text-lg text-zinc-400 font-semibold mt-3'>
  Known For
          </h1>
          
          <Cards data={info.combinedCredits.cast} />


          <div className='w-full flex justify-between'>

            <h1 className='mt-3 text-xl text-zinc-400 font-semibold'>Acting</h1>

            <Dropdown  title='category' option={['tv','movie']} func={(e) => setcategory(e.target.value)}/>

          </div>

          <div className='list-disc w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto text-zinc-400 shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5'>
            {info[category + 'Credits'].cast.map((c, i) => (
              <li className='rounded duration-300 cursor-pointer hover:text-white hover:bg-[#19191D]'>
                <Link to={`${category}/details/${c.id}`}>
                  <span >
                  {   c.name ||
                                  c.title ||
                                  c.original_name ||
              c.orginal_title}
                  </span>
                  <span className='block ml-5 text-sm mb-5 '>
                    {c.character && `character.name : ${c.character}`}
                  </span>
                </Link>
              </li>
            )) }
          </div>

        </div>
        


     </div>
    </div>
  ) : <Loader/>
}

export default usePersonDetails