import { Link } from "react-router-dom";

function Register() {

    return (
      <>
        <div>
          <p>Queremos saber tus opiniones, para ello debes registrarte.</p>
        </div>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Nombres</label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Apellidos</label>
            <input type="text" class="form-control" id="lastName" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
        <button>
            <Link to='/auth/login'>Ir al login</Link>
        </button>
      </>
    )
  }
  
  export default Register
  