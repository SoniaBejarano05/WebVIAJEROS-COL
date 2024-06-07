import { useState } from 'react';
import '../../assets/css/styles.css';
import Imagen from '../../assets/restaurantes/rest.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Restaurante() {

  const { id } = useParams();
  console.log(id);
  axios.get(`http://localhost:3000/api/restaurant/${id}`)
    .then(response => {
      var result = response.data.infoRestaurant
      let review = document.getElementById('info');
      console.log(result)
      review.innerHTML = `
          <div class='titulo'>
            <h1>${result.nombre_restaurante}</h1>
          </div>
          <section class='restaurant'>
            <img
              src="${result.fotografias}"
             
              alt=""
              class='img-rest rest1'
            />
            <div class='rest1'>
              <h2 class='titulo'>Detalles</h2>
              <h4 class='titluo-1'>Descripción</h4>
              <p class='contenido-1'>${result.descripcion}</p>
              <h4 class='titluo-1'>Tipo de cocina</h4>
              <p class='contenido-1'>${result.categoria}</p>
              <h4 class='titluo-1'>Ubicación</h4>
              <p class='contenido-1'>${result.Ubicacion}</p>
              <h4 class='titluo-1'>Horario</h4>
              <p class='contenido-1'>${result.horario}</p>
            </div>
            <div class='rest1'>
              <h2 class='titulo'>Calificaciones</h2>
              <h3 class='titluo-1'>Calidad</h3>
              <p class='titluo-1'>Calidad total</p>
              <h4 class='titluo-1'>Precio</h4>
              <p class='contenido-1'>Precio total</p>
              <h4 class='titluo-1'>Servicio al cliente</h4>
              <p class='contenido-1'>Servicio al cliente total</p>
            </div>
          </section>
       
      `
    }
    )
    .catch(error => {
      console.log(error);
    });
    axios.get(`http://localhost:3000/api/rating/restaurant/${id}`)
    .then(response => {
      console.log(response)
      var results2 = response.data.restaurante
      let review2 = document.getElementById('opiniones');
      for (var i = 0; i < results2.length; i++) {
        var item = results2[i];
        review2.innerHTML += `
          <div class='rest1 opiniones'>
            
            <div class='campos-calificaciones'>
              <h2 class='titulo-calificacion'>Calidad</h2>
              <p class='titluo-1'>${item.quality}</p>
              <h2 class='titulo-calificacion'>Precio</h2>
              <p class='titluo-1'>${item.quality}</p>
              <h2 class='titulo-calificacion'>Servicio al cliente</h2>
              <p class='titluo-1'>${item.customerService}</p>
            </div>
            <div class='campos-calificaciones'>
              <h2 class='titulo-calificacion'>Comentarios</h2>
              <p class='titluo-1'>${item.comments}</p>
            </div>

          </div>
        `;
      }
    }
      // setLoading(false);
    )
    .catch(error => {
      console.log(error);
    });
    
  return (


    <main>
      <div class='vh-100 rounded-5'>

        <div id='info'>
          
        </div>
        <h1 className='titulo'>Opiniones</h1>
        <section id='opiniones'>

        </section>
      </div>
    </main>
  )
}

export default Restaurante
