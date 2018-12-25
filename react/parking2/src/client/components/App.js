import React, { Component } from "react";
import Main from './Main';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
   render() {
      return (
         <div>
            <div id="header">
                <AppBar position="static">
                 <Toolbar>
                   <Typography variant="h6" color="inherit">
                     Parking System!
                   </Typography>
                 </Toolbar>
               </AppBar>
            </div>
            <div>
               <BrowserRouter>
                  <Main/>
               </BrowserRouter>
           </div>
         </div>
      )
   }
}

export default App;

