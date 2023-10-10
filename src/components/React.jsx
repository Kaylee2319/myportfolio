import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/React.css';
import outpost from '../images/outpost.mp4';
import Pokecardex from '../images/Pokecardex.mp4';
import Outpostlight from '../images/Outpostlight.png';
import slides1 from '../images/slides1.png';
import poke from '../images/poke.png';
import klogo from '../images/klogo.png'
import githubpink from '../images/githubpink.png'
import kayporthome from '../images/kayporthome.png'
const Reactapp = () => {

    return (
      <body className="Reactapp">
          <NavBar />
          <div className='Reactapp_Title'>
              React.js
          </div>
        <div className='Reactapp_body'>
          <div className='Reactapp_videos'>
              <div className='Reactapp_videoRow1'>
                  <div className='Reactapp_back'>
                  <div className='Reactapp_outpost'>
                    <video className='Reactapp_outpostvideo' controls src={outpost} alt='outpost'/>
                    <div className='Reactapp_outpostlinks'>
                    <a className='Reactapp_lighthouse' href='https://github.com/wyncode/c39_armed_forces'><img className='Reactapp_lighthouse' src={Outpostlight} alt='lighthouse'/></a>
                    <a className='Reactapp_slides' href='https://docs.google.com/presentation/d/199Y5AQyuJpVqTc98snlu4oAWdMGXeVpnD_Jn_EnNwBg/edit?usp=sharing'><img className='Reactapp_slides' src={slides1} alt='lighthouse'/></a>
                 </div>
                 </div>
                  </div>
                  <div className='Reactapp_back'>
                  <div className='Reactapp_porfolio'>
                  <img className='Reactapp_portfoliovideo' src={kayporthome} alt='outpost'/>
                  <div className='Reactapp_Pokelinks'>
                    <a className='Reactapp_githubpink' href='https://github.com/Kaylee2319/My-Portfolio'><img className='Reactapp_githubpink' src={githubpink} alt='lighthouse'/></a>
                    <a className='Reactapp_logo' href='https://www.kayleeharding.com/about'><img className='Reactapp_logo' src={klogo} alt='lighthouse'/></a>
                 </div>
                 </div>
                  </div>
              </div>
              <div className='Reactapp_videoRow2'>
                  <div className='Reactapp_pokecardex'>
                  <video className='Reactapp_pokecardexvideo'controls src={Pokecardex} alt='pokecardex'/>
                  <div className='Reactapp_Pokelinks'>
                    <a className='Reactapp_pokeball' href='https://github.com/wyncode/c39_midterm_Ianne_gabriel_kaylee_parham'><img className='Reactapp_pokeball' src={poke} alt='pokeball'/></a>
                    <a className='Reactapp_slides' href='https://docs.google.com/presentation/d/199Y5AQyuJpVqTc98snlu4oAWdMGXeVpnD_Jn_EnNwBg/edit?usp=sharing'><img className='Reactapp_slides' src={slides1} alt='lighthouse'/></a>
                 </div>            
                  </div>
              </div>
            
              </div>
          </div>
          <Footer />
      </body>
 );
};
export default Reactapp