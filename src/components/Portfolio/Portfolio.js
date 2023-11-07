import React from 'react'
import '../styles/Portfolio.css'
import Allette from './Allette'
import { Animator, Fade, Move, Sticky, batch, ScrollContainer, ScrollPage } from 'react-scroll-motion'


const Portfolio = () => {
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <>
      <div className='portfolio'>
        <h1 className='portfolioTitle'>Hi, Check out our Work!</h1>
        <hr className='line' />
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={FadeUp}>
              <Allette />
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  )
}

export default Portfolio