import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import achMedal from '../images/achMedal.png'
import merrib from '../images/merrib.png'
import goodcon from '../images/goodcon.png'
import cghuman from '../images/cghuman.png'
import AFSM from '../images/AFSM.png'
import ND from '../images/ND.png'
import rifle from '../images/rifle.png'
import pistol from '../images/pistol.png'
import '../css/Military.css'
const Military = () => {

    return (
      <body className="military">
          <NavBar />
            <div className='military_title'>Military Awards</div>
            <div className='military_body'>
                <div className='military_awardrow1'>
                    <div className='military_achievement'>
                        <p className='military_achievementtitle'>Coast Guard Achievement Medal</p>
                        <img className='military_achievementimage' src={achMedal} alt='achievement medal'/>
                    </div>
                    <div className='military_achievement'>
                        <p className='military_achievementtitle'>Coast Guard Meritorious Team Commendation Medal</p>
                        <img className='military_achievementimage1' src={merrib} alt='achievement medal'/>
                    </div>
                </div>
                <div className='military_awardrow2'>
                <div className='military_achievement'>
                        <p className='military_achievementtitle'>Coast Guard Good Conduct Meda</p>
                        <img className='military_achievementimage' src={goodcon} alt='achievement medal'/>
                    </div>
                    <div className='military_achievement'>
                        <p className='military_achievementtitle'>Humanitarian Service Medal</p>
                        <img className='military_achievementimage' src={cghuman} alt='achievement medal'/>
                    </div>
                </div>
                <div className='military_awardrow3'>
                <div className='military_achievement'>
                        <p className='military_achievementtitle'>Armed Forces Service Medal</p>
                        <img className='military_achievementimage' src={AFSM} alt='achievement medal'/>
                    </div>
                    <div className='military_achievement'>
                        <p className='military_achievementtitle'>National Defense Service Medal</p>
                        <img className='military_achievementimage' src={ND} alt='achievement medal'/>
                    </div>
                </div>
                <div className='military_awardrow4'>
                <div className='military_achievement'>
                        <p className='military_achievementtitle'>Coast Guard Rifle Marksmanship Ribbon</p>
                        <img className='military_achievementimage3' src={rifle} alt='achievement medal'/>
                    </div>
                    <div className='military_achievement'>
                        <p className='military_achievementtitle'> Pistol Marksmanship Ribbon</p>
                        <img className='military_achievementimage2' src={pistol} alt='achievement medal'/>
                    </div>
                </div>
            </div>
          <Footer />
      </body>
 );
};
export default Military
