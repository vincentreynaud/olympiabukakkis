import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Back from "../components/Back";
import Image from "gatsby-image";
import SEO from "../components/SEO";

export default ({ data }) => {
  const { work, pictures } = data;
  const workRegex = new RegExp(work.frontmatter.id, "i");
  console.log(workRegex);
  const workPictures = pictures.edges.filter(({ node }) => node.base.match(workRegex));

  return (
    <>
      <SEO title={work.frontmatter.title} />
      <Layout>
        <Back />
        <article className="work">
          <h1>{work.frontmatter.title}</h1>
          <h2>{work.frontmatter.date}</h2>
          <div dangerouslySetInnerHTML={{ __html: work.html }} />

          <div className="work-gallery">
            {workPictures.map(({ node }) => (
              <Image
                key={node.id}
                fixed={node.childImageSharp.fixed}
                alt={`${work.frontmatter.title} picture`}
                style={{}}
                imgStyle={{}}
              />
            ))}
          </div>
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
        date(formatString: "Do MMMM YYYY")
      }
    }
    pictures: allFile(filter: { sourceInstanceName: { eq: "images" } }, sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          base
          childImageSharp {
            fixed(height: 670) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
  }
`;
