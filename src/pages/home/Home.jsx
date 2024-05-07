import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

import wallHeader from '../../assets/header_wallpaper.jpg'

function Home() {

  return (
    <>
      <div className='vh-100 rounded-5' style={{backgroundImage: `url(${wallHeader})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className='p-3 h-100'>
          <div className="row h-100">
            <div className="col-sm-8 d-flex align-items-end">
              <div className='ps-3 text-light'>
                <p className='fs-1'>Bienvenidos a <br /><span className='fw-bold'>Viajeros por Colombia.</span></p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className='card border-0 rounded-5 p-3'>
                <h4>Ana Restaurante Bar</h4>
                <FaArrowRight />
                <hr className='m-0 py-1'/>
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
    </>
  )
}

export default Home
