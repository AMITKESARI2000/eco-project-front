import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="nav-container-NavigationBar  underline-NavigationBar">
      <Navbar collapseOnSelect expand="lg" sticky="bottom" variant="dark">
        <Navbar.Brand className="main-web-name-NavigationBar">
          <NavLink to="/home">WASTE MANAGEMENT IIT TIRUPATI</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavLink className="nav-link-NavigationBar " to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link-NavigationBar " to="/polpredict">
              Pollution Predictor
            </NavLink>
            <NavLink className="nav-link-NavigationBar " to="/aboutus">
              About Us
            </NavLink>
            <NavLink className="nav-link-NavigationBar " to="/games">
              Games
            </NavLink>
            <NavLink className="nav-link-NavigationBar " to="/blogs/">
              Blogs
            </NavLink>
            {/* <NavLink className="nav-link-NavigationBar " to="/funfacts">
              Fun Facts
            </NavLink> */}
            <NavLink className="nav-link-NavigationBar " to="/memes">
              Memes
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
