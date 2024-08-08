import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../css/nav.css';

export const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="custom-navbar" sticky="top">
                <Container>
                    <Navbar.Brand className="navbar-brand" href="/">
                        <span className="animated-initials">VB</span> vaninabalbastro.dev
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/proyectos" className="nav-link" exact>
                                Mis Proyectos
                            </NavLink>
                            <NavLink to="/sobremi" className="nav-link">
                                Sobre Mi
                            </NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to="/contacto" className="btn btn-primary">
                                Contactar
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
