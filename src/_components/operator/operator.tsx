import React, { ComponentProps } from "react";
import PropTypes from "prop-types";

export function Operator (props: ComponentProps<any>) {
  return (
    <>
      <button onClick={
        props.handleClick(props)
      }>{props.op}</button>
    </>
  )
}
Operator.propTypes = {
  op: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}
