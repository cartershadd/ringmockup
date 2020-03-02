import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar expand="lg">
               <Navbar.Brand>
                   <a href="/" className="header-logo">
                       <img src="/images/cloudicon.png" alt="cloud" className="nav-icon"/>
                   </a>
               </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/something">Something</NavDropdown.Item>
                                <NavDropdown.Item href="/nothing">Nothing</NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
