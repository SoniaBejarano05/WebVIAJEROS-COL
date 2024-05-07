import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useAuth } from "../../context/auth";

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useAuth()

  const users = [
    { username: 'fabian', password: '1234' },
    { username: 'juanito', password: '4321' },
  ];
  
  const handleSubmit = (event) => {
    event.preventDefault();

    
    const user = users.find(e => e.username === username && e.password === password);
    if (user) {
      console.log("Inicio de sesión exitoso");
      setUser(user)
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };


    return (
      <>
        <div>
          <p>Ingresa con tus credenciales</p>
        </div>
        <hr />
        <Form size="lg" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter email" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <button className="btn btn-primary">
          <Link to='/auth/register' className="text-light text-decoration-none">Registrarse</Link>
        </button>
      </>
    )
  }
  
  export default Login;
