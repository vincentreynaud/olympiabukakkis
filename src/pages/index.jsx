import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
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
    if (window.scrollY > this.state.hero.scrollHeight - 40) {
      this.scaleDown();
      // anime({
      //   targets: ".navbar-brand",
      //   scale: {
      //     value: 0.25,
      //     duration: 200,
      //     easing: "easeOutQuart"
      //   }
      // });
    } else {
      this.scaleUp();
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

  scaleUp = () => {
    if (this.state.heroBrand.classList.contains("scale-down")) {
      this.state.heroBrand.classList.remove("scale-down");
      this.state.heroBrand.classList.add("scale-up");
    }
  };

  scaleDown = () => {
    if (this.state.heroBrand.classList.contains("scale-up")) {
      this.state.heroBrand.classList.remove("scale-up");
      this.state.heroBrand.classList.add("scale-down");
    }
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <SEO />
        <Layout>
          <section id="hero">
            <Link to="/about">
              <h1 id="hero-brand" className="scale-up">
                Olympia Bukkakis
              </h1>
            </Link>
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
        </Layout>
      </>
    );
  }
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
        }
      }
    }
  }
`;

export default Index;
