import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../css/Portfolio.css';
const Portfolio = () => {

  return (
    <body className="PortfolioPage">
    <NavBar />
      <div className='PortfolioPage_Title'>
      My Skills and Talents
      </div>
      <div className='PortfolioPage_Links'>
        <div className='PortfolioPage_Link1'>
          <Link to='/react' className='PortfolioPage_React'>React Apps <div className='PortfolioPage_ReaImg'></div></Link>
          <Link to='/photoshop' className='PortfolioPage_Photoshop'>Photoshop <div className='PortfolioPage_PhotoImg'></div></Link>
        </div>
        <div className='PortfolioPage_Link2'>
          <Link to='/figma' className='PortfolioPage_Figma'>Figma <div className='PortfolioPage_FigImg'></div></Link>
          <Link to='/military' className='PortfolioPage_Military'>Military <div className='PortfolioPage_MilImg'></div></Link>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default Portfolio;
