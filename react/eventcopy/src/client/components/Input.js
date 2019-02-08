import React from "react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const Input = (props) => {
   return (
      <TextField margin="normal" id={props.id} fullWidth type={props.type} placeholder={props.placeholder} label={props.label} onChange={props.onChange}/>
   )
}

export default Input;
