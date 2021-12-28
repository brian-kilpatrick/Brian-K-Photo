import React from "react";
import SliderView from '../components/SliderView';
import { Row, Col, Container, Button } from "react-bootstrap"
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

    return (
        <Layout pageInfo={{ pageName: "index" }}>
          <SEO site={siteMetadata} title="Weddings" />
          <SliderView images={data}/>
          <div className="main-header-text">
            Vibrant. <br/>Alive. <br/>Modern. <br/>Timeless. <br/> Your love captured perfectly.
          </div>
          <div className="black-section header-text">
            <h1>Philadelphia Wedding Photographer | NJ Wedding Photographer</h1>
          </div>
          <Container>
            <div className="main-info">
              <h2 className="your-engaged">You're Engaged!</h2>
              <div className="section-divider"></div>
              <div className="main-text">
                <p>
                  Now comes the fun part!
                  I'm Brian K, a <h1>Philadelphia & New Jersey wedding photographer & cinematographer</h1>.
                  My style is bold, vibrant, authentic, & modern.
                  <br/><br/>
                  But enough about me.
                  <br/><br/>
                  This is <span className="your">your</span> day, <span className="your">your</span> love,
                  <span className="your"> your</span> story. I want to beautifully preserve it for a lifetime.
                  <br/><br/>
                  Wedding planning can be stressful. Lets make this part simple.
                  I will work with you or your team to make sure your day and memories are captured in the best way possible.
                  Take a look around and lets chat!
                  <br/><br/>
                  - Brian K
                  <br/>
                  <Link className="contact-button" to="/contact">Contact Us</Link>
                </p>

              </div>
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

          <div className="black-section">
            <Container>
              <div className="pricing main-text">
                <h2 className="investment">Live Video Streaming</h2>
                <div className="section-divider"></div>
                <p>We know, times have been rough lately. Many of you have been forced to make major decisions or alterations to
                  your plans. We are now offering live streaming services to help your loved ones connect with you during this once in a life time
                  moment. Whether you are scaling down or thinking of going completely virtual, we've got you covered!
                </p>
                <br/>
                <p><b>Standard Streaming</b> includes one stationary camera angle streamed to platforms of your choice - starts at $750</p>
                <p><b>Premium Streaming</b> includes two stationary camera angles with graphics - starts at $1,000</p>
                <p><b>All In Streaming</b> includes two stationary camera angles with one moving camera: the full broadcast experience! - starts at $1,250</p>
              </div>
            </Container>
          </div>
          <Container>
            <div className="pricing main-text">
              <h2 className="investment" id="investment">Investment</h2>
              <div className="section-divider"></div>
              <p>I know every wedding is unique, with unique needs. Please <Link to="/contact">contact me</Link> to discuss your special day.</p>
              <p>Individual (Photography or Video) wedding packages start at $3,000 - includes 2 shooters, 6 hours of coverage, and all high resolution digital images.</p>
              <p>Photography & Video packages start at $5,500.</p>
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