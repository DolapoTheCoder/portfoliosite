import React from 'react'
import allette from './allette.png'
import '../styles/Portfolio.css'
import { Button } from 'react-bootstrap'


const Allette = () => {
    return (
        <>
            <div className='allette'>
                <p className='alletteTitle'>Allette Official</p>
                <p className='alletteSubtitle'>SHOPIFY SITE REVAMP</p>
                <img src={allette} alt='allette' className='portfolioImage' />
                <p className='alletteDesc'>
                    After Allette’s re-brand, we
                    <span style={{ display: "block" }}>reimagined their website for an</span>
                    <span style={{ display: "block" }}>entirely new feel. We also embedded</span>
                    <span style={{ display: "block" }}>an apple music playlist in-site</span>
                </p>
                <Button variant='outline-light' href='https://alletteofficial.com/'>View Project</Button>
            </div>
        </>
    )
}

export default Allette