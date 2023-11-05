import React from 'react'
import { Button } from 'react-bootstrap'
import styles from '../styles/Home.css'

const Splashpage = () => {
  return (
    <>
        <div className="splashpage">
            <div className="home">
                What we do?
            </div>
            <h1 className="home-title"> We Provide Tech <span style={{display: "block"}}>Solutions from Idea</span> <span style={{display: "block"}}>to Product.</span></h1>
            <p className="paragraph">
            We specialise in bridging the gap between your problems 
            <span style={{display: "block"}}>and technical solutions. Simultaneously, creating</span>
            <span style={{display: "block"}}>opportunities to utilise new technologies. Putting you </span>
            <span style={{display: "block"}}>ahead of your competition.</span>
            </p>
            <Button variant='outline-light' href='/contact'>Contact Us</Button>    
        </div>
    </>
  )
}

export default Splashpage