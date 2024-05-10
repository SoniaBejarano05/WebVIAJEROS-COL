import { useState } from "react";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";

function Register() {

  const { formData, handleChange, handleSubmit, confirmPass, msgError } = useRegister();
  const countries = [
    {name: 'colombia', id: 1},
    {name: 'espana', id: 2},
    {name: 'estados Unidos', id: 3},

  ]
    return (
      <>
        <div>
          <p className="text-light">Queremos saber tus opiniones, para ello debes registrarte.</p>
        </div>
        <hr />
        {
          msgError && 
          <div class="alert alert-info" role="alert">
            { msgError }
          </div>
        }
        <form onSubmit={handleSubmit} className="text-start">
          <div className="row">
            <div className="col-md-6 pb-3">
              <label htmlFor="name" className="form-label">Nombres</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Nombres" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="col-md-6 pb-3">
              <label htmlFor="lastName" className="form-label">Apellidos</label>
              <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Apellidos" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="col-md-6 pb-3">
            <label htmlFor="inputCountry" className="form-label">Pais</label>
            <select
              id="inputCountry"
              className="form-select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option selected>Choose...</option>
              {countries.map(country => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            </div>  
            <div className="col-md-6 pb-3">
              <label htmlFor="email" className="form-label">Correo</label>
              <input type="email" name="email" className="form-control" id="email" placeholder="Correo" value={formData.email} onChange={handleChange} required />
            </div>  
            <div className="col-md-6 pb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" name="password" className="form-control" id="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
            </div>  
            <div className="col-md-6 pb-3">
              <label htmlFor="confirmPass" className="form-label">Confirmar Contraseña</label>
              <input type="password" name="confirmPass" className="form-control" id="confirmPass" placeholder="Confirmar contraseña" value={confirmPass} onChange={handleChange} required />
            </div>  
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </div>
        </form>
        <button className="btn btn-primary">
            <Link to='/auth/login'>Ir al login</Link>
        </button>
      </>
    )
  }
  
  export default Register
  