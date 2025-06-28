import { Container, Row, Col } from "react-bootstrap";

// Rodapé
// Informações de direitos autorais e ano atual
// Adicioanr também o endereço, horário de funcionamento e redes sociais
function Footer() {

    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <p>© {getYear()} Laura's Café. Todos os direitos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;