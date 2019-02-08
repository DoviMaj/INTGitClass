import React from "react";
import { Switch, Route } from 'react-router-dom';
import EventLogin from "./EventLogin";
import Event from "./Event";

import InsertEvent from "./InsertEvent";
import insertUser from "./insertUser";

const Main = (props) => {

   return (
      <Switch>
         <Route exact path='/' component={EventLogin}/>
       
         <Route exact path='/event' component={Event}/>
         <Route exact path='/insertEvent' component={InsertEvent}/>
         <Route exact path='/insertUser' component={insertUser}/>
      </Switch>
   )
}

export default Main
