import React from "react";

function NewsStatus({ verified }) {
  const isVerifiedClasses = verified ? "verified" : "not-verified";
  return (
    <div className={`news__status ${isVerifiedClasses}`}>
      <i className="material-icons">{verified ? "check" : "query_builder"}</i>
    </div>
  );
}

export default NewsStatus;
