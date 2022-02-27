import React from 'react';
import '../styles/Contact.css';
import { FaTwitter, FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Background from '../photos/cringeyeah.jpg';
import Berry from '../photos/berry.png'
import Colorgang from '../photos/COLORGANG'
import Cit from '../photos/cit.png'





const Contact = () =>{
 

  return (
    <div className="contact" style={{ backgroundImage: `url(${Cit})`}}>
      <h3 className="contact-title">Contact Me</h3>
      <div>
      <a  href="https://twitter.com/Poknus">
      <FaTwitter onClick={() => ("https://twitter.com/Poknus")} 
      className="twittter-icon" /></a>
      <a className="discord-icon" href="https://discord.gg/HcWj6uWW">
        <FaDiscord onClick={() => ("https://discord.gg/HcWj6uWW")} 
        className="discord-icon"/>
      </a>


      <a className="discord-icon" href="https://instagram.com/poknusfr">
        <FaInstagram onClick={() => ("https://instagram.com/poknusfr")} 
        className="discord-icon"/>
      </a>
      
      <div
       class="form__group field">
  <input type="input" className="form__field" placeholder="Leave a message"  id='name' required />
    <button className="btn-submit" role="button">Send</button>
    </div>
      </div>
    </div>
  );
}
export default Contact;