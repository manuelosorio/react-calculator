import React, { ComponentProps } from "react";
import PropTypes from "prop-types";

export function Operator (props: ComponentProps<any>) {
  return (
    <>
      <button>{props.op}</button>
    </>
  )
}
Operator.propTypes = {
  op: PropTypes.string.isRequired
}
