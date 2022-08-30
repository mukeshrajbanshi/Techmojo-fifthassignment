import React from "react";
import { Link } from "react-router-dom";

function Nomatch(props) {
  return (
    <div>
      Page not found
      <p>
        <Link to="/">Home</Link>
      </p>
      <div>
        <ul>
          <li>{props.id}</li>
          <li>{props.title}</li>
          <li>{props.src}</li>
          <li>{props.price}</li>
          <li>{props.description}</li>
        </ul>
      </div>
    </div>
  );
}

export default Nomatch;
