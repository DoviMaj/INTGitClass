import React, { Component } from "react";
import ParkingButton from './ParkingButton';
import ParkingInput from './ParkingInput';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';


class ParkingLogin extends Component {
   state = {
      username:'',
      password:''
   }

   handleChange = (evt) => {
      if (evt.currentTarget.getAttribute("type") == "text") {
         this.setState({username: evt.currentTarget.value});
      } else {
         this.setState({password: evt.currentTarget.value});
      }
   };

   handleSubmit = (evt) => {
      fetch("http://localhost:3000/login",{
         method:"POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(this.state)
      }).then(response => response.json()).then(response => {

      });
   };

   render() {
      return (
         <div className="loginForm">
            <Card className="loginCard">
               <CardContent>
                  <Typography variant="h5">
                     Login
                  </Typography>
                  <form>
                     <ParkingInput type="text" placeholder="Email" onChange={this.handleChange} label="Email"/>
                     <ParkingInput type="password" placeholder="Password" onChange={this.handleChange} label="Password"/>
                  </form>
               </CardContent>
               <CardActions className="align-right">
                 <ParkingButton value="Login!" onClick={this.handleSubmit}/>
               </CardActions>
             </Card>
         </div>
      )
   }
}

export default ParkingLogin;
