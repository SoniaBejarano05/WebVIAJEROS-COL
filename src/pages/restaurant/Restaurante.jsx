import { useState } from 'react';
import '../../assets/css/styles.css';
import  Imagen  from '../../assets/restaurantes/rest.jpg';

function Restaurante() {

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
                    <button className="btn btn-warning "style={{maxWidth: "", margin: "5px"}} >Calificar</button>
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
