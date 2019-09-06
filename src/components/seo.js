import React from "react";
import Helmet from "react-helmet";

const SEO = ({ site, title, image }) => {
  const { title: siteTitle, description, siteUrl } = site;
  const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return (
      <Helmet
          title={formattedTitle}
          meta={[
            {
              name: "description", content: description
            },
            {
              property: "og:title", content: siteTitle
            },
            {
              property: "og:description", content: description
            },
            {
              property: "og:url", content: siteUrl
            },
            {
              property: "og:image", content: image ?  siteUrl + image : `${siteUrl}/img/site.jpg`
            },
            {
              property: "og:image:secure_url", content: image ?  siteUrl + image : `${siteUrl}/img/site.jpg`
            },
            {
              property: "og:image:alt", content: siteTitle
            },
            {
              property: "og:type", content: "website"
            },
            {
              property: "og:locale", content: "en_US"
            },
            {
              property: "og:site_name", content: siteTitle
            },
            {
              name: 'twitter:title', content: siteTitle
            },
            {
              name: 'twitter:description', content: description
            },
            {
              name: "twitter:card", content: "summary"
            }
          ]}
      />
  );
};
export default SEO;
