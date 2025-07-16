import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css';
import '../App.css';

function HomeCarousel() {
  return (
    <section id="home" className="home-carousel">
      <Carousel interval={6000000} controls={true}>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/assets/banners/home/img1.jpg"
            alt="Primeiro slide"
          />
          <Carousel.Caption className='caption' style={{bottom:'0'}}>
            <h2 style={{ fontFamily: 'JosephSophia' }}> Desperte Seus Sentidos</h2>
            <p className="lato-light">Uma experiência de aroma e sabor em cada xícara.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/assets/banners/home/img2.jpg"
            alt="Segundo slide"
          />
          <Carousel.Caption className='caption-left'>
            <h2 style={{ fontFamily: 'JosephSophia' }}>Do Grão à Xícara</h2>
            <p className="lato-light" >Nossa paixão é a qualidade em cada detalhe.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img style={{opacity:'75%',backgroundColor: '#33302F!important'}}
            className="d-block w-100"
            src="src/assets/banners/home/img3.jpg"
            alt="Terceiro slide"
          />
          <Carousel.Caption className='caption fundo-fade'> 
          <h2 style={{ fontFamily: 'JosephSophia', color: '#FFFFFF', fontWeight:"bold"}}>A Essência do Sabor</h2>
          <p className="lato-light" style={{color:"#FFFFFF"}} >Simplesmente o melhor café, preparado para você.</p>
        </Carousel.Caption>
      </Carousel.Item>

      </Carousel>
    </section>
  );
}

export default HomeCarousel;