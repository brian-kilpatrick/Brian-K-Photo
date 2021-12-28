import React, { Fragment } from 'react';
import { Navbar } from "react-bootstrap";
import { Link } from 'gatsby';
import LogoBlack from '../../images/LogoBlack';
import { slide as Menu } from 'react-burger-menu'

const Header = () => (
    <Fragment>
        <Navbar className="main-navbar" fixed="top">
            <Link className="menu-link" to="/photo">
                PHOTOGRAPHY
            </Link>
            <Link className="menu-link" to="/video">
                VIDEOGRAPHY
            </Link>
            <div className="logo-wrapper">
                <Link className="menu-link" to="/" className="logo">
                    <LogoBlack/>
                </Link>
            </div>
            <Link className="menu-link" to="/#investment">
                Investment
            </Link>
            <Link className="menu-link" to="/">
                Home
            </Link>
        </Navbar>
        <Menu>
            <Link className="menu-link" to="/">
                Home
            </Link>
            <Link className="menu-link" to="/photo">
                PHOTOGRAPHY
            </Link>
            <Link className="menu-link" to="/video">
                VIDEOGRAPHY
            </Link>
            <Link className="menu-link" to="/#investment">
                Investment
            </Link>
        </Menu>
    </Fragment>

);

export default Header;