import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <Layout>
        <div>
          <div>NOT FOUND</div>
          <div style={{ textAlign: "center" }}>
            This page doesn&#39;t exist{" "}
            <span role="img" aria-label="duh">
              😓
            </span>
          </div>
          <Link to="/">
            <div>Go home</div>
          </Link>
        </div>
      </Layout>
    </>
  );
}

export default NotFoundPage;
