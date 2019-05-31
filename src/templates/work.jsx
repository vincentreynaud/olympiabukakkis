import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HeaderBack from "../components/HeaderBack";
import SEO from "../components/SEO";

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <HeaderBack />
      <Layout>
        <div>{post.frontmatter.title}</div>
        <div>{post.frontmatter.date}</div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
