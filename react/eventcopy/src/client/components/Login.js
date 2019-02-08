import React, { Component } from "react";
import EventButton from './EventButton';
import Input from './Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';


class Login extends Component {
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
         if (Object.keys(response).length > 0) {
            localStorage.setItem("loginSuccessful", response["username"]);
            localStorage.setItem("user_id", response["user_id"])
            this.props.history.push("/event");
         }
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
                     <Input type="text" placeholder="User name" onChange={this.handleChange} label="User name"/>
                     <Input type="password" placeholder="Password" onChange={this.handleChange} label="Password"/>
                  </form>
               </CardContent>
               <CardActions className="align-right">
                 <EventButton value="Login!" onClick={this.handleSubmit}/>
                 
               </CardActions>
               <a className="login-url" href="http://localhost:3000/insertUser">Register here</a>
             </Card>
         </div>
      )
   }
}

export default Login;
