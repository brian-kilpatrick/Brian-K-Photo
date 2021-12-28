import React from "react";
import SliderView from '../components/SliderView';
import { Container } from "react-bootstrap"
import '../styles/index.scss';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { siteMetadata } from '../../gatsby-config';
import Loadable from 'react-loadable';
import '../styles/plyr.css';

const Plyr = Loadable({
  loader: () => import('react-plyr'),
  loading() {
    return <div></div>
  }
});


class Video extends React.Component {
  render() {
    const { data } = this.props;
    return (
        <Layout pageInfo={{ pageName: "index" }}>
          <SEO site={siteMetadata} title="Wedding Videography" />
          <div className="black-section sub-intro">
            <div className="header-text sub-header">
              Films
            </div>
          </div>
          <Container>
            <Plyr type="vimeo" videoId="645152108"/>
            <Plyr type="vimeo" videoId="648008509"/>
            <Plyr type="vimeo" videoId="657532781"/>
            <Plyr type="vimeo" videoId="586495159"/>
            <Plyr type="vimeo" videoId="374926472"/>
            <Plyr type="vimeo" videoId="370508327"/>
          </Container>
        </Layout>
    )
  }
}

export default Video;
