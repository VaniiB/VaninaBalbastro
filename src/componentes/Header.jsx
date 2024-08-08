import { Container, Nav, Navbar } from 'react-bootstrap';
import '../css/nav.css';

export const Header = () => {
    // Función para manejar el desplazamiento suave
    const scrollToProjects = () => {
        const projectsSection = document.querySelector('.image-container');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Navbar expand="lg" className="custom-navbar" sticky="top">
                <Container>
                    <Navbar.Brand className="navbar-brand">
                        <span className="animated-initials">VB</span> vaninabalbastro.dev
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={scrollToProjects} className="nav-link">
                                Mis Proyectos
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <a href="mailto:vaniibalbastro@gmail.com" className="btn btn-primary">
                                Contactar
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
