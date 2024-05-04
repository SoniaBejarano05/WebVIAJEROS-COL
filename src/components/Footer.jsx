import React from 'react';
import './Footer.css'
import  x from '../assets/images/x.png'
import  youtube from '../assets/images/youtube.png'
import  instagram from '../assets/images/instagram.png'
import  facebook from '../assets/images/facebook.png'

export const Footer = () =>{
    return(
      <>
      <div className="container vw-100">
        <p> © 2024 Web Viajeros COL. Todos los derechos reservados.   </p>
        <img className='x' src={x} alt="" />
        <img className='youtube' src={youtube} alt="" />
        <img className='instagram' src={instagram} alt="" />
        <img className='facebook' src={facebook} alt="" />
      </div>
      </>
    )
}