// qualquer coisa estranha no css pode ser proveniente dessas stylesheets (App ou index)
import './App.css'
import NavbarComponent from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <NavbarComponent/>
      <Home />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  )
}

export default App