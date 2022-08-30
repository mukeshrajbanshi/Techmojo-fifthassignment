import React from "react";
import { Link } from "react-router-dom";
import FilterCard from "./FilterCard";

function CardDetails() {
  return (
    <div>
      CardDetails
      <Link to="/cardDetails">
        check cart
        <FilterCard />
      </Link>
    </div>
  );
}

export default CardDetails;
