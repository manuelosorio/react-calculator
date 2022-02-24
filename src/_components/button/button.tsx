import { ComponentProps } from "react";
import PropTypes from "prop-types";
import './button.sass'
import { Actions } from "../../helper/actions";


export function Button ({num, op, action, handleClick, type}: ComponentProps<any>) {
  return (
    <>
      <button className={type ? `button--${type}` : "button"} onClick={() => {
        handleClick(num || op || 0, action)
      }}>{num ||op || 0}</button>
    </>
  );
}
Button.propTypes = {
  num: PropTypes.number,
  op: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.number || Actions,
  handleClick: PropTypes.func
}
