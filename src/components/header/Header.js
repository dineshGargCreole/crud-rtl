import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <Navbar.Brand>
        <Link className="nav-brand" to="/">
          Navbar
        </Link>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link className="nav-brand" to="/">
          Home
        </Link>
        <Link className="nav-brand nav-item" to="/new">
          New
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
