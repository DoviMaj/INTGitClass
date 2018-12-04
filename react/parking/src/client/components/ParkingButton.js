import React, { Component } from "react";

const ParkingButton = (props) => {
   return (
     <button onClick={props.onClick}>{props.value}</button>
   )
}

export default ParkingButton;
