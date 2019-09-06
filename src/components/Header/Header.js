import React from 'react';
import { Navbar } from "react-bootstrap";
import { Link } from 'gatsby';
import LogoBlack from '../../images/LogoBlack';

const Header = () => (
  <Navbar className="main-navbar">
    <Link to="/" className="logo">
      <LogoBlack/>
    </Link>
  </Navbar>
);

export default Header;