// qualquer coisa estranha no css pode ser proveniente dessas stylesheets (App ou index)
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarComponent from './components/Navbar'
import Footer from './components/Footer'

import HomeCarousel from './components/HomeCarousel'
// import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

function App() {
   return (
    <>
      <NavbarComponent />
      <HomeCarousel /> {/* <-- Ele só chama a Home */}
      
        <About />
        <Menu />
        <Contact />
      
      <Footer />
    </>
  );
}

export default App