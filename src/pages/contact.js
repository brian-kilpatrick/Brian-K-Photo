import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import '../styles/index.scss';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import GalleryView from '../components/GalleryView';
import { siteMetadata } from '../../gatsby-config';

class Contact extends React.Component {
  render() {
    // const { data } = this.props;
    return (
        <Layout pageInfo={{ pageName: "index" }}>
          <SEO site={siteMetadata} title="Contact Us" />
          <Container>
            <Row>
              <Col>
                <h1>Get in Touch!</h1>
                <p>
                  A great thing about being a wedding photographer is getting to know awesome people & love stories!
                  The next step is to set up a free consultation where we can talk about your story, plans for the big day,
                  and how we can best serve you! Can't wait to hear from you!
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <iframe src="https://hello.dubsado.com:443/public/form/view/5c9c21342e1ec41e1697ff8a" frameBorder="0"
                        style={{width: '10px', minWidth: '100%', height: '1000px'}}></iframe>
              </Col>
            </Row>
          </Container>
        </Layout>
    )
  }
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
