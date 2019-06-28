import React from "react";

function EventLink({ link }) {
  return (
    <a className="event-link" href={link} rel="noopener noreferrer">
      More info...
    </a>
  );
}

export default EventLink;
