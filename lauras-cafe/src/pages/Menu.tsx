import { Container, Row, Col } from 'react-bootstrap';
import '../components/components-style.css';

import cappuccinoImg from '../assets/cappuccino.jpg';
import macchiatoImg from '../assets/macchiato.jpg';
import geladoImg from '../assets/gelado.jpg';

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