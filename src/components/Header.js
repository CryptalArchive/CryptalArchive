import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {  NavLink } from 'react-router-dom';
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
                <NavLink to="/">
                    <img className="logobtn" src="/imgs/logo.png" alt=""></img>
                </NavLink>
                <LinkContainer activeClassName={classes.active} className="navbtn" exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                <LinkContainer activeClassName={classes.active} className="navbtn" to="/pages"><Nav.Link>Archive</Nav.Link></LinkContainer>
                <LinkContainer activeClassName={classes.active} className="navbtn" to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                <LinkContainer activeClassName={classes.active} className="navbtn" to="/characters"><Nav.Link>Chars</Nav.Link></LinkContainer>
                <LinkContainer activeClassName={classes.active} className="navbtn" to="/gallery"><Nav.Link>Gallery</Nav.Link></LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
    </div>
    );
}
export default Header;