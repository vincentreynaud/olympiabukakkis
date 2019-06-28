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
          <div className="row no-gutters">
            <div className="col-pic col-lg-6">
              <div className="event-artwork">
                {eventPictures.map(({ node }) => (
                  <Image
                    key={node.id}
                    fluid={node.childImageSharp.fluid}
                    alt={event.frontmatter.title + " artwork"}
                    className="artwork-wrapper"
                    imgStyle={{ height: "auto" }}
                  />
                ))}
              </div>
              {event.frontmatter.artwork && (
                <div className="event-credits">
                  <small>Artwork: {event.frontmatter.artwork}</small>
                </div>
              )}
            </div>
            <div className="col-text col-lg-6">
              <div className="event-header row align-items-start">
                <div className="">
                  <h1>{event.frontmatter.title}</h1>
                  <h3 className="muted font-weight-normal d-inline">
                    {event.frontmatter.date} {event.frontmatter.time && <span>&middot; {event.frontmatter.time} </span>}
                    &middot; {event.frontmatter.venue}
                  </h3>
                  <span className="text-right">
                    <FbLink link={event.frontmatter.link} />
                  </span>
                </div>
              </div>
              <div className="event-text" dangerouslySetInnerHTML={{ __html: event.html }} />
            </div>
          </div>
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
