import { Container, Row, Col, Button } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import './components-style.css';

// Rodapé
// Informações de direitos autorais e ano atual
// Adicioanr também o endereço, horário de funcionamento e redes sociais
function Footer() {

    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

     return (
      <footer>
        <Container>
          {/* Horário de Funcionamento */}
          <section>
            <Row className="footer-container">
              <Col lg={4} md={6} className="footer-item">
                <h4>Horário de Funcionamento</h4>
                <p>
                  7h00 - 18h00 de segunda à sábado
                  <br />
                  7:00 - 14h00 nos domingos e feriados
                </p>
              </Col>
             {/* Endereço */}
             <Col lg={4} md={6} className="footer-item">
               <h4>Endereço</h4>
               <p>
                 Rua Exemplo, 123 - Centro
                 <br />
                 Cidade - Estado
                 <br />
                 CEP: 12345-678
               </p>
             </Col>

             {/* Redes Sociais */}
                <Col lg={2} md={6} className="footer-item">
                  <h4>Redes sociais</h4>
                  <ul>
                     {[FaInstagram, FaFacebook, FaWhatsapp].map(
                        (Icon, i) => (
                            <Button
                                key={i}
                                className="btn-icon-footer"
                                href="#!"
                            >
                                <Icon size={24} />
                        </Button>
                     )
                    )}
                  </ul>
                </Col>
              
            </Row>
          </section>
        </Container>

        {/* Copyright */}
        <div className="copyright-footer">
            Laura’s Café &copy; {getYear()} Todos os direitos reservados. | CNPJ 12.123.456/0001-00
        </div>
      </footer>

  );
}

export default Footer;