import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import {
  StyledNavBar
} from './App.styled';
import Home from './components/views/home';


export default function App() {
  return (
    <Router>
        <StyledNavBar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/">Home</Nav.Link>
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/about">About</Nav.Link>
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/videos">Videos</Nav.Link>
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </StyledNavBar>

        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/videos">
            <Home />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}