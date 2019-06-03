import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  createData(Event_name, Date, Address, Date_created, Text) {
    id += 1;
    return { id, Event_name, Date, Address, Date_created, Text };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/events')
      .then(res => res.json())
      .then(json => this.setState({events: json}));
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
            
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.events.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.Event_name}
                </TableCell>
                <TableCell align="right">{row.Date}</TableCell>
                <TableCell align="right">{row.Address}</TableCell>
                <TableCell align="right">{row.Date_created}</TableCell>
                <TableCell align="right">{row.Text}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    <Button variant="contained" color="primary" className="addEventBtn">
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
