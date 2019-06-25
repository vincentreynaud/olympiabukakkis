import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Navigation from "./Navigation";
import Footer from "./Footer";

import "../scss/Layout.scss";
import "../scss/Navigation.scss";

function Layout({ children, theme = "theme-dark" }) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className={"layout " + theme}>
            <div className="row">
              <div className="col-nav col-xl-4">
                <Navigation title={data.site.siteMetadata.title} />
              </div>
              <div className="col-main col-xl-8">
                <main className="main">{children}</main>
              </div>
            </div>
            <div className="row">
              <Footer authors={data.site.siteMetadata.author} />
            </div>
          </div>
        );
      }}
    />
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
