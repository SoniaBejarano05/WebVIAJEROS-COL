import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logoWebViajeros.png';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center ms-3" href="/">
            <img src={logo} alt='Logo' style={{height: '3rem'}}/>
            <h2 className='px-2' style={{color: 'green'}}>WEB VIAJEROS</h2>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link to='/home'>home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
              <li className="nav-item">
                <Link to='/auth' className="text-light text-decoration-none">Iniciar Sesion</Link>
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
