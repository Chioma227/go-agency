import React from 'react'
import './style.css'
import Carousel from './components/Carousel'
import LogoArea from './components/LogoArea'
import ImgRow from './components/Img-row'
import Newhorizon from './components/Newhorizon'
import ScrollButton from './Scroll/ScrollButton'

const App = () => {
  return (
    <div>
      <LogoArea />
      <Carousel />
      <ImgRow />
      <Newhorizon />
      <ScrollButton />
    </div>
  )
}

export default App
