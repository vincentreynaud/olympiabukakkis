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
      <SEO />
      <Layout theme="theme-light">
        <Back />
        <section id="about" className="container container-sm">
          <div className="row">
            <div className="col-pic col-6">
              <Img
                fluid={aboutPicture.childImageSharp.fluid}
                alt="Olympia Bukkakis' portrait"
                className=""
                style={{ marginRight: "2rem", maxWidth: "300px" }}
              />
            </div>
            <div className="col-text col-6">
              <h3>
                Contact:{" "}
                <a href="mailto:mail&#64;olympiabukkakis.com">
                  <span>mail</span>
                  <span>&#64;</span>
                  <span>olympia</span>
                  <span>bukkakkis</span>
                  <span>.com</span>
                </a>
              </h3>
              <div className="" dangerouslySetInnerHTML={{ __html: about.html }} />
            </div>
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
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
