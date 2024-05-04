import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Router />
      </div>
      <Footer/>
    </>
  )
}

export default App
