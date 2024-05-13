import React from 'react'
import './Contact.css'
import mail_icon from '../../Portfolio_React_Assets/assets/mail_icon.svg'
import location_icon from '../../Portfolio_React_Assets/assets/location_icon.svg'
import call_icon from '../../Portfolio_React_Assets/assets/call_icon.svg'
import linkedin from '../../Portfolio_React_Assets/linkedin.svg'

import theme_pattern from '../../Portfolio_React_Assets/assets/theme_pattern.svg'
const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "958b8d74-9338-423b-b42a-6dcb14b47705");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            alert(data.message);
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm actively seeking internships, co-op opportunities, or entry-level positions 
                    where I can apply my skills and learn from experienced professionals. Whether it's a
                     conversation about potential openings, advice on breaking into the industry, or just networking, 
                     I'd love to connect! 
                     <br></br><br></br>Feel free to reach out to discuss any opportunities or collaborations. Let's explore how my skills and enthusiasm can benefit your team.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon}alt=""/><p>vaishnavivarma3938@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+916281108706</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Hyderabad,India</p>
                    </div>
                    <a href="https://www.linkedin.com/in/b-vaishnavi-varma-2b7073258/" target="_blank" rel="noopener noreferrer">
                    <div className="contact-detail">
                        <img src={linkedin} alt="" />
                    <p>LinkedIn</p>
                </div>
            </a>
                </div>
            </div>
            <form onSubmit = {onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor=''>Write your message here</label>
                <textarea name='message' rows='8' placeholder='Enter your message'/>
                <button type='submit' className='contact-submit'>Submit now</button>




            </form>
        </div>
    </div>
  );
}

export default Contact;