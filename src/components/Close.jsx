import React from "react";
import { Link } from "gatsby";

function Close() {
  return (
    <Link to="/">
      <span className="close-btn">&times;</span>
    </Link>
  );
}

export default Close;
