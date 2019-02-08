import React, { Component } from "react";
import PropTypes from 'prop-types';
import EventButton from './EventButton';
import EventInput from './EventInput';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';


class insertUser extends Component {
   state = {
        user_name: '',
        first_name: '',
        last_name: '',
        password: ''
   }

   handleChange = (evt) => {
      console.log('12222', evt.currentTarget.getAttribute("id"))
      switch (evt.currentTarget.getAttribute("id")) {
        case 'user_name':
          this.setState({user_name: evt.currentTarget.value});
          break;
          case 'first_name':
          this.setState({first_name: evt.currentTarget.value});
          break;
          case 'last_name':
          this.setState({last_name: evt.currentTarget.value});
          break;
          case 'password':
          this.setState({password: evt.currentTarget.value});
          break;
      }
     
   };



   handleSubmit = (evt) => {
      fetch("http://localhost:3000/api/insertUser",{
         method:"POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(this.state)
      }).then(response => response.json()).then(response => {
         if (response != {}) {
            localStorage.setItem("loginSuccessful", response.user);
            this.props.history.push("/");
         }
      });
   };

   render() {
      return (
         <div className="loginForm">
            <Card className="loginCard">
               <CardContent>
                  <Typography variant="h5">
                     Registraition
                  </Typography>
                  <form>
                     <EventInput type="text" id="user_name" placeholder="User name" onChange={this.handleChange} label="User Name"/>
                     <EventInput type="text" id="first_name" placeholder="First name" onChange={this.handleChange} label="First name"/>
                     <EventInput type="text" id="last_name" placeholder="Last name" onChange={this.handleChange} label="Last name"/>
                     <EventInput type="password" id="password" placeholder="password" onChange={this.handleChange} label="password"/>
                  </form>
               </CardContent>
               <CardActions className="align-right">
                 <EventButton value="Register" onClick={this.handleSubmit}/>
               </CardActions>
             </Card>
         </div>
      )
   }
}

export default insertUser;
