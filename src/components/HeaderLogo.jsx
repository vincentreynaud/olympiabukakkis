import React from "react";
import { Link } from "gatsby";

function Header() {
  return (
    <div>
      <div>Your Name</div>
      <Link to="/about">
        <p>About</p>
      </Link>
    </div>
  );
}

export default Header;
