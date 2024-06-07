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
      /*review.innerHTML = `
        <img
            src="${result.fotografias}"
            alt=""
            style={{ width: '100%' }}
            class='img-home'
          />
      <p>
      ${result.categoria}
      ${result.descripcion}
      ${result.horario}
      

      </p>
      `*/
    }
    )
    .catch(error => {
      console.log(error);
    });

  return (



    <main id='info'>
      <div className='vh-100 rounded-5'>
        <div className='titulo'>
          <h1>nombre</h1>
        </div>
        <img
          src="https://media.admagazine.com/photos/651aeed9da5f4d9a3844a94b/4:3/w_2660,h_1995,c_limit/Porten%CC%83o-restaurante-1.jpg"
          style={{ width: '20%' }}
          alt=""
          class='img-rest'
        />
        <div>
          
        </div>
      </div>
    </main>


  )



  return (
    <>
      <div className='vh-100 rounded-5'>
        <div className='tit-restaurantes'>
          <h1>Encuentra tu proximo restaurante </h1>
          <div>
            <label className='ml-1'>Ciudad</label>
            <input className='buscar'></input>
          </div>
        </div>
        <main className='cont-tarjeta'>
          <div className='lateral-izq'>
            <h2>filtros</h2>
            <label>Puntuación</label>
            <select className="select">
              <option value="value1">1</option>
              <option value="value2">2</option>
              <option value="value3">3</option>
              <option value="value4">4</option>
              <option value="value5">5</option>
            </select>
            <label>Ubicacion</label>
            <select className="select">
              <option value="centro">Centro</option>
              <option value="sur">Sur</option>
              <option value="norte">Norte</option>
            </select>
            <button className='' href=''>Filtrar</button>
          </div>
          <div className="card mb-3 rounded-3 tarjeta " >
            <div className="row g-0">
              <div className="col-md-4 p-2 d-flex justify-content-center">
                <img className='' src={Imagen} alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" >Restaurante</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  <div>
                    <button className="btn btn-primary">Ver restaurante</button>
                    <button className="btn btn-warning " style={{ maxWidth: "", margin: "5px" }} >Calificar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

    </>
  )
}

export default Restaurante
