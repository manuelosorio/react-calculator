import "./calculator-display.sass"
import { ComponentProps } from "react";

export function CalculatorDisplay(props: ComponentProps<any>) {
  return (
    <div className="calculator-display">
      <span style={{padding: "0 1rem"}}>{props.state}</span>
    </div>
  );
}
