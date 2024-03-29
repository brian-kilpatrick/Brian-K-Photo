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
                FILMS
            </Link>
            <div className="logo-wrapper">
                <Link className="menu-link" to="/" className="logo">
                    <LogoBlack/>
                </Link>
            </div>
            <Link className="menu-link" to="/#investment">
                Investment
            </Link>
            <Link className="menu-link" to="/contact">
                CONTACT
            </Link>
        </Navbar>
        <Menu>
            <Link className="menu-link" to="/photo">
                PHOTOGRAPHY
            </Link>
            <Link className="menu-link" to="/video">
                FILMS
            </Link>
            <Link className="menu-link" to="/#investment">
                Investment
            </Link>
            <Link className="menu-link" to="/contact">
                CONTACT
            </Link>
        </Menu>
    </Fragment>

);

export default Header;