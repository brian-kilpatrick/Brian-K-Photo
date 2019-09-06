import React from "react";
import SliderView from '../components/SliderView';
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import '../styles/index.scss';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import GalleryView from '../components/GalleryView';

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
        <Layout pageInfo={{ pageName: "index" }}>
          <SEO title="Home" keywords={['Philadelphia Wedding Photography', 'Philadelphia Wedding Videography']} />
          <SliderView images={data}/>
          <div className="gray-section intro">
            <Container>
              <div className="header-text">
                Vibrant. <br/>Alive. <br/>Modern. <br/>Timeless. <br/> Your love captured perfectly.
              </div>
            </Container>
          </div>
          <Container>
            <div className="main-info">
              <p>
                Your once in a lifetime moment should be captured in that very same way. I'm Brian K, a <h1>Philadelphia wedding photographer & cinematographer</h1>.
                My style is bold, vibrant, authentic, & modern. My mission is to provide you with a unique visual legacy
                of love, joy & emotion that will last lifetimes. Your <b><i>story</i></b> deserves to be artfully
                preserved & I'd be honored to help you tell it! I also know wedding planning can be stressful, so I aim to make this process as painless as possible.
                I will work with you or your team to make sure your day and memories are captured in the best way possible.
              </p>
            </div>
            <GalleryView images={data.gallery.images}/>
            <div className="pricing">
              <p><b>Pricing:</b></p>
              <p>I know every wedding is unique, with unique needs. Please contact me at <a href="mailto:brian@23twenty.com">brian@briankphoto.com</a> to discuss your special day.</p>
              <p>Individual (Photography or Video) wedding packages start at $2,000 - includes 2 shooters, 6 hours of coverage, and all high resolution digital images.</p>
              <p>Photography & Video packages start at $3,000.</p>
              <p>Fully designed wedding albums and fine art wall prints are also available as package add ons.</p>

            </div>
          </Container>
        </Layout>
    )
  }
}

export default IndexPage;

export const query = graphql`
  query AllImages {
    sliderImg: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/home/slider/mobile/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
      ) {
      images: edges {
        img: node {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    
    sliderImgWide: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/home/slider/desktop/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
      ) {
      images: edges {
        img: node {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    
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
