import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSchool, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
    return (
        <Navbar
            expand="lg"
            sticky="top"
            style={{
                backgroundColor: 'rgba(0, 123, 255, 0.6)',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Container>
                {/* Logo / Brand */}
                <Navbar.Brand as={NavLink} to="/" style={{ fontWeight: 'bold', color: '#ffffff' }}>
                    <FontAwesomeIcon icon={faSchool} /> École Nolanga
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Navigation Links */}
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact style={linkStyle}>
                            <FontAwesomeIcon icon={faHome} /> Accueil
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/infrastructures" style={linkStyle}>
                            <FontAwesomeIcon icon={faSchool} /> Infrastructures
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/resultats" style={linkStyle}>
                            <FontAwesomeIcon icon={faFileAlt} /> Résultats
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" style={linkStyle}>
                            <FontAwesomeIcon icon={faEnvelope} /> Contact
                        </Nav.Link>
                    </Nav>
                    {/* Login Button */}
                    <Nav className="ms-auto">
                        <Button
                            as={NavLink}
                            to="/login"
                            variant="outline-light"
                            style={{
                                fontWeight: '500',
                                borderRadius: '20px',
                                padding: '5px 15px',
                                marginLeft: '10px',
                                textDecoration: 'none',
                            }}
                        >
                            Connexion
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const linkStyle = {
    color: '#ffffff',
    fontWeight: '500',
    margin: '0 10px',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
};

const hoverStyle = `
.nav-link:hover {
    color: #e3f2fd !important; /* Bleu clair au survol */
}
`;

const addGlobalStyles = () => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(hoverStyle, styleSheet.cssRules.length);
};

addGlobalStyles();

export default NavigationBar;
