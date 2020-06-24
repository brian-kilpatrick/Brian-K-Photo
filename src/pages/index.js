import React from "react";
import SliderView from '../components/SliderView';
import { Row, Col, Container } from "react-bootstrap"
import '../styles/index.scss';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { siteMetadata } from '../../gatsby-config';
import { Link } from 'gatsby';
import Img from 'gatsby-image';


class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const photoImg = data.photo.img.fluid;
    const videoImg = data.video.img.fluid;
    const myImg = data.me.img.fluid;

    return (
        <Layout pageInfo={{ pageName: "index" }}>
          <SEO site={siteMetadata} title="Weddings" />
          <SliderView images={data}/>
          <div className="gray-section intro">
            <Container>
              <div className="main-header-text">
                Vibrant. <br/>Alive. <br/>Modern. <br/>Timeless. <br/> Your love captured perfectly.
              </div>
            </Container>
          </div>
          <Container>
            <div className="main-info">
              <div className="section-divider"></div>
              <h2> Your once in a lifetime moment should be captured in that very same way.</h2>
              <p className="main-text">
                I'm Brian K, a <h1>Philadelphia & New Jersey wedding photographer & cinematographer</h1>.
                My style is bold, vibrant, authentic, & modern. My passion is to give you a unique visual legacy
                of love, joy & emotion that will last lifetimes. Your <b><i>story</i></b> deserves to be artfully
                preserved & I'd be honored to help you tell it! I know wedding planning can be stressful, so I aim to make this process as painless as possible.
                I will work with you or your team to make sure your day and memories are captured in the best way possible.
                Take a look around and lets chat!
                <br/>
                - Brian K
                <br/>
                <a href="mailto:brian@briankphoto.com" target="_blank" rel="noopener noreferrer">brian@briankphoto.com</a>
              </p>
            </div>
          </Container>

          <div className="gray-section">
            <Container>
              <Row>
                <Col md={6}>
                  <MainLink caption="Photography" image={photoImg} linkTo="/photo"/>
                </Col>
                <Col md={6}>
                  <MainLink caption="Films" image={videoImg} linkTo="/video"/>
                </Col>
              </Row>
            </Container>
          </div>

          <Container>
            <div className="pricing">
              <p><b>Pricing:</b></p>
              <p>I know every wedding is unique, with unique needs. Please contact me at <a href="mailto:brian@briankphoto.com">brian@briankphoto.com</a> to discuss your special day.</p>
              <p>Individual (Photography or Video) wedding packages start at $2,500 - includes 2 shooters, 6 hours of coverage, and all high resolution digital images.</p>
              <p>Photography & Video packages start at $4,500.</p>
              <p>Fully designed wedding albums and fine art wall prints are also available as package add ons.</p>
            </div>
          </Container>
        </Layout>
    )
  }
}

export default IndexPage;

export const query = graphql`
  query Home {
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
    
    photo: file(relativePath: {eq: "home/photo.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video: file(relativePath: {eq: "home/video.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    collage: file(relativePath: {eq: "home/collage.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    me: file(relativePath: {eq: "home/me.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;


const MainLink = ({image, linkTo, caption}) => (
    <figure className="overlay overlay4 main-link">
      <Link to={linkTo}>
        <span className="bg"></span>
        <Img fluid={image} alt=""/>
      </Link>
      <figcaption className="d-flex">
        <div className="align-self-center mx-auto">
          <span className="header-text mb-0">{caption}</span>
        </div>
      </figcaption>
    </figure>
);