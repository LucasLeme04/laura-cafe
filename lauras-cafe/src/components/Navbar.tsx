import { Button, Container, Nav, Navbar } from 'react-bootstrap';


// Barra de navegação
// Link para as partes da landing page, com a logo à esquerda e as outras opções à direita
// Link do contato como botão
function NavbarComponent() {
    return (
        <>
        <Navbar className="nav-custom" expand="lg" variant="light" fixed="top">
        <Container>
            {/* Logo à esquerda */}
          <Navbar.Brand className="fs-4 fw-bold">
            <img
              src="./src/assets/logo.png"
              width={160}
              height={90}
              className="d-inline-block align-top me-2"
              alt="Logo Laura's Café"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {/* Links à direita */}
            <Nav className="fs-5 nav-items">
              <Nav.Link className="mx-2 nav-item lato-regular">
                Início
              </Nav.Link>
              <Nav.Link className="mx-2 nav-item lato-regular">
                Sobre Nós
              </Nav.Link>
              <Nav.Link className="mx-2 nav-item lato-regular">
              Menu
              </Nav.Link>
              <Nav.Link className="mx-2">
                <Button className="btn-custom lato-bold">Contato</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    );

}

export default NavbarComponent;