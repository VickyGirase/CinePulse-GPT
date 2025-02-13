import React from 'react'
import Sidenavbar from './Sidenavbar'
import Browse from './Browse'
import GptWrapper from './GptWrapper'
import { useSelector } from 'react-redux'

const Home = () => {

  const gptToggle = useSelector(state => state.gpt.gptToggle)
  return (
    <>
      
      {/* <Sidenavbar/> */}

      {
        gptToggle ? (<GptWrapper/>) :( <Browse/>)
      }
      

    </>
  )
}

export default Home