import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Back from "../components/Back";

function About({ data }) {
  const { about, aboutPicture } = data;
  return (
    <>
      <SEO title="About" />
      <Layout theme="theme-light">
        <Back />
        <section id="about" className="container container-sm">
          <h2>{about.frontmatter.name}</h2>
          <div>
            <Img fluid={aboutPicture.childImageSharp.fluid} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: about.html }} />

          <div>
            <a href="mailto:mail&#64;olympiabukkakis.com">
              <span>mail</span>
              <span>&#64;</span>
              <span>olympia</span>
              <span>bukkakkis</span>
              <span>.com</span>
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default About;

export const query = graphql`
  query {
    about: markdownRemark(frontmatter: { type: { eq: "about" } }) {
      id
      html
      frontmatter {
        name
      }
    }
    aboutPicture: file(base: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
