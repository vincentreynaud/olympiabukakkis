import React from "react";

import arrowBack from "../images/arrow-back.svg";

function Back() {
  return (
    <button onClick={() => window.history.back()}>
      {/* <span className="back-btn">&times;</span> */}
      <img src={arrowBack} alt="back" className="back" />
    </button>
  );
}

export default Back;
