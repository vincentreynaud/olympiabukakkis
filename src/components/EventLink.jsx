import React from "react";

function EventLink({ link }) {
  return (
    <a className="event-link" href={link} target="_blank" rel="noopener noreferrer">
      More info...
    </a>
  );
}

export default EventLink;
