import React from "react";
import Button from "./Button";
import Calculatortitle from "./Calculatortitle";
import Display from "./Display";

const Calculator = () => {

  return (
    <div className="Model">
      <h1>Calculator</h1>
      <Calculatortitle />
      <div class="Screen">
        <Display />

        <div className="Button-row">
          <Button label={"7"} />
          <Button label={"8"} />
          <Button label={"9"} />
          <Button label={"*"} />
        </div>

        <div className="Button-row">
          <Button label={"4"} />
          <Button label={"5"} />
          <Button label={"6"} />
          <Button label={"-"} />
        </div>

        <div className="Button-row">
          <Button label={"1"} />
          <Button label={"2"} />
          <Button label={"3"} />
          <Button label={"+"} />
        </div>

        <div className="Button-row">
          <Button label={"0"} />
          <Button label={"="} />
          <Button label={"%"} />
          <Button label={"/"} />
        </div>

        <div className="Button-row">
          <Button label={"."} />
          <Button label={"^"} />
          <Button label={"CE"} />
          <Button label={"DEL"} />
        </div>

      </div>
    </div>
  );
};

export default Calculator;
