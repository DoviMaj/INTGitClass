import React from "react";
import { Switch, Route } from 'react-router-dom';
import ParkingLogin from "./ParkingLogin";
import Dashboard from "./Dashboard";

const Main = (props) => {
   return (
      <Switch>
         <Route exact path='/' component={ParkingLogin}/>
         <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
   )
}

export default Main
