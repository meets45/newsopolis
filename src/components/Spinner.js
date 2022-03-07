import React from "react";
import loading from "./loading.gif";
import loadingDark from "./loadingDark.gif";
const Spinner = (props) => {
  return (
    <div className="text-center">
      <img
        className="my-3"
        src={props.mode === "light" ? loading : loadingDark}
        alt="loading"
      />
    </div>
  );
};

export default Spinner;
