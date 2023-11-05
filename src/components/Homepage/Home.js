import React from 'react'
import { Animator, Fade, Move, Sticky, batch, ScrollContainer, ScrollPage } from 'react-scroll-motion'
import Splashpage from './Splashpage'
import Info from './Info'
import styles from '../styles/Home.css'

const Home = () => {
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <>
      <div className='homePage'>
        <ScrollContainer>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <Splashpage/>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Info/>
        </ScrollPage>
      </ScrollContainer>
      </div>
    </>
  )
}

export default Home