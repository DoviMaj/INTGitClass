import React, { Component } from "react";
import ReactInput from './ReactInput';
import ReactButton from './ReactButton';
import '../styles/Login.css';

class Login extends Component {
   state = {
      username:'',
      password:''
   }

   handleSubmit = (evt) => {
      alert("aaaaa");
   }

   handleChange = (evt) => {
      if (evt.currentTarget.getAttribute("type") == "text") {
         this.setState({username: evt.currentTarget.value});
      } else {
         this.setState({password: evt.currentTarget.value});
      }
   }

   render() {
      return (
         <div className="divLogin">
            <ReactInput type="text" placeholder="Email" onChange={this.handleChange}/>
            <ReactInput type="password" placeholder="Password" onChange={this.handleChange}/>
            <ReactButton value="Submit" onClick={this.handleSubmit}/>
         </div>
      )
   }
}

export default Login;
