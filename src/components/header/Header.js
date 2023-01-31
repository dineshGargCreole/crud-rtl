import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>View All</Nav.Link>
        <Nav.Link>New</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
