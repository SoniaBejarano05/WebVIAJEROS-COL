import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Restaurante from "../pages/restaurant/Restaurante.jsx";
import LayoutLogin from "../pages/auth/LayoutAuth.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from '../pages/auth/Register.jsx'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="restaurante" element={<Restaurante />}></Route>
          <Route path="auth" element={<LayoutLogin />}>
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
          </Route>
        </Route>
      </Routes> 
    </>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default Router
