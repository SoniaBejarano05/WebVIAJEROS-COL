import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {

    return (
      <>
        <div>
          <p>Ingresa con tus credenciales</p>
        </div>
        <hr />
        <Form size="lg" >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
      
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
          <button className="btn btn-primary">
            <Link to='/auth/register' className="text-light text-decoration-none">Registrarse</Link>
          </button>
      </Form>
      </>
    )
  }
  
  export default Login
  