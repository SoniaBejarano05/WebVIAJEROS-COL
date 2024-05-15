import { Link } from "react-router-dom";
import logo from '../assets/logoWebViajeros.png';
import { useAuth } from "../context/auth";
import '../assets/css/styles.css'

function Navbar() {
  const [user, setUser] = useAuth();

  const handleLogout = () => {
   
    localStorage.removeItem("user");
    
    setUser(null);
  };

  return (
    <>
      <nav className="navbar barra navbar-expand-lg fixed-top pt-0 ">
      <div className="container-fluid">
          <a className="logo " href="/">
            <img src={logo} alt='Logo' style={{height: '3rem'}}/>
            <h2 className='px-2 logo' >WEB VIAJEROS</h2>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse items" id="navbarSupportedContent">
            <ul className="navbar-nav items mb-lg-0">
              <li className="nav-item items">
                <Link to="/home" className="nav-link active" aria-current="page">Inicio</Link>
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
              <button className="btn btn-danger" onClick={handleLogout}>LogOut</button>
            </div>
          ) : (
            <><a className=" boton login ">
                <Link to='/auth/login' className="nav-link">Iniciar sesión</Link>
              </a>
              <a className="boton signup ">
                  <Link to='/' className="nav-link">Registrate</Link>
                </a></>
          )}
       </div>
      </nav>
    </>
  )
}

export default Navbar;
