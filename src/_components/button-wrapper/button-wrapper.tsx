import React, { ComponentProps } from "react"
import { Button } from "../button/button";
import { Operator } from "../operator/operator";
import "./button-wrapper.sass"


export function ButtonWrapper (_props: ComponentProps<any>){
  return (
    <div className="button-wrapper">
      <div className="sub-grid span-3">
        <Button num={7}/>
        <Button num={8}/>
        <Button num={9}/>

        <Button num={4}/>
        <Button num={5}/>
        <Button num={6}/>

        <Button num={1}/>
        <Button num={2}/>
        <Button num={3}/>
      </div>
      <div className="sub-grid span-1">
        <Operator op="DEL"/>
        <Operator op="+"/>
        <Operator op="-"/>
      </div>
      <div className="sub-grid span-4">
        <Operator op="."/>
        <Button  num={0}/>
        <Operator op="/"/>
        <Operator op="X"/>
      </div>
      <div className="sub-grid span-4 child-span-2" >
        <Operator op={"Reset"}/>
        <Operator op={"="}/>
      </div>
    </div>
  );
}
ButtonWrapper.style= {
  background: "palegoldenrod"
}
