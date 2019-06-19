import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function Blog({ data }) {
  return (
    <>
      <SEO />
      <Layout>
        <div>
          <div>Lewis Gatsby Starter Blog</div>
          <div>This is a custom Gatsby starter template to start a new blog or personal website.</div>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <div key={node.id}>
              <div>{node.frontmatter.title}</div>
              <div>{node.excerpt}</div>
              <div>{node.frontmatter.date}</div>
            </div>
          </Link>
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
