import PropTypes from "prop-types";
import { ComponentProps } from "react";

export function Slider ({ min, max, step, defaultValue, handleChange } : ComponentProps<any>) {
  return (
    <>
      <input className="slider" type="range" min={min} max={max} defaultValue={defaultValue} step={step} onChange={handleChange} />
    </>
  );
}
Slider.proptype = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  handleChange: PropTypes.func
}
