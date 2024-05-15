import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import '../src/assets/css/styles.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='px-1 pt-1 alto' >
        <Router />
      </div>
      <Footer/> 
    </>
  )
}

export default App
