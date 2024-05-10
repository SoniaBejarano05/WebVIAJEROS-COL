import { useState } from 'react';
import '../../assets/css/tarjetas.css'
import  Imagen  from '../../assets/restaurantes/rest.jpg';
import wallHeader from '../../assets/restaurant_wallpaper.jpeg';


function Restaurante() {

  return (
    <>
      <div className='vh-100 rounded-5' style={{backgroundImage: `url(${wallHeader})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <h1 style={{display: "flex", justifyContent:"center"}}>Encuentra tu proximo restaurante </h1>
        <div>
          <label >Ciudad</label>
          <input></input>
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
      </div>
     
    </>
  )
}

export default Restaurante
