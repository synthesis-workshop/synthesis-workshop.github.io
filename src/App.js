import React from "react";
import {
  Nav,
  Navbar
} from "react-bootstrap";
import Home from './components/views/home';


export default function App() {
  return (
    <>
      <Navbar bg="light" expand="md" sticky="top">
        <Navbar.Brand href="/">
          <img width={50} src="img/logo.svg" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="/">Home</Nav.Link>
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="#about">About</Nav.Link>
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="#videos">Videos</Nav.Link>
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="#episode-list">Episode Directory</Nav.Link>
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Home />
    </>
  );
}