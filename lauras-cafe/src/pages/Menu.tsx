import { Container, Row, Col } from 'react-bootstrap';
import '../components/components-style.css';

import cappuccinoImg from '../assets/cappuccino.jpg';
import macchiatoImg from '../assets/macchiato.jpg';
import geladoImg from '../assets/gelado.jpg';
import ristrettoImg from '../assets/cafe-ristretto.png';
import mochaImg from '../assets/cafe-mocha.jpg';
import coadoImg from '../assets/cafe-coado.jpg';

// Menu de Produtos
// Lista dos cafés com imagens e descrições (utilizar um card para cada produto!)

// Imagens dos produtos
const produtos = [
    {
        img: cappuccinoImg,
        titulo: 'Cappuccino',
        descricao: 'Café expresso com leite vaporizado e espuma de leite.',
        sabor: 'Intenso, cremoso'
    },
    {
        img: macchiatoImg,
        titulo: 'Macchiato',
        descricao: 'Café expresso com uma pequena quantidade de leite vaporizado.',
        sabor: 'Forte, encorpado'
    },
    {
        img: geladoImg,
        titulo: 'Café Gelado',
        descricao: 'Café servido com gelo, perfeito para dias quentes.',
        sabor: 'Refrescante, suave'
    },
    {
        img: ristrettoImg,
        titulo: 'Café Ristretto',
        descricao: 'Refrescante e aromático, o café gelado é extraído a frio para preservar suavidade e doçura natural, servido com gelo e, se desejar, um toque de leite ou xarope.',
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
    return (
        <section id="cardapio" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-4 playfair-display-regular section-title">Nossos Produtos</h2>
                <Row>
                    {produtos.map((produto, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <div className="product-card h-100">
                                <div className="product-card-image-container">
                                    <img src={produto.img} alt={produto.titulo} className="product-card-img" />
                                </div>

                                <div className="product-card-body">
                                    <p className="text-muted lato-regular mb-1">Cafés</p>
                                    <h4 className="playfair-display-regular">{produto.titulo}</h4>
                                    <p className="lato-regular">{produto.descricao}</p>
                                    <p className="lato-regular fw-bold card-sabor">Sabor: <span className="fw-normal">{produto.sabor}</span></p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <hr className="my-5" />
            </Container>
        </section>
    );
}

export default Menu;