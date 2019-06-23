import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Back from "../components/Back";
import SEO from "../components/SEO";

function Events({ data }) {
  const { events } = data;

  return (
    <>
      <SEO title="Events" />
      <Layout>
        <Back />
        <section id="events">
          {events.edges.map(({ node }) => (
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

export default Events;
