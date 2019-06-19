import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="layout bg">
            <div className="row">
              <div className="col-nav col-xl-4">
                <Navigation links={data.site.siteMetadata.sections} />
              </div>
              <div className="col-main col-xl-8 position-static">
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
        sections
        author
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
