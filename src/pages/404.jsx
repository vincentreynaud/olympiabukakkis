import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function NotFound() {
  return (
    <>
      <SEO title="Not found" />
      <Layout>
        <div className="container container-sm">
          <h2>NOT FOUND</h2>
          <div>This page doesn&#39;t exist </div>
          <Link to="/">
            <div>Go home</div>
          </Link>
        </div>
      </Layout>
    </>
  );
}

export default NotFound;
