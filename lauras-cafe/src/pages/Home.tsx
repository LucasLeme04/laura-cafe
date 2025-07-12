// Arquivo: pages/Home.tsx

import { Container } from 'react-bootstrap';
import HomeCarousel from '../components/HomeCarousel';
import '../App.css'; // Importando o CSS

function Home() {
  return (
    // A classe vai na <section> (caixa de fora)
    <section className="secao-home">
        <HomeCarousel />
      
    </section>
  );
}

export default Home;