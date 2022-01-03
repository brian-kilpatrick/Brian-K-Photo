import React from "react";
import { Container } from "react-bootstrap"
import '../styles/index.scss';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import GalleryView from '../components/GalleryView';
import { siteMetadata } from '../../gatsby-config';

class Photo extends React.Component {
  render() {
    const { data } = this.props;
    return (
        <Layout pageInfo={{ pageName: "index" }}>
          <SEO site={siteMetadata} title="Wedding Photography" />
          <div className="black-section sub-intro">
            <div className="header-text sub-header">
              Photography
            </div>
          </div>
            <GalleryView images={data.gallery.images}/>
        </Layout>
    )
  }
}

export default Photo;

export const query = graphql`
  query AllImages {
    gallery: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/gallery/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
      ) {
      images: edges {
        img: node {
          responsive: childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            resize(height: 800, quality: 100) {
              src
            }
            fixed(width: 1920, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
