import React, { Component } from "react";

const ReactButton = (props) => {
   return (
     <button onClick={props.onClick}>{props.value}</button>
   )
}

export default ReactButton;
