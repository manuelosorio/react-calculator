import React, { ComponentProps } from "react";
import PropTypes from "prop-types";
import './button.sass'
export function Button (props: ComponentProps<any>) {
  return (
    <>
      <button onClick={() => {console.log(props.num)}} style={{ background: props.color }}>{props.num}</button>
    </>
  );
}
Button.propTypes = {
  num: PropTypes.number
}
