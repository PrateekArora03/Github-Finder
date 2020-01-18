import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = ({ match }) => {
  console.log(match);
  return (
    <Fragment>
      <h1>About this App</h1>
      <p>App to search Github users</p>
      <p>Created By: Prateek Arora</p>
      <div>
        <Link to="/user/prateekcodes">Github</Link>{" "}
        <a
          href="https://twitter.com/Prateek_Codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </Fragment>
  );
};

export default About;
