import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function Index({ data }) {
  return (
    <>
      <SEO />
      <Layout>
        <section id="hero">
          <h1>Olympia Bukakkis</h1>
        </section>
        <section id="work">
          {data.work.edges.map(({ node }) => (
            <Link to={node.fields.slug} key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <p>
                <small>{node.frontmatter.date}</small>
              </p>
              <div>{node.frontmatter.description}</div>
            </Link>
          ))}
        </section>
        <section id="events">
          {data.events.edges.map(({ node }) => (
            <Link to={node.fields.slug} key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <p>
                <small>{node.frontmatter.date}</small>
              </p>
            </Link>
          ))}
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    work: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "work" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            date(formatString: "DD MMMM YYYY")
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    events: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "event" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            date(formatString: "DD MMMM YYYY")
            venue
            description
            link
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Index;
