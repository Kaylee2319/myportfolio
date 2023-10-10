import React, { useState } from 'react';
import Footer from './Footer'
import NavBar from './NavBar';
import '../css/About.css';


const About = () => {

  const [aboutMe, setAboutMe] = useState(`Hello, I'm Kaylee Harding. I am prior service military turned web developer and have a love of problem solving and dedication to my job. CLICK around to find out a little more ABOUT ME. `);
  const [aboutMeTitle, setAboutMeTitle] = useState('About Me!');

  const message = () =>{
    setAboutMe(`Hello, I'm Kaylee Harding. I am prior service military turned web developer and have a love of problem solving and dedication to my job. CLICK around to find out a little more ABOUT ME.  `)
    setAboutMeTitle('About Me!')
  }
  const message2 = () =>{
    setAboutMe(`Here I learned the MERN stack (MongoDB, Express, React, and Node.js) along with JavaScript, HTML, and CSS. With this new knowledge and the skills and values acquired throughout my life, I was able to pitch and develop an application idea. With an amazing team, we were able to bring my ideas to life. This application, Outpost, is focused around veteran suicide rates and allows for a platform to connect with other veterans (through gaming)  who may share similar stories.
    This project was built using the MERN (MongoDB, Express, React, Node.js) Stack. Other technologies used to improve user experience were Sweet Alert, to notify you when an update is submitted or you are logged out. Send Grid was used to send welcome/goodbye emails when users sign up or closed the account. JSON Web Tokens were used to create tokens that validated users throughout the website. Socket.io was used to allow for communication between users in the chat. Lastly, we used Postman to test the creation of users, and other HTTP requests in the backend. Lastly, Heroku was used to deploy the app to the web`)
    setAboutMeTitle('Wyncode Academy')
  }
  const message3 = () =>{
    setAboutMe('I served 5 years active duty in the United States Coast Guard, as a Machinery Technician. I had many duties including Search and Rescue, Engineer of the Watch, Law Enforcement Officer and Communication Watch Stander. With the values instilled in us from day one of boot camp, I was able to save many lives. As a Machinery Technician you are expected to work until the project or problem is solved, otherwise unit readiness is compromised. I repaired and maintained many different engines, stopped drug runners, pulled people from burning boats, and spent several days looking for a person at sea knowing they may never be found. These high stress situations played a major role in my life while strengthening my personal core values: prepared, professional, proficient.')
    setAboutMeTitle('Coast Guard')
  }
  const message4 = () =>{
    setAboutMe('To be better today than I was yesterday. To keep a hunger for knowledge. To learn at least one new thing everyday. To maintain the core values ingrained in me while serving... HONOR, RESPECT, DEVOTION TO DUTY.')
    setAboutMeTitle('My Drive')
  }
  const message5 = () =>{
    setAboutMe('I was born and raised in Grapeland, Texas, where I was one of only 40 people in my graduating class. I was a member of the FFA (Future Farmers of America) and raised and showed many animals. We also built multiple items for shows including, utility trailers, picnic tables, and green houses. I was also a part of many sports teams including, softball, track and field, cross country, and also land judging. This is where and how I began my amazing journey to become the person I am today.')
    setAboutMeTitle('Early Life')
  }
   return(
    <body className="aboutPage">
    <NavBar />
    <div className="aboutPage_body">
    <div className='aboutPage_quote'>From Oceans To Notions</div>
    <div className='aboutPage_Image'></div>
    <div className='aboutPage_aboutBackground'>
        <div className='aboutPage_Textbox'>
         <h1 className='aboutPage_Title'> {aboutMeTitle} </h1>
         <p className='aboutPage_Description'> {aboutMe} </p>
        </div>
    </div>
    </div>
    <div className='aboutPage_buttons'>
      <button onClick={message} className='aboutPage_button1'>1</button>
      <button onClick={message2} className='aboutPage_button2'>2</button>
      <button onClick={message3} className='aboutPage_button3'>3</button>
      <button onClick={message4} className='aboutPage_button4'>4</button>
      <button onClick={message5} className='aboutPage_button5'>5</button>
    </div>
    <Footer />
    </body>
  );
};

export default About;
