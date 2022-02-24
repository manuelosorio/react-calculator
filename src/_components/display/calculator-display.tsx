import "./calculator-display.sass"
import { ComponentProps } from "react";
import PropTypes from "prop-types";
import { Theme } from "../../helper/theme"

export function CalculatorDisplay(props: ComponentProps<any>) {
  return (
    <div className="calculator-display">
      <span style={{padding: "0 1rem"}}>{props.state.num || props.state.res }</span>
    </div>
  );
}
CalculatorDisplay.propType = {
  state: {
    num: PropTypes.number,
    res: PropTypes.any
  }
}
