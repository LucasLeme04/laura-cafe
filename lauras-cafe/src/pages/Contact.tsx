import { Col, Row, Form, Container, Button } from 'react-bootstrap';
// Importando ícones para os contatos
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { useState } from 'react';

// Contatos + Agendamentos
// Formulário de contato para dúvidas, sugestões e agendamentos e informações de contato da empresa
function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id.replace('form', '').toLowerCase()]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nome, email, mensagem } = formData;

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");

    setFormData({ nome: '', email: '', mensagem: '' });
  };
  
    return (
        <> 
        <section id="contact"> 
            <Container fluid className="bg-light p-5 d-flex justify-content-center">
                <Row>
                    <Col md={8} className= "pe-5">
                        <h2 className="mb-3 fw-bold text-left playfair-display-regular contact-title">Agende Conosco</h2>
                        <p className="mb-4 text-left lato-regular">
                            Possui dúvidas, propostas ou quer um agendamento especial em nosso estabelecimento?
                            Entre em contato conosco! Iremos adorar atendê-lo.
                        </p>
                        <Form className="contact-form" onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group controlId="formNome" className='text-left form-input'>
                                        <Form.Label className="lato-regular">Nome</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Insira seu nome"
                                        onChange={handleChange}/>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formEmail" className='text-left form-input'>
                                        <Form.Label className="lato-regular">E-mail</Form.Label>
                                        <Form.Control 
                                        type="email" 
                                        placeholder="Insira seu endereço de e-mail" 
                                        onChange={handleChange}/>
                                    </Form.Group>

                                </Col>
                            </Row>

                            <Form.Group className="mb-3 text-left" controlId="formMensagem" >
                                <Form.Label className="lato-regular">Mensagem</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={4} 
                                placeholder="Digite aqui sua mensagem" 
                                onChange={handleChange}/>
                            </Form.Group>

                            <Button 
                            variant="primary" 
                            className="btn-custom btn-form mt-2 lato-regular"
                            type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>

                    <Col md={3} className="contact-info-aside mt-md-0 ps-4 border-left-custom">
                        <h4 className="fw-bold text-brown mb-3 text-left playfair-display-regular contact-title">Contatos</h4>
                        <p className='text-left lato-regular'><CiMail /> <a href="mailto:laura.detal@laurascafe.com.br" className="no-decoration">laura.detal@laurascafe.com.br</a></p>
                        <p className='text-left lato-regular' ><FaPhone /> (31) 99999 - 9999</p>
                        <p className='text-left lato-regular'><FaInstagram /> lauras_cafe.bh</p>
                        <p className='text-left lato-regular'><FaFacebook /> Laura’s Café</p>
                    </Col>
                </Row>
            </Container>
        </section> 
        </>
    );

}

export default Contact;