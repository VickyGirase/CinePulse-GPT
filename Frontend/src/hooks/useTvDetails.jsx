import React, { useEffect } from 'react'
import { asyncloadtv, removetv } from '../store/tvActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import Loader from '../utils/Loader'
import Cards from '../utils/Cards'


const useTvDetails = () => {
  const {pathname} = useLocation()
  const { id } = useParams()
  const {info} = useSelector((state) => state.tv)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(asyncloadtv(id))
    return () => {
      dispatch(removetv())
    }
  },[id])
  return info ? (
    <div className='w-screen h-screen bg-[#1F1E24] px-[7%] py-[3%] overflow-y-auto'>
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
     
    }}></div>
  
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(2px)',
     
    }}></div>

    <nav className='w-full text-zinc-200 relative flex gap-7 text-lg '>
        <Link className=' text-white text-xl'><i onClick={() => navigate(-1)} class="hover:text-[#6556CD]  ri-arrow-left-line"></i></Link>
        

        <a target='_blank' href={info.detail.homepage}><i class="hover:text-[#6556CD] w-[15%]  text-white text-xl ri-external-link-line"></i></a>


        <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="hover:text-[#6556CD] w-[15%] text-white  text-xl ri-earth-line"></i></a>


        <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
      </nav>
      


      <div className='w-full flex relative'>
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] rounded-lg h-[50vh] mt-5 object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} />
        

        <div className='content ml-[10%] mt-[-1%]'>
        <h1 className=' text-4xl font-black text-white'>
                              {   info.detail.name ||
                                  info.detail.title ||
                                  info.detail.original_name ||
              info.detail.orginal_title}
            
            <small className='text-2xl font-semibold ml-2'>({info.detail.first_air_date.split("-")[0]})</small>
          </h1>

          <div className='mt-3 mb-10 flex text-white items-center gap-x-3'>
            <span className='text-white rounded-full text-2xl font-bold bg-yellow-600 w-[7vh] h-[7vh] flex justify-center items-center'>
              {(info.detail.vote_average * 10).toFixed()}
              <sup className='text-sm'>%</sup>
            </span>

            <h1 className='font-semibold text-2xl leading-6 w-[60px]'>User Score</h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{ info.detail.genres.map((g)=> g.name).join(",")}</h1>
            <h1>{ info.detail.runtime} min</h1>
          </div>

          <h1 className='text-lg font-semibold italic text-zinc-200 mt-[-3%]'>{info.detail.tagline}</h1>
          <h1 className='text-2xl font-semibold mb-2 mt-2 text-blue-500'>Overview</h1>
          <p className='text-white text-sm'>{info.detail.overview}</p>
          <h1 className='text-blue-500 font-semibold text-xl mb-3 mt-3'>Movie Translated</h1>
          <p className='text-white text-sm mb-7'>{info.translations.join(", ")}</p>

          <Link to={`${pathname}/trailer`} className='bg-[#6556CD] p-3 text-white rounded-lg mt-4'>
            <i class='text-xl ri-play-fill mr-1'></i>
            Watch Trailer</Link>

        </div>

      </div>

      <div className='w-[80%] relative mt-[-2%]'>
        <div className='mt-5'>
        {
            info.watchproviders &&
            info.watchproviders.flatrate && (
            <div className='flex gap-x-6 items-center text-white'>
                <h1 className='text-sm' >Available on Platform</h1>
        
            {info.watchproviders.flatrate.map((w) => (
              <img title={w.provider_name} className='w-[4vh] h-[4vh] rounded-lg object-cover ' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} />
            ))}
                </div>
          )}

          {
            info.watchproviders &&
            info.watchproviders.rent && (
            <div className='flex gap-x-6 items-center text-white mt-4'>
                <h1 className='mr-[5vh] text-sm'>Available to Buy</h1>
        
            {info.watchproviders.rent.map((w) => (
              <img title={w.provider_name} className='w-[4vh] h-[4vh] rounded-lg object-cover ' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} />
            ))}
                </div>
          )}
          

          {
            info.watchproviders &&
            info.watchproviders.buy && (
            <div className='flex gap-x-6 items-center text-white mt-4'>
                <h1 className='mr-[3vh] text-sm'>Available on Rent</h1>
        
            {info.watchproviders.buy.map((w) => (
              <img title={w.provider_name} className='w-[4vh] h-[4vh] rounded-lg object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} />
            ))}
                </div>
          )}
        </div>
      </div>

     
      <hr className='mt-7 mb-3 border-none h-[2px] bg-zinc-400 relative' />
      <h1 className='text-2xl font-bold text-white relative mb-2'>Seasons</h1>
      <div className='relative flex overflow-y-auto'>
        {
          info.detail.seasons.map((s, i) => (
            <div className='w-[15vh] mr-[9%]'>
               <img className='min-w-[14vw] h-[40vh] rounded-lg object-cover' src={`https://image.tmdb.org/t/p/original/${s.poster_path}`} />
 
                      <h1 className='font-semibold text-xl text-zinc-300 mt-3 mb-5'>
                          {   s.name ||
                              s.title ||
                              s.original_name ||
                              s.orginal_title}
                      </h1>
           </div>
            
          ))
        }
      </div>

     

      <div className='relative'>
      <hr className='mt-12 mb-3 border-none h-[2px] bg-zinc-500' />
     

      <h1 className='text-2xl font-bold text-white'>Recommedations & Similar Stuff</h1>


      <Cards data={ info.recommendations.length > 0 ? info.recommendations : info.similar} />
      </div>

      <Outlet/>
    
</div>
  ):<Loader/>
}

export default useTvDetails
