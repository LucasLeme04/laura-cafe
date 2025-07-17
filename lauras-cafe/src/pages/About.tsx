import React from "react";
import { Col, Row, Container } from "react-bootstrap";

// Importando as imagens da pasta assets
import fachadaGrande from "../assets/fachadaGrande.png";
import espressoClass from "../assets/espressoClassico.png.png";
import prensaFrancesa from "../assets/prensaFrancesa.png.png";
import harioV60 from "../assets/hariov60.png.png";
import aeropress from "../assets/aeropress.png.png";

// Sobre nós
// Informações sobre a empresa, história, missão, visão e valores
// Descrição curta sobre os métodos de preparo (Expresso, Prensa Francesa, Aeropress, etc.)

function About() {
  return (
    <Container id="about" fluid className="bg-light min-vh-100">
      {/* Main Content: Conteúdo principal da página */}
      <Container className="py-5">
        {/* Sobre Nós Section: Apresentação da cafeteria e sua história */}
        <Row className="align-items-center mb-5 g-4">
          {/* Imagem da fachada da cafeteria */}
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={fachadaGrande}
              className="img-fluid rounded shadow"
              alt="fachada grande"
              style={{ maxHeight: "500px" }}
            />
          </Col>
          {/* Texto de apresentação e missão da cafeteria */}
          <Col md={7} className="d-flex flex-column justify-content-center">
          <div className="preparo-title">
            <h1 className="playfair-display-bold">Sobre Nós</h1>
          </div>
            <p className="preparo-description lato-regular">
              Nossa história começou com a paixão de Laura por cafés especiais e
              pelo desejo de compartilhar experiências únicas em um ambiente
              onde cada detalhe convida à pausa e à apreciação. Inspirados pelos
              aromas e pela tradição do preparo artesanal, oferecemos uma
              seleção cuidadosa de grãos de alta qualidade, métodos diversos de
              extração e um atendimento que acolhe como um abraço.
            </p>
            <p className="preparo-description lato-regular">
              Nosso espaço foi pensado para ser uma extensão da sua casa:
              aconchegante, elegante e com aquele aroma irresistível no ar.
              Valorizamos a origem dos grãos, a sustentabilidade dos produtores
              e o ritual de cada xícara servida. Seja para saborear um espresso
              encorpado, experimentar novos métodos de preparo ou simplesmente
              relaxar com um bom livro, o Laura's Café é o seu refúgio — feito
              por quem ama café, para quem vive o café.
            </p>
          </Col>
        </Row>

        {/* Nossos Cafés: Apresentação dos métodos de preparo oferecidos */}
        <section id="preparo" className="mb-5">
        <div className="preparo-title-sm">
          <h2 className="playfair-display-bold">Nossos Métodos</h2>
        </div>
          <p className="preparo-description lato-regular">
            Acreditamos que um bom café vai muito além do sabor: ele desperta 
            <span className="lato-regular-italic"> memórias</span>, aquece <span className="lato-regular-italic"> encontros</span> e cria <span className="lato-regular-italic"> refúgios</span> em meio ao cotidiano...
          </p>
          <Row className="justify-content-center g-4">
            {/* Espresso Clássico*/}
            <Col
              xs={12}
              sm={6}
              md={3}
              className="d-flex flex-column align-items-center"
            >
              <img
                src={espressoClass}
                className="preparo-img img-fluid mb-2"
                alt="Espresso icon"
                style={{ height: "200px" }}
              />
              <h3 className="preparo-item-title playfair-display-regular">Espresso Clássico</h3>
              <p
                className="preparo-item-description text-center lato-regular"
              >
                O clássico italiano, base para muitas de nossas bebidas.
                Intenso, aromático e com uma crema perfeita.
              </p>
            </Col>
            {/* Prensa Francesa*/}
            <Col
              xs={12}
              sm={6}
              md={3}
              className="d-flex flex-column align-items-center"
            >
              <img
                src={prensaFrancesa}
                className="preparo-img img-fluid mb-2"
                alt="Prensa Francesa icon"
                style={{ height: "200px" }}
              />
              <h3 className="preparo-item-title playfair-display-regular">Prensa Francesa</h3>
              <p
                className="preparo-item-description text-center lato-regular"
              >
                Um método que resulta em um café encorpado e rico em óleos,
                preservando sabores complexos.
              </p>
            </Col>
            {/* Hario V60*/}
            <Col
              xs={12}
              sm={6}
              md={3}
              className="d-flex flex-column align-items-center"
            >
              <img
                src={harioV60}
                className="preparo-img img-fluid mb-2"
                alt="Hario V60 icon"
                style={{ height: "200px" }}
              />
              <h3 className="preparo-item-title playfair-display-regular">Hario V60</h3>
              <p
                className="preparo-item-description text-center lato-regular"
              >
                Para os amantes de um café mais limpo e suave, destacando a
                acidez e as notas florais e frutadas do grão.
              </p>
            </Col>
            {/* Aeropress*/}
            <Col
              xs={12}
              sm={6}
              md={3}
              className="d-flex flex-column align-items-center"
            >
              <img
                src={aeropress}
                className="preparo-img img-fluid mb-2"
                alt="Aeropress icon"
                style={{ height: "200px" }}
              />
              <h3 className="preparo-item-title playfair-display-regular">Aeropress</h3>
              <p
                className="preparo-item-description text-center lato-regular"
              >
                Versátil e rápido, produz um café com baixa acidez e sem
                amargor, realçando a doçura natural do café.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default About;
