import React, { Component } from "react";

const ParkingInput = (props) => {
   return (
      <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
   )
}

export default ParkingInput;
