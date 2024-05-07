import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logoWebViajeros.png';
import { useAuth } from "../context/auth";

function Navbar() {
  const [user, setUser] = useAuth();

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
                <Link to="/home" className="nav-link active" aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">Sobre Nosotros</Link>
              </li>
              <li className="nav-item">
              <Link to="/blog" className="nav-link active" aria-current="page">Blog</Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">Sobre Nosotros</Link>
              </li>
              <li className="nav-item">
              <Link to="/restaurante" className="nav-link active" aria-current="page">Restaurantes</Link>
              </li>
            </ul>
          </div>
          {user ? (
            <div className="navbar-text">
              <span className="me-2">Bienvenido, {user.username}</span>
            </div>
          ) : (
            <button className="btn btn-primary">
              <Link to='/auth/login' className="nav-link">Iniciar Sesión</Link>
            </button>
          )}
        </div>
      </nav>

      <Outlet/>
    </>
  )
}

export default Navbar;
