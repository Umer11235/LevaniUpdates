"use client";
import './style.css'
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Icons from './customIcons';

export default function Header() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <span>
            <Icons icon='chev-left'/>
        </span>
        Restaurant Menu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
      <Icons icon='menu'/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/" className='active'>Home</Nav.Link>
          <Nav.Link href="#link">Restaurants <span>soon</span></Nav.Link>
          <Nav.Link href="#link">How it Works</Nav.Link>
          <NavDropdown title="English" drop={"down-centered"}  id="basic-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1">Georgian</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Russian</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Greek</NavDropdown.Item>
          </NavDropdown>
          <div className="theme-btns">
            <Button variant="outline-primary">Register</Button>
            <Button variant="primary">Contact Us</Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    
    </Navbar>
  );
}
