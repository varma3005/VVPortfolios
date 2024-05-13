import React from 'react'
import './About.css';
import theme_pattern from '../../Portfolio_React_Assets/assets/theme_pattern.svg'
/*import profile_img from '../../Portfolio_React_Assets/assets/about_profile.svg';*/
import square_pic from '../../Portfolio_React_Assets/assets/square_pic.jpg';
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src= {theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={square_pic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a dedicated Computer Science student with a passion for software development and a keen eye for innovation.
                        Currently pursuing my Bachelor of Technology in CSE at Keshav Memorial Institute of Technology, Hyderabad.<br></br>
                         <br></br>I maintained a stellar CGPA of 9.5 out of 10, with a strong foundation in Java, C, Python, and expertise in web technologies like ReactJS, HTML5, CSS3, Bootstrap, Tailwind, ExpressJS.<br></br> 
                         I thrive in crafting intuitive solutions. My recent projects include a Sorting Visualizer using ReactJS and a Console-Based Visitor Management System in Java, 
                         showcasing my proficiency in both frontend and backend development.<br></br>

                        <br></br>Beyond coding, I actively contribute to the National Service Scheme (NSS) as an Executive Board member, leading recruitment efforts and mentoring students on community service initiatives. Additionally, I've represented KMIT in the Smart India Hackathon, demonstrating my ability to collaborate and innovate under pressure.

I'm eager to bring my skills and passion for technology to your team. Let's connect on LinkedIn or via email—I'm excited to discuss how I can contribute to your projects!

</p>
                     
                </div>
<div className='container'>
<div class="card">
  <h2>Programming Languages</h2>
  <ul class="skills">
    <li>HTML & CSS</li>
    <li>React JS</li>
    <li>Javascript</li>
    <li>Express</li>
    <li>Java</li>
    <li>Python</li>
    <li>Bootstrap</li>
    <li>Tailwind</li>
    <li>C</li>
    <li>NodeJS</li>
    <li>TensorFlow</li>
    <li>Numpy & Pandas</li>
  </ul>
</div>

<div class="card">
  <h2>Libraries and Frameworks</h2>
  <ul class="skills">
    <li>HTML & CSS</li>
    <li>React JS</li>
    <li>Javascript</li>
    <li>Express</li>
    <li>Bootstrap</li>
    <li>Tailwind</li>
    <li>NodeJS</li>
    <li>TensorFlow</li>
    <li>Numpy & Pandas</li>
  </ul>
</div>

<div class="card">
  <h2>Databases</h2>
  <ul class="skills">
    <li>Mongo DB</li>
    <li>MySQL</li>
  </ul>
</div>
</div>

            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>SOFT SKILLS</h1>
                
            </div>
            
            <div className="about-achievement">
                
                <p>TEAM WORK</p>
            </div>
            <div className="about-achievement">
                
                <p>COMMUNICATON</p>
            </div>

            <div className="about-achievement">
                
                <p>PROBLEM SOLVING</p>
            </div>
            <div className="about-achievement">
                
                <p>TIME MANAGEMENT</p>
            </div>



        </div>
    </div>
  )
}

export default About