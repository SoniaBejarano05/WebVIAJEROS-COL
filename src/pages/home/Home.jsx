import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import '../../assets/css/styles.css';
import wallHeader from '../../assets/header_wallpaper.jpg'
import axios from 'axios';


function Home() {

  axios.get('http://localhost:3000/api/restaurant')
    .then(response => {
      console.log(response)
      var results = response.data.data
      let review = document.getElementById('restaurantes');
      for (var i = 0; i < results.length; i++) {
        var item = results[i];

        console.log(item.categoria);

        review.innerHTML += `
        <a href='?' class='card bg-dark border-0 rounded-5 p-3 ' >
          <img
            src="${item.fotografias}"
            alt=""
            style={{ width: '100%' }}
            class='img-home'
          />
        <h2 class='titulo-tarjeta-home'>${item.nombre_restaurante}</h2>
        <div>
          <p class='texto' id='descripcion'>${item.descripcion}</p>
          <p class='texto' id='ubicacion'>${item.ubicacion}</p>
          <p class='texto' id='horario'>${item.horario}</p>
        </div>
        <div>
          <div class="card-stats">
            <div class="stat">
              <div class="value">4<sup>m</sup></div>
              <div class="type">read</div>
            </div>
            <div class="stat border">
              <div class="value">5123</div>
              <div class="type">views</div>
            </div>
            <div class="stat">
              <div class="value">32</div>
              <div class="type">comments</div>
            </div>
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
