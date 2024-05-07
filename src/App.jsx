import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='px-1 pt-1'>
        <Router />
      </div>
      {/* <Footer/> */} 
    </>
  )
}

export default App
