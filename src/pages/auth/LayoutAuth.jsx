import { Outlet, Link } from "react-router-dom";
import wallpaper from '../../assets/wallpaperLogin.jpeg'

function LayoutLogin() {

  return (
    <>
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
      <div className="p-4 text-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <h1>Ingresa a la web Viajeros en Colombia.</h1>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
    </>
  )
}



export default LayoutLogin
