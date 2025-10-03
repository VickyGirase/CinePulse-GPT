import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestion from './Gptmoviesuggestion'
import backGroundImage from "../assets/backGround.jpg"

const GptWrapper = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${backGroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      width: '100vw', 
      height: '100vh' 
    }}>
      <Gptsearchbar />
      <Gptmoviesuggestion/>
    </div>
  )
}

export default GptWrapper