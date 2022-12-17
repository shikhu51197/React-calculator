import React from "react";

const Button = (props) => {
  return (
    <div className="child-button">
      <input type="button" value={props.label} />
    </div>
  );
};

export default Button;
