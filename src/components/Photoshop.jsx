import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import cghuman from '../images/cghuman.png'
import osaop1 from '../images/osaop1.png'
import image1006 from '../images/image1006.png'
import klogo from '../images/klogo.png'
import '../css/Photoshop.css'
const Photoshop = () => {

    return (
      <body className="Photoshop">
          <NavBar />
          <div className='Photoshop_title'>Adobe Photoshop</div>
          <div className='Photoshop_body'>
                <div className='Photoshop_awardrow1'>
                    <div className='Photoshop_achievement'>
                        <p className='Photoshop_achievementtitle'>My Photo</p>
                        <img className='Photoshop_achievementimage1' src={image1006} alt='achievement medal'/>
                    </div>
                    <div className='Photoshop_achievement'>
                        <p className='Photoshop_achievementtitle'>Coast Guard T-Shirts</p>
                        <img className='Photoshop_achievementimage2' src={osaop1} alt='achievement medal'/>
                    </div>
                </div>
                <div className='Photoshop_awardrow2'>
                <div className='Photoshop_achievement'>
                        <p className='Photoshop_achievementtitle'>My Logo</p>
                        <img className='Photoshop_achievementimage3' src={klogo} alt='achievement medal'/>
                    </div>
                    <div className='Photoshop_achievement'>
                        <p className='Photoshop_achievementtitle'>Humanitarian Service Medal</p>
                        <img className='Photoshop_achievementimage4' src={cghuman} alt='achievement medal'/>
                    </div>
                </div>
            </div>
          <Footer />
      </body>
 );
};
export default Photoshop
