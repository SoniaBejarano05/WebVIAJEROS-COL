import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Blog from "../pages/blog/Blog.jsx";
import LayoutLogin from "../pages/auth/LayoutAuth.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from '../pages/auth/Register.jsx'

function Router() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" ></Route>
        <Route index path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/auth" element={<LayoutLogin />}>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/auth/register" element={<Register/>}></Route>
        </Route>
      </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default Router
