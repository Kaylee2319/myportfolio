import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import portfigma from '../images/portfigma.png'
import outfigma from '../images/outfigma.png'
import '../css/Figma.css'
const Figma = () => {

    return (
      <body className="Figma">
          <NavBar />
          <div className='Figma_title'>Figma</div>
          <div className='Figma_body'>
                <div className='Figma_awardrow1'>
                    <div className='Figma_achievement'>
                        <p className='Figma_achievementtitle'>My Portfolio</p>
                        <img className='Figma_achievementimage1' src={portfigma} alt='achievement medal'/>
                    </div>
                </div>
                <div className='Figma_awardrow2'>
                <div className='Figma_achievement1'>
                        <p className='Figma_achievementtitle'>Outpost</p>
                        <img className='Figma_achievementimage1' src={outfigma} alt='achievement medal'/>
                    </div>
                </div>
            </div>
          <Footer />
      </body>
 );
};
export default Figma
