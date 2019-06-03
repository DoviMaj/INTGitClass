import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ParkingInput from './ParkingInput';

class ParkingAddCar extends Component {
  render() {
    return (
      <div className="addCar">
          <Card className="loginCard">
               <CardContent>
                  <Typography gutterBottom>
                     Add Event
                  </Typography>
                  <form>
                    <ParkingInput type="text" placeholder="ID" label="ID"/>
                    <ParkingInput type="text" placeholder="Color" label="Color"/>
                    
                  </form>
               </CardContent>
               <CardActions className="align-right">
                 
               </CardActions>
             </Card>
     </div>
    )
 }
}

export default ParkingAddCar;
