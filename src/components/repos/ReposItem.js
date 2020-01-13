import React from "react";
import PropTypes from "prop-types";

const ReposItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default ReposItem;
