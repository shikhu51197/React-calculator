import React from "react";
//
const Displayone = (props) => {
  return (
    <div className="display-input">
      <input type="text" readOnly  value={props.value}/>
    </div>
  );
};

export default Displayone;
