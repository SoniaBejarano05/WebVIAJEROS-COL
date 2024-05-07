import React, { useEffect } from 'react';

function Mapa() {
  useEffect(() => {
    iniciarMap();
  }, []); // Esto asegura que la función se ejecute solo una vez, similar a componentDidMount()

  function iniciarMap() {
    var coord = { lat: 10.4001988, lng: -75.5085254 };
    var map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: coord
    });
    var marker = new window.google.maps.Marker({
      position: coord,
      map: map
    });
  }

  return <div id="map" style={{ width: '50%', height: '500px'}}></div>;
}

export default Mapa;