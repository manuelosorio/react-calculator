import PropTypes from "prop-types";
import { ComponentProps } from "react";

export function Slider ({ min, max, step, defaultValue, handleChange } : ComponentProps<any>) {
  let label: any[] = []
  for (let i = min; max >= i; i++)
    label.push(<small key={i}>{i + 1}</small>)
  return (
    <div className="slider-wrapper">
      <div className="slider-label">
        {label}
      </div>
      <input className="slider" type="range" min={min} max={max} defaultValue={defaultValue} step={step} onChange={handleChange} />
    </div>
  );
}
Slider.proptype = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  handleChange: PropTypes.func
}
