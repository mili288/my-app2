import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import BannerImage from '../photos/background2';
import Gang from '../photos/GANG';

const Home = () => {
  return (

    <div className="home" style={{ backgroundImage: `url(${Gang})` }}>
    <div className="headerContainer">
      <h1 className="menuTitle">Poknus Portfolio</h1> 
      <p>Look at my art here</p>
      <Link to="/art" >
      <button>My Art</button>
      </Link>
      </div>
    </div>
  );
  
}

export default Home;