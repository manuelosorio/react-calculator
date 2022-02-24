import { ComponentProps } from "react"
import PropTypes from "prop-types";
import { Button } from "../button/button";
import "./button-wrapper.sass"
import { Actions } from "../../helper/actions";


export function ButtonWrapper (props: ComponentProps<any>){
  return (
    <div className="button-wrapper">
      <div className="sub-grid span-4">
        <Button handleClick={props.handleClick} type="primary" num={7}/>
        <Button handleClick={props.handleClick} type="primary" num={8}/>
        <Button handleClick={props.handleClick} type="primary" num={9}/>
        <Button handleClick={props.handleClick} type="secondary" op="DEL" action={Actions.DELETE}/>
        <Button handleClick={props.handleClick} type="primary" num={4}/>
        <Button handleClick={props.handleClick} type="primary" num={5}/>
        <Button handleClick={props.handleClick} type="primary" num={6}/>
        <Button handleClick={props.handleClick} type="primary" op="+"  action={Actions.ADD}/>
        <Button handleClick={props.handleClick} type="primary" num={1}/>
        <Button handleClick={props.handleClick} type="primary" num={2}/>
        <Button handleClick={props.handleClick} type="primary" num={3}/>
        <Button handleClick={props.handleClick} type="primary" op="-"  action={Actions.SUBTRACT}/>
        <Button handleClick={props.handleClick} type="primary" op="." />
        <Button handleClick={props.handleClick} type="primary" num={0}/>
        <Button handleClick={props.handleClick} type="primary" op="/"  action={Actions.DIVIDE}/>
        <Button handleClick={props.handleClick} type="primary" op="X"  action={Actions.MULTIPLY}/>
      </div>
      <div className="sub-grid span-4 child-span-2" >
        <Button handleClick={props.handleClick} type="secondary" op={"Reset"} action={Actions.CLEAR}/>
        <Button handleClick={props.handleClick} type="tertiary" op={"="} action={Actions.TOTAL}/>
      </div>
    </div>
  );
}
ButtonWrapper.propTypes = {
  handleClick: PropTypes.func
}
