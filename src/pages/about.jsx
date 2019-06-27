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
            <div className="col-pic col-md-6">
              <Img fluid={aboutPicture.childImageSharp.fluid} alt="Olympia Bukkakis' portrait" className="portrait" />
              <small>Photography: {about.frontmatter.photographer}</small>
              <p className="contact">
                Contact: <br />
                <a className="text-nowrap" href="mailto:mail&#64;olympiabukkakis.com">
                  <span>mail</span>
                  <span>&#64;</span>
                  <span>olympia</span>
                  <span>bukkakkis</span>
                  <span>.com</span>
                </a>
              </p>
            </div>
            <div className="col-text col-md-6">
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
        photographer
      }
    }
    aboutPicture: file(base: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 305) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
