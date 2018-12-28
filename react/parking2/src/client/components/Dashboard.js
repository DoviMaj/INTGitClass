import React, { Component } from "react";
import ParkingAddCar from "./ParkingAddCar";

class Dashboard extends Component {
   constructor(props) {
      super(props);
      const isLoggedIn = localStorage.getItem("loginSuccessful");
      if (!isLoggedIn) {
         props.history.push("/");
      }
   }
   render() {
      return (
         <div>
         <h1>Hi {localStorage.getItem("loginSuccessful")}! </h1>
         <ParkingAddCar/>
         </div>
      )
   }
}

export default Dashboard;
