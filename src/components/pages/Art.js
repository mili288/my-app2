import React from 'react'
import Manga1 from '../photos/banner1.png';
import ArtItems from '../pages/ArtItems';
import '../styles/Art.css';
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
import Boggy from '../photos/boggy.jpg'
import OneThousand from '../photos/1000.jpg'
import Lauren from '../photos/Lauren.png'
import Album from '../photos/ALBUM.png'
import Hassy from '../photos/HASSY.jpg'
import Moe from '../photos/MOE.jpg'
import Turnaround from '../photos/TURNAROUND.jpg'
import Cit from '../photos/cit.png'
import Actual from '../photos/Actual.png'

function Art() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${BannerImage})`}}>
      <h1 className="menuTitle">My Projects</h1> 


      <a href="">
   <img className="album" src={Album}>
   </img></a>

      <a href="">
   <img className="lauren" src={Lauren}>
   </img></a>

   <a href="">
   <img className="moe" src={Moe}>
   </img></a>

   <a href="">
   <img className="hassy" src={Hassy}>
   </img></a>

   <a href="">
   <img className="turnaround" src={Turnaround}>
   </img></a>

      <a href="">
   <img className="onethousand" src={OneThousand}>
   </img></a>

      <a href="">
   <img className="boggy" src={Boggy}>
   </img></a>
  
   <a href="">
   <img className="yamato" src={Yamato}>
   </img></a>

   <a href="">
   <img className="actual" src={Actual}>
   </img></a>

   <a href="">
   <img className="city" src={City}>
   </img></a>

   <a href="">
   <img className="cit" src={Cit}>
   </img></a>

   <a href="">
   <img className="girl" src={Girl}>
   </img></a>

   <a href="">
   <img className="cringeyeah" src={CringeYeah}>
   </img></a>

   <a href="">
   <img className="berry" src={Berry}>
   </img></a>

   <a href="">
   <img className="finished" src={Finished}>
   </img></a>

   <a href="">
   <img className="may" src={May}>
   </img></a>


   </div>


    
  )
}

export default Art