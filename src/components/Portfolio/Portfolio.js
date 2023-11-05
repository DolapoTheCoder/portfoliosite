import React from 'react'
import allette from './allette.png'
import '../styles/Portfolio.css'

const Portfolio = () => {
  return (
    <>
      <div className='portfolio'>
        <h1 className='portfolioTitle'>Hi, Check out our Work!</h1>
        /** WHITE LINE HERE */
        <img src={allette} alt='allette' className='portfolioImage' />
      /** ALIGN TEXT TO THE RIGHT OF THE IMAGE. */
      </div>
    </>

  )
}

export default Portfolio