import React from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Button = (props) => {
   return (
      <Button id={props.id} className={props.className} variant="contained" color="secondary" onClick={props.onClick}>{props.value}</Button>
   )
}

export default Button;
