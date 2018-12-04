import React, { Component } from "react";

const ReactInput = (props) => {
   return (
      <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
   )
}

export default ReactInput;
