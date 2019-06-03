import React from "react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const ParkingInput = (props) => {
   return (
      <TextField margin="normal" fullWidth type={props.type} placeholder={props.placeholder} label={props.label} onChange={props.onChange}/>
   )
}

export default ParkingInput;
