import React from "react";
import Displayone from "./Displayone";

const Display = (props) => {
  return (
    <div className="display">
      <Displayone value={props.data}/>
    </div>
  );
};

export default Display;
