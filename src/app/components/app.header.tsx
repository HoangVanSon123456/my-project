"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function AppHeader() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/facebook" className="nav-link">
                Facebook
              </Nav.Link>
              <Nav.Link href="/youtube" className="nav-link">
                Youtube
              </Nav.Link>
              <Nav.Link href="/tiktok" className="nav-link">
                Tiktok
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        x
      </Navbar>
    </>
  );
}
