import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Back from "../components/Back";
import FbLink from "../components/FbLink";

export default ({ data }) => {
  const { event, pictures } = data;
  const eventRegex = new RegExp(event.frontmatter.id, "i");
  const coverRegex = new RegExp("cover", "i");
  const eventPictures = pictures.edges.filter(
    ({ node }) => node.base.match(eventRegex) && !node.base.match(coverRegex)
  );

  return (
    <>
      <SEO title={event.frontmatter.title} />
      <Layout>
        <Back />
        <article className="event container container-sm">
          <div className="event-header row align-items-start">
            <div className="">
              <h1>{event.frontmatter.title}</h1>
              <h3 className="muted font-weight-normal">
                {event.frontmatter.date} &middot; {event.frontmatter.time} &middot; {event.frontmatter.venue}
              </h3>
            </div>
            <FbLink link={event.frontmatter.link} />
          </div>
          <div className="event-text mb-5" dangerouslySetInnerHTML={{ __html: event.html }} />
          <div className="event-gallery">
            {eventPictures.map(({ node }) => (
              <Image
                key={node.id}
                fluid={node.childImageSharp.fluid}
                alt={event.frontmatter.title + " picture"}
                style={{ width: "100%", marginBottom: "1rem", display: "inline-block" }}
                imgStyle={{ height: "auto" }}
              />
            ))}
          </div>
          {event.frontmatter.artwork && (
            <div className="event-credits">
              <small>Artwork: {event.frontmatter.artwork}</small>
            </div>
          )}
        </article>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    event: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        title
        date(formatString: "DD MMM")
        time
        venue
        description
        link
        artwork
      }
    }
    pictures: allFile(filter: { sourceInstanceName: { eq: "images" } }, sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(maxHeight: 785) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
