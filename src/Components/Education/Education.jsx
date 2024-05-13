import React from 'react';
import './Education.css'; // Import your CSS file

const Education = () => {
  return (
    <div id= 'works' className="education-container">
      <h2>Education</h2>
      <div className="education-item">
        <h3>Keshav Memorial Institute of Technology</h3>
        <p>Bachelor of Technology in CSE, Hyderabad</p>
        <p>2021 - Present</p>
        <p>CGPA: 9.5 / 10</p>
      </div>
      <div className="education-item">
        <h3>Sri Chaitanya Junior College</h3>
        <p>Intermediate</p>
        <p>2019 - 2021</p>
        <p>Percentage: 97.4%</p>
      </div>
      <div className="education-item">
        <h3>Johnson Grammar School, CBSE</h3>
        <p>Metric</p>
        <p>2012 - 2019</p>
        <p>Percentage: 94.6%</p>
      </div>
    </div>
  );
}

export default Education;
