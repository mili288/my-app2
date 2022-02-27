import React from 'react'
import '../styles/Manga.css'
import Manga1 from '../photos/banner1.png';
import ArtItems from '../pages/ArtItems';
import { ArtList } from '../pages/ArtList';
import { Link } from 'react-router-dom';
import Berry from '../photos/berry.png'; 
import Yamato from '../photos/YAMATO.jpg'
import City from '../photos/city.jpg';
import Girl from '../photos/girl.jpg';
import CringeYeah from '../photos/cringeyeah.jpg';
import Finished from '../photos/FINISHED1.png';
import Banner from '../photos/banner1.png';
import May from '../photos/may.png';
import Gang from '../photos/GANG'; 
import BannerImage from '../photos/background2';


function Manga() {
  return (
    <div className="manga" style={{ backgroundImage: `url(${BannerImage})`}}>
        <h1 className="title">My Manga</h1>
        <a href="https://tapas.io/episode/2405718">
   <img className="banner" src={Banner}>
   </img></a>
    </div>
  )
}

export default Manga