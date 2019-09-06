import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FaFacebookF, FaInstagram, FaChevronUp } from 'react-icons/fa'
import Logo from '../../images/BK Logo - White.svg'
import '../../styles/footer.scss'

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
          <img src={Logo} className="footer-logo" />
          <div className="space25" />
          <p className="contact-heading">Get In Touch</p>
          <a className="contact-link" href="tel:267-223-7837">(267) 223-7837</a>
          <br/>
          <a className="contact-link" href="mailto:brian@23Twenty.com">brian@briankphoto.com</a>
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
        </div>
      </div>
    </footer>
)

export default Footer
