import React from 'react';
import { Navbar } from "react-bootstrap";
import { Link } from 'gatsby';
import LogoBlack from '../../images/LogoBlack';

const Header = () => (
  <Navbar className="main-navbar">
    <div className="logo-wrapper">
      <Link to="/" className="logo">
        <LogoBlack/>
      </Link>
    </div>

  </Navbar>
);

export default Header;