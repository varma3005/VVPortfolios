import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
/*import profile_img from '../../Portfolio_React_Assets/assets/profile_img.svg';*/
import my_pic from '../../Portfolio_React_Assets/assets/my_pic.jpg';

const Hero = () => {

  const openResume = () => {
    
    window.open('https://drive.google.com/file/d/1GsZHoLnmFvOL-b6xMijSF4FLtXw3t58t/view?usp=sharing', '_blank');
  };
  
  return (
    <div id='home'className='hero'>
        <img src={my_pic} alt="" />
        <h1>Hi, Myself <br></br><span>B Vaishnavi Varma,</span> <br></br>And I'm a frontend developer </h1>
        <p>A highly motivated and enthusiastic individual pursuing a degree in Computer Science, 
          eager to contribute to software development projects while
        continuously learning and growing in the field.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href = '#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume" onClick={openResume}>My resume</div>
        </div>

    </div>
  )
}

export default Hero