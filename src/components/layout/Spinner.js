import React, { Fragment } from "react";
import Spinner from "./spinner.gif";
const Spin = () => (
  <Fragment>
    <img src={Spinner} alt="Loading..." style={SpinnerStyling} />
  </Fragment>
);
const SpinnerStyling = {
  width: "200px",
  margin: "auto",
  display: "block"
};
export default Spin;
