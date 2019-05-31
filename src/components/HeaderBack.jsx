import React from "react";
import { Link } from "gatsby";

import ArrowBack from "../images/arrow-back.svg";

function Header() {
  return (
    <div>
      <Link to="/">
        <div>
          <img src={ArrowBack} alt="Back" />
        </div>
      </Link>
    </div>
  );
}

export default Header;
