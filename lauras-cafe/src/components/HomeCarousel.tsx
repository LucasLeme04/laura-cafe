import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css';
import '../App.css';

function HomeCarousel() {
  return (
    <section id="home" className="home-carousel">
      <Carousel interval={600000} controls={false}>

        <Carousel.Item>
          <img
            // USE A CLASSE PADRÃO DO BOOTSTRAP AQUI TAMBÉM
            className="d-block w-100"
            src="src/assets/banners/home/Prancheta 1.png.jpg"
            alt="Primeiro slide com uma xícara de café"
          />
          <Carousel.Caption >
            <h2 style={{ fontFamily: 'JosephSophia' }}>Seja bem Vindo !</h2>
            <p className="lato-light" >Lorem ipsum dolor sit amet...</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Os outros slides já estão corretos */}
        <Carousel.Item className='left'>
          <img
            className="d-block w-100"
            src="src/assets/banners/home/Prancheta 2.png"
            alt="Segundo slide com grãos de café"
          />
          <Carousel.Caption>
            <h2 style={{ fontFamily: 'JosephSophia' }}>Seja bem Vindo !</h2>
            <p className="lato-light" >Lorem ipsum dolor sit amet...</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* src\assets\banners\home\Prancheta 3.png.jpg */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/assets/banners/home/Prancheta 3.png.jpg"
            alt="Segundo slide com grãos de café"
          />
          <Carousel.Caption>
            <h2 style={{ fontFamily: 'JosephSophia' }}>Seja bem Vindo !</h2>
            <p className="lato-light" >Lorem ipsum dolor sit amet...</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  );
}

export default HomeCarousel;