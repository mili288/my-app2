import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Navbar.css';
import Logo from './photos/logo1.png';
import { FaAlignJustify } from 'react-icons/fa';



function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  

  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  };

  
  return (
  <div className="navbar">
    <div className="leftSide" id={openLinks ? "open" : "close"}>
      <Link to="/">
    <img src={Logo} style={{cursor: 'pointer'}} />
    </Link>
       <div className="leftSide" >
           <div className="hiddenLinks">
         <Link to="/"> Home </Link>
         <Link to="/art"> Art </Link>
         <Link to="/manga">Manga </Link>
         <Link to="/about"> About </Link>
         <Link to="/contact"> Contact </Link>
           </div>
           </div>
       </div>
       <div className="rightSide">
         <Link to="/"> Home </Link>
         <Link to="/art"> Art </Link>
         <Link to="/manga">Manga </Link>
         <Link to="/about"> About </Link>
         <Link to="/contact"> Contact </Link>
         <button onClick={toggleNavbar}>
         <FaAlignJustify />
         </button>
         
       </div>
  </div>
    );
  }
  export default Navbar;