import React, { Component } from "react";
import Login from './Login';
import Car from './Car';


class App extends Component {
   render() {
      return (
         <div>
            <Login/>
            <Car/>
         </div>
      )
   }
}

export default App;
