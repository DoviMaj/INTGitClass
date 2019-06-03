import React, { Component } from "react";
import ParkingInput from './ParkingInput';
import ParkingButton from './ParkingButton';

class Login extends Component {
   state = {
      username:'',
      password:''
   }

   handleSubmit = (evt) => {
      // 1. make an api call to localhost:3000 and verify that the username and password exists

      // fetch("/login", {
      //    method: "POST",
      //    body: JSON.stringify ;
      // });

   }

   handleChange = (evt) => {
      if (evt.currentTarget.getAttribute("type") == "text") {
         this.setState({username: evt.currentTarget.value});
      } else {
         this.setState({password: evt.currentTarget.value});
      }
   }

   render() {
      return (
         <div className="divLogin">
            <ParkingInput type="text" placeholder="Email" onChange={this.handleChange}/>
            <ParkingInput type="password" placeholder="Password" onChange={this.handleChange}/>
            <ParkingButton value="Submit" onClick={this.handleSubmit}/>
         </div>
      )
   }
}

export default Login;
