import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../../img/logo-hero.svg';
import { Navbar, Nav } from 'react-bootstrap';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const NavbarMain = () => {
  const [navbarClass, setNavbarClass] = useState('');
  // const [activeLink, setActive] = useState("");

  // eslint-disable-next-line no-unused-vars
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -100) {
      setNavbarClass('animate__slideInDown bg-primary');
    } else {
      setNavbarClass('animate__fadeBg bg-transparent');
    }
  }, []);

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className={`animate__animated ${navbarClass}`}
    >
      <Navbar.Brand href="/">
        <img src={logo} alt="North Hills Dental" style={{ width: '3.5rem' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav--white">
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/contact/examples">
            Form Examples
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarMain;
