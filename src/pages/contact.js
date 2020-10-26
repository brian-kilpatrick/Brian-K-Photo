import React, {useState, useEffect} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import '../styles/index.scss';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import GalleryView from '../components/GalleryView';
import { siteMetadata } from '../../gatsby-config';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
  useEffect(() => {
      if (typeof window !== `undefined`) {
          (function(h,b,s,n,i,p,e,t) {
              h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
              t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
              e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
          })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","5f9043aa43a3ba000d7acda2");
      }

  }, [])


  return (
      <Layout pageInfo={{ pageName: "index" }}>
        <SEO site={siteMetadata} title="Contact Us" />
        <Container className="contact-wrapper">
          <div className="hb-p-5f9043aa43a3ba000d7acda2-1"></div>
          <img height="1" width="1" style={{"display": "none"}}
               src="https://www.honeybook.com/p.png?pid=5f9043aa43a3ba000d7acda2"/>
        </Container>
      </Layout>
  )
}

export default Contact;

// export const query = graphql`
//   query AllImages {
//     gallery: allFile(
//       filter: {
//         extension: { regex: "/(jpeg|jpg|gif|png)/" }
//         dir: { regex: "/gallery/" }
//         sourceInstanceName: { eq: "images" }
//       },
//       sort: { fields: [name], order: ASC}
//       ) {
//       images: edges {
//         img: node {
//           responsive: childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//             resize(height: 800, quality: 100) {
//               src
//             }
//             fixed(width: 1920, quality: 100) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     }
//   }
// `;
