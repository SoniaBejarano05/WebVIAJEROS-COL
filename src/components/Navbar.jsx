import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logoWebViajeros.png';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand d-flex align-items-center ms-3" href="/">
            <img src={logo} alt='Logo' style={{height: '3rem'}}/>
            <h2 className='px-2' style={{color: 'green'}}>WEB VIAJEROS</h2>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <Link to='/home'>home</Link> */}
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
              <li class="nav-item">
                {/* <Link to='Login' className="text-light text-decoration-none">Iniciar Sesion</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet/>
    </>
  )
}

export default Navbar
