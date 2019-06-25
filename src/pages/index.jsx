import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "gatsby-image";
import anime from "../../node_modules/animejs/lib/anime.es.js";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: null,
      heroBrand: null,
      navBrand: null
    };
  }

  componentDidMount() {
    this.setState({
      hero: document.getElementById("hero"),
      navBrand: document.querySelector(".navbar-brand"),
      heroBrand: document.getElementById("hero-brand")
    });

    window.onscroll = e => {
      this.scaleBrand(e);
    };
  }

  scaleBrand = e => {
    if (window.scrollY > this.state.hero.scrollHeight - 400) {
      this.scaleDown(this.state.heroBrand);
      // anime({
      //   targets: ".navbar-brand",
      //   scale: {
      //     value: 0.25,
      //     duration: 200,
      //     easing: "easeOutQuart"
      //   }
      // });
    } else {
      this.scaleUp(this.state.heroBrand);
      // anime({
      //   targets: ".navbar-brand",
      //   scale: {
      //     value: 1,
      //     duration: 200,
      //     easing: "easeOutQuart"
      //   }
      // });
    }
  };

  scaleUp = el => {
    if (el.classList.contains("scale-down")) {
      el.classList.remove("scale-down");
      el.classList.add("scale-up");
    }
  };

  scaleDown = el => {
    if (el.classList.contains("scale-up") || !el.classList.contains("scale-down")) {
      el.classList.remove("scale-up");
      el.classList.add("scale-down");
    }
  };

  render() {
    const { works, pictures } = this.props.data;
    // const workPictures = pictures.edges.filter(({ node }) => node.frontmatter.type === "work");

    return (
      <>
        <SEO />
        <Layout>
          <section id="hero">
            <Link to="/about">
              <h1 id="hero-brand" className="text-nowrap">
                Olympia Bukkakis
              </h1>
            </Link>
          </section>
          <section id="work" className="container container-sm">
            {works.edges.map(({ node }) => {
              const workRegex = new RegExp(node.frontmatter.id, "i");
              const [picture] = pictures.edges.filter(({ node }) => node.base.match(workRegex));

              return (
                <div className="work" key={node.id}>
                  <Link to={node.fields.slug} key={node.id}>
                    {typeof picture !== "undefined" && (
                      <Image
                        fluid={picture.node.childImageSharp.fluid}
                        alt={node.frontmatter.title + " picture"}
                        style={{ width: "100%", height: "50vmin", marginBottom: "0.75rem" }}
                        imgStyle={{}}
                      />
                    )}
                    <h2>
                      {node.frontmatter.title} <small className="muted">&mdash; {node.frontmatter.date}</small>
                    </h2>
                  </Link>

                  <p>{node.frontmatter.description}</p>
                </div>
              );
            })}
          </section>
        </Layout>
      </>
    );
  }
}

export const query = graphql`
  query {
    works: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "work" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            date(formatString: "DD MMM YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
    pictures: allFile(filter: { sourceInstanceName: { eq: "images" } }, sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(maxHeight: 990) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default Index;
