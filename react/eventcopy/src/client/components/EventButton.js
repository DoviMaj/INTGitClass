import React from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const EventButton = (props) => {
   return (
      <Button id={props.id} className={props.className} style={props.style} variant="contained" color="secondary" onClick={props.onClick}>{props.value} </Button>
   )
}

export default EventButton;
