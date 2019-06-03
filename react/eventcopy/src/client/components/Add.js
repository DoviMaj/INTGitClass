import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from './Input';

class Add extends Component {
  render() {
    return (
      <div className="addCar">
          <Card className="loginCard">
               <CardContent>
                  <Typography gutterBottom>
                     Add Event
                  </Typography>
                  <form>
                    <Input type="text" placeholder="ID" label="ID"/>
                    <Input type="text" placeholder="Color" label="Color"/>
                    
                  </form>
               </CardContent>
               
             </Card>
     </div>
    )
 }
}

export default Add;
