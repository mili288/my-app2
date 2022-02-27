import React from 'react';
import City1 from '../photos/city.jpg';
import '../styles/About.css';
import BannerImage from '../photos/background2';


const About = () =>{
  return (
    <div className="about" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer1">
       <h3>About Me</h3>
      
      </div>
    </div>
  );
}
export default About;
