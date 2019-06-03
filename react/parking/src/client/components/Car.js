import React, { Component } from "react";

class Car extends Component {
   state = {
      carId: '',
      carType: '',
      carColor: '',
      carSize: ''
   }

   handleCar = (evt) => {
      // 1. make an api call to localhost:3000 and verify that the username and password exists

      // fetch("/login", {
      //    method: "POST",
      //    body: JSON.stringify ;
      // });

   }

   handleCarType = (evt) => {
      // if (evt.currentTarget.getAttribute("type") == "text") {
      //    this.setState({carId: evt.currentTarget.value});
      // } else {
      //    this.setState({password: evt.currentTarget.value});
      // }
   }

   render() {
      return (
         <div className="divCar">
            <CarInput id={this.state.carId} type="text" placeholder="Car ID" onChange={this.handleCarType}/>
            <CarInput id={this.state.carType} type="text" placeholder="Car Type" onChange={this.handleCarType}/>
            <CarInput id={this.state.carColor} type="text" placeholder="Car Color" onChange={this.handleCarType}/>
            <CarInput id={this.state.carSize} type="text" placeholder="Car Size" onChange={this.handleCarType}/>
         </div>
      )
   }
}

export default Car;
