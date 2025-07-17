import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import '../components/components-style.css';
import ProductCard from '../components/ProductCard';

import cappuccinoImg from '../assets/cappuccino.jpg';
import macchiatoImg from '../assets/macchiato.jpg';
import geladoImg from '../assets/gelado.jpg';
import ristrettoImg from '../assets/cafe-ristretto.png';
import mochaImg from '../assets/cafe-mocha.jpg';
import coadoImg from '../assets/cafe-coado.jpg';

// Menu de Produtos
// Lista dos cafés com imagens e descrições (utilizar um card para cada produto!)

// Importando imagens dos produtos
const produtos = [
    {
        img: cappuccinoImg,
        titulo: 'Cappuccino',
        descricao: 'A harmonia perfeita entre espresso, leite vaporizado e uma cremosa espuma de leite. Um clássico reconfortante.',
        sabor: 'Intenso, cremoso'
    },
    {
        img: macchiatoImg,
        titulo: 'Macchiato',
        descricao: 'Um espresso intenso "manchado" com um toque de leite vaporizado, realçando a força e o sabor do café.',
        sabor: 'Forte, encorpado'
    },
    {
        img: geladoImg,
        titulo: 'Café Gelado',
        descricao: 'Extraído a frio para um sabor suave e menos ácido. A bebida ideal para se refrescar com qualidade e sabor.',
        sabor: 'Refrescante, suave'
    },
    {
        img: ristrettoImg,
        titulo: 'Café Ristretto',
        descricao: 'Uma extração curta e ousada de espresso, resultando em uma bebida mais concentrada, doce e com menos amargor.',
        sabor: 'Intenso, encorpado'
    },
    {
        img: mochaImg,
        titulo: 'Café Mocha',
        descricao: 'Uma combinação indulgente de espresso, chocolate e leite vaporizado, coberta com chantilly — o equilíbrio perfeito entre a força do café e a doçura do cacau.',
        sabor: 'Doce, achocolatado'
    },
    {
        img: coadoImg,
        titulo: 'Café Coado',
        descricao: 'Método clássico e afetivo, o café coado realça os sabores sutis dos grãos, revelando notas florais, frutadas ou achocolatadas em uma bebida leve e aromática.',
        sabor: 'Intenso, aromático'
    }
];

function Menu() {

    // Configuração do carrossel
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        notebook: {
            breakpoint: { max: 1200, min: 1024 },
            items: 2,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 770 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 770, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <section id="cardapio" className="menu-section">
            <Container>
                <h1 className="text-center mb-4 playfair-display-regular section-title">Nossos Produtos</h1>
                <Carousel
                    arrows={true}
                    responsive={responsive}
                    infinite={true}
                    additionalTransfrom={0}
                >
                    {produtos.map((produto) => (
                        
                        <ProductCard
                            key={produto.titulo}
                            img={produto.img}
                            titulo={produto.titulo}
                            descricao={produto.descricao}
                            sabor={produto.sabor}
                        />
                    ))}
                </Carousel>
            </Container>
        </section>
    );
}

export default Menu;