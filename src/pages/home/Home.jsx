import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import '../../assets/css/styles.css';
import wallHeader from '../../assets/header_wallpaper.jpg';
import axios from 'axios';


function Home() {
  axios.get('http://localhost:3000/api/restaurant')
    .then(response => {
      console.log(response)
      var results = response.data.data
      let review = document.getElementById('restaurantes');
      for (var i = 0; i < results.length; i++) {
        var item = results[i];
        review.innerHTML += `
        <a href='restaurante/${item._id}' class='card bg-dark border-0 rounded-5 p-3 ' >
          <img
            src="${item.fotografias}"
            alt=""
            style={{ width: '100%' }}
            class='img-home'
          />
          <h2 class='titulo-tarjeta-home'>${item.nombre_restaurante}</h2>
          <div>
            <div>
           
              <p class='texto' id='descripcion'>${item.descripcion}</p>
            </div>
            <div>
            
              <p class='texto' id='ubicacion'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt texto" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg> ${item.ubicacion}</p>
            </div>
            <div>
              <p class='texto' id='horario'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
            </svg> ${item.horario}</p>
            </div>
          </div>
          
        </a>
        `;
      }
    }
      // setLoading(false);
    )
    .catch(error => {
      console.log(error);
    });

  return (
    <>
      <div className='vh-50 rounded-5' style={{ backgroundImage: `url(${wallHeader})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='p-3 h-100'>
          <div className="row h-100">
            <div className="col-sm-8 d-flex align-items-center">
              <div className='ps-3 text-light'>
                <p className='fs-1' style={{ textShadow: 'black 0.1em 0.1em 0.2em' }}>Bienvenidos a <br /><span className='fw-bold'>Viajeros por Colombia.</span></p>
                <p className='fs-1' style={{ textShadow: 'black 0.1em 0.1em 0.2em' }}> Aqui encontraras las mejores opciones gastronomicas tipicas del Caribe Colombiano<br /><span className='fw-bold'> Guiate y haz de tu viaje un recuerdo inolvidable!</span></p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className='card border-0 rounded-5 p-3'>
                <h4>Ana Restaurante Bar</h4>
                <FaArrowRight />
                <hr className='m-0 py-1' />
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/3c/66/ana-caribe-asia.jpg?w=1200&h=-1&s=1"
                      alt=""
                      style={{ width: '100%' }}
                      className='rounded-3'
                    />
                  </div>
                  <div className="col-md-6">
                    a
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='titulo'>Nuestros restaurantes aliados</h1>
      <main className='contenedor-tarjetas' id="restaurantes">
        
      </main>
    </>
  )
}

export default Home
