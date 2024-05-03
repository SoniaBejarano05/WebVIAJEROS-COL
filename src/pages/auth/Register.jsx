import { Link } from "react-router-dom";

function Register() {

    return (
      <>
        <div>
          <h1>Este es el Register de la pagina. Pagina hija</h1>
        </div>
        <button>
            <Link to='/auth/login'>Ir al login</Link>
        </button>
      </>
    )
  }
  
  export default Register
  