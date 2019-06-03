import React from "react";
import { Switch, Route } from 'react-router-dom';
import ParkingLogin from "./ParkingLogin";
import Event from "./Event";
import Dashboard from "./Dashboard";
import InsertEvent from "./InsertEvent";

const Main = (props) => {

   return (
      <Switch>
         <Route exact path='/' component={ParkingLogin}/>
         <Route exact path='/dashboard' component={Dashboard}/>
         <Route exact path='/event' component={Event}/>
         <Route exact path='/insertEvent' component={InsertEvent}/>
      </Switch>
   )
}

export default Main
