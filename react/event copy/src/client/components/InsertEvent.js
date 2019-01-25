import React, { Component } from "react";
import PropTypes from 'prop-types';
import ParkingButton from './ParkingButton';
import ParkingInput from './ParkingInput';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';


class InsertEvent extends Component {
   state = {
      Event_name: '', 
      Date: '', 
      Address: '', 
      Date_created: '', 
      Text: ''
   }

   handleChange = (evt) => {
      switch (evt.currentTarget.getAttribute("id")) {
        case 'eventName':
          this.setState({Event_name: evt.currentTarget.value});
          break;
          case 'eventDate':
          this.setState({Date: evt.currentTarget.value});
          break;
          case 'eventAddress':
          this.setState({Address: evt.currentTarget.value});
          break;
          case 'eventCreated':
          this.setState({Date_created: evt.currentTarget.value});
          break;
          case 'eventComments':
          this.setState({Text: evt.currentTarget.value});
          break;
      }
      // if (evt.currentTarget.getAttribute("id") == "eventName") {
      //    this.setState({eventName: evt.currentTarget.value});
      // } 
   };



   handleSubmit = (evt) => {
      fetch("http://localhost:3000/api/events",{
         method:"POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(this.state)
      }).then(response => response.json()).then(response => {
         if (response != {}) {
            localStorage.setItem("loginSuccessful", response.user);
            this.props.history.push("/insertEvent");
         }
      });
   };

   render() {
      return (
         <div className="loginForm">
            <Card className="loginCard">
               <CardContent>
                  <Typography variant="h5">
                     Add Event
                  </Typography>
                  <form>
                     <ParkingInput type="text" id="eventName" placeholder="Event Name" onChange={this.handleChange} label="Event Name"/>
                     <ParkingInput type="text" id="eventDate" placeholder="Event Date" onChange={this.handleChange} label="Event Date"/>
                     <ParkingInput type="text" id="eventAddress" placeholder="Event Address" onChange={this.handleChange} label="Event Address"/>
                     <ParkingInput type="text" id="eventCreated" placeholder="Event Created" onChange={this.handleChange} label="Event Created"/>
                     <ParkingInput type="text" id="eventComments" placeholder="Event Comments" onChange={this.handleChange} label="Event Comments"/>
                  </form>
               </CardContent>
               <CardActions className="align-right">
                 <ParkingButton value="Add Event" onClick={this.handleSubmit}/>
               </CardActions>
             </Card>
         </div>
      )
   }
}

export default InsertEvent;
