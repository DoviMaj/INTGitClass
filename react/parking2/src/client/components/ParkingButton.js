import React from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const ParkingButton = (props) => {
   return (
      <Button className={props.className} variant="contained" color="secondary" onClick={props.onClick}>{props.value}</Button>
   )
}

export default ParkingButton;
