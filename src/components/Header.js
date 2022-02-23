import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";
import classes from './buttons.css';
import { LinkContainer } from 'react-router-bootstrap';
function Header() {
    return (
    
    <div>
        <Navbar className="linkbox" expand="lg" fixed="top" bg="black" variant="dark">
        <Container>
        <Navbar.Brand href="#">Cryptal Archive</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mb-2 mb-lg-0 mx-auto">
                <LinkContainer exact to="/">
                    <Nav.Link>
                        <img className="logobtn" src="/imgs/logo.png" alt=""></img>
                    </Nav.Link>
                </LinkContainer>
                
                <LinkContainer activeClassName={classes.active} className="navbtn" exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                <LinkContainer activeClassName={classes.active} className="navbtn" to="/pages"><Nav.Link>Archive</Nav.Link></LinkContainer>
                <LinkContainer activeClassName={classes.active} className="navbtn" to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                <LinkContainer activeClassName={classes.active} className="navbtn" to="/characters"><Nav.Link>Chars</Nav.Link></LinkContainer>
                <LinkContainer activeClassName={classes.active} className="navbtn" to="/gallery"><Nav.Link>Gallery</Nav.Link></LinkContainer>
                <a className="navbtn" href="https://cryptalarchive.miraheze.org/wiki/Chapters" target="_blank" rel="noopener noreferrer">wiki</a>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
    </div>
    );
}
export default Header;