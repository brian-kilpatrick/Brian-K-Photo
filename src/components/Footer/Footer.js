import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FaFacebookF, FaInstagram, FaChevronUp } from 'react-icons/fa'
import Logo from '../../images/Logo-white.svg';
import '../../styles/footer.scss'
import { Link } from 'gatsby';
import { Row, Col, Container } from "react-bootstrap"
import myImg from '../../images/home/me.jpg';


const Footer = () => (
    <footer className="dark-wrapper inverse-text">
      <div id="scroll-up">
        <ScrollToTop showUnder={400}>
        <span className="btn btn-square btn-full-rounded btn-icon ">
          <i className="scroll-up-icon">
            <FaChevronUp />
          </i>
        </span>
        </ScrollToTop>
      </div>

      <div className="sub-footer">
        <div className="container inner text-center">
          <Row>
            <Col md={4}>
              <Link to="/">
                <img src={Logo} className="footer-logo" />
              </Link>
              <div className="space25" />
              <p className="contact-heading">Get In Touch</p>
              <a className="contact-link" href="tel:267-223-7869">(267) 588-7869</a>
              <br/>
              <a className="contact-link" href="mailto:brian@briankphoto.com">brian@briankphoto.com</a>
              <ul className="social social-bg social-s">
                <li>
                  <a href="https://www.facebook.com/briankphotofilm/" target="_blank">
                    <i className="fa fa-facebook-f">
                      <FaFacebookF />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/briankphotofilm/" target="_blank">
                    <i className="fa fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={1} className="divider d-none d-sm-block "> | </Col>
            <Col md={6} className="about-me">
              <img src={myImg} className="my-image" />
              <div>
                <h4>About Me:</h4>
                <p>I'm a husband, father, software developer, musician, & die-hard Philadelphia Eagles fan.</p>
                <p>I'm pretty laid back & love hanging out with happy people!</p>
              </div>

            </Col>
          </Row>
        </div>
      </div>
    </footer>
)

export default Footer
