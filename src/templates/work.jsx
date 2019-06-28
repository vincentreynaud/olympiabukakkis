import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Back from "../components/Back";
import Image from "gatsby-image";
import SEO from "../components/SEO";

export default ({ data }) => {
  const { work, pictures } = data;
  const workRegex = new RegExp(work.frontmatter.id, "i");
  const workPictures = pictures.edges.filter(({ node }) => node.base.match(workRegex));

  return (
    <>
      <SEO title={work.frontmatter.title} />
      <Layout>
        <Back />
        <article className="work container container-sm">
          <div className="work-header">
            <h1>{work.frontmatter.title}</h1>
            <h3 className="muted font-weight-normal">
              {work.frontmatter.startDate}
              {work.frontmatter.endDate !== "" && <span> &ndash; {work.frontmatter.endDate}</span>}
            </h3>
          </div>
          <div className="work-text" dangerouslySetInnerHTML={{ __html: work.html }} />

          <div className="work-gallery">
            {work.frontmatter.video !== "" && (
              <div className="work-video">
                <iframe
                  src={work.frontmatter.video}
                  title={work.frontmatter.title + " trailer"}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            )}
            {workPictures.map(({ node }) => (
              <Image
                key={node.id}
                fluid={node.childImageSharp.fluid}
                title={work.frontmatter.title + " photograph"}
                alt={work.frontmatter.title + " photograph"}
                style={{ width: "100%", marginBottom: "0.75rem", display: "inline-block" }}
                imgStyle={{ height: "auto" }}
              />
            ))}
          </div>
          {work.frontmatter.photographer && (
            <div className="work-credits">
              <small>Photography: {work.frontmatter.photographer}</small>
            </div>
          )}
        </article>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    work: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        title
        startDate(formatString: "MMMM YYYY")
        endDate
        video
        photographer
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
