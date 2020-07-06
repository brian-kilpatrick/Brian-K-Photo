import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import '../styles/index.scss';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import GalleryView from '../components/GalleryView';
import { siteMetadata } from '../../gatsby-config';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
  const [ formState, setFormState ] = useState({
    first_name: '',
    last_name: '',
    partnerName: '',
    email: '',
    phone: '',
    date: null,
    location: '',
    service_type: 'Wedding',
    notes: ''
  })

  const [ displayDate, setDisplayDate ] = useState(null)
  const [ hasSuccess, setHasSuccess ] = useState(false)

  const _handleChange = ({target: { value, name}}) => {
    const newState = {...formState};
    newState[name] = value;
    setFormState(newState);
  };

  const handleDateChange = date => {
    setDisplayDate(date)
    _handleChange({target: {name: 'date', value: date.toISOString()}})
  };

  const handleSubmit = async () => {
    const res = await fetch('https://hooks.zapier.com/hooks/catch/7956485/ozomok3', {
      method: 'POST',
      body: JSON.stringify(formState)
    });

    if (res.ok) {
      setHasSuccess(true)
    }
  }

  if (hasSuccess) {
    return  (
        <Layout pageInfo={{ pageName: "index" }}>
          <SEO site={siteMetadata} title="Contact Us" />
          <Container className="contact-wrapper">
            <Row>
              <Col>
                <h1>Thanks for reaching out!</h1>
                <p>
                  We'll be in touch soon!
                </p>
              </Col>
            </Row>
          </Container>
        </Layout>
    )
  }

  return (
      <Layout pageInfo={{ pageName: "index" }}>
        <SEO site={siteMetadata} title="Contact Us" />
        <Container className="contact-wrapper">
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
            <Col sm={12}>
              <Form>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" onChange={_handleChange} name="first_name" value={formState.first_name}/>
              </Form>
            </Col>
            <Col sm={12}>
              <Form>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" onChange={_handleChange} name="last_name" value={formState.last_name}/>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form>
                <Form.Label>Fiance's Name</Form.Label>
                <Form.Control type="text" onChange={_handleChange} name="partnerName" value={formState.partnerName}/>
              </Form>
            </Col>
            <Col sm={12}>
              <Form>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={_handleChange} name="email" value={formState.email}/>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" onChange={_handleChange} name="phone" value={formState.phone}/>
              </Form>
            </Col>
            <Col sm={12}>
              <Form>
                <Form.Label>Date</Form.Label>
                <DatePicker className="form-control" selected={displayDate} onChange={handleDateChange} />
              </Form>

            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" onChange={_handleChange} name="location" value={formState.location}/>
              </Form>
            </Col>
            <Col sm={12}>
              <Form>
                <Form.Label>Type of Service</Form.Label>
                <Form.Control as="select" onChange={_handleChange} name="service_type" value={formState.service_type}>
                  <option value="Wedding">Wedding</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Family">Family</option>
                </Form.Control>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form>
                <Form.Label>Anything else we should know?</Form.Label>
                <Form.Control as="textarea" onChange={_handleChange} name="notes" value={formState.notes}/>
              </Form>
            </Col>
          </Row>
          <Row>
            <Button onClick={handleSubmit}>Submit</Button>
          </Row>
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
