import React, { Component } from "react";
import EventButton from './EventButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { green } from "@material-ui/core/colors";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      user_subscribed: [],
      id_event: '',
      id_user: '',
      styleEvent: {
        backgroundColor: 'green'
      }
    }
  }

  createData(Event_name, Date, Address, Date_created, Text) {
    id += 1;
    return { id, Event_name, Date, Address, Date_created, Text };
  }

 

  componentDidMount() {
    this.setState({id_user: localStorage.getItem("user_id")});
    fetch('http://localhost:3000/api/events')
      .then(res => res.json())
      .then(json => this.setState({events: json}));

    fetch('http://localhost:3000/api/getSubscription')
      .then(res => res.json())  
      .then(docs => this.setState({user_subscribed: docs}));
      
   }

  handleSubmit = (evt) => {
    console.log(this.state.events[0].users[0]);
    console.log(this.state);
    const data = {
      id_user: this.state.id_user,
      id_event: evt.currentTarget.getAttribute("id")
    }
    fetch("http://localhost:3000/api/insertSubscription",{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
   }).then(response => response.json()).then(response => {
      if (response != {}) {
         localStorage.setItem("loginSuccessful", response.user);
        //  this.props.history.push("/event");
        alert('Subscribed!!!');
        document.getElementById(data.id_event).style.backgroundColor = 'green';
        document.getElementById(data.id_event).innerText = 'Subscribed!';
      }
   });
    // console.log('nirshamta');
 };

 handleEvent = (evt) => {
  this.props.history.push("/insertEvent");
 }

  render() {
    //const { classes } = this.props;  


  return (
    <div>
    <Paper className="root">
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>Event Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Date Created</TableCell>
            <TableCell align="right">Text</TableCell>
            <TableCell align="right">Subscribe</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.events.map(row => {
            if(row.users.includes(localStorage.getItem("user_id"))) {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.Event_name}
                  </TableCell>
                  <TableCell align="right">{row.Date}</TableCell>
                  <TableCell align="right">{row.Address}</TableCell>
                  <TableCell align="right">{row.Date_created}</TableCell>
                  <TableCell align="right">{row.Text}</TableCell>
                  <TableCell align="right">
                   <EventButton style={this.state.styleEvent} value="Subscribed!" id={row._id}
                   
                   />
                  </TableCell>
  
                 
  
                </TableRow>
              );
            } else {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.Event_name}
                  </TableCell>
                  <TableCell align="right">{row.Date}</TableCell>
                  <TableCell align="right">{row.Address}</TableCell>
                  <TableCell align="right">{row.Date_created}</TableCell>
                  <TableCell align="right">{row.Text}</TableCell>
                  <TableCell align="right">
                   <EventButton value="Sing in" id={row._id} onClick={this.handleSubmit}
                   
                   />
                  </TableCell>
  
                 
  
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </Paper>
    <Button variant="contained" color="primary" className="addEventBtn" onClick={this.handleEvent}>
        Add Event
      </Button>
    </div>
  );
  }
}



export default Events;


// const rows = [
//   createData( 'Uziya Wedding', '1.2.2020', 'Via', '9.1.19', 'Mazal Tov')
// ];

// SimpleTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


// export default withStyles(styles)(SimpleTable);
// export default Event;
