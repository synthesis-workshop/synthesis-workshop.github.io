import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import Home from "./components/views/home";

const history = createBrowserHistory();

// Log the current page we're on since history.listen only listens for changes
ReactGA.set({ page: history.location.pathname, anonymizeIp: true });
ReactGA.pageview(history.location.pathname);

ReactGA.initialize("UA-177211479-1");

// https://stackoverflow.com/a/34837445/11646872
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});


export default function App() {
  return (
    <>
      <Navbar bg="light" expand="md" sticky="top">
        <Navbar.Brand href="/">
          <img width={50} src="img/logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="#videos">
              Videos
            </Nav.Link>
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="#episode-list">
              Episode Directory
            </Nav.Link>
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="#downloads">
              Downloads
            </Nav.Link>
            <Nav.Link className="ml-2 mr-2 text-nowrap" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Home />
    </>
  );
}
