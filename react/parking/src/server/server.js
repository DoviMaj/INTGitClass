const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from '../client/components/Html';
import App from '../client/components/App';

var users = [
   {email: "abc@xyz.com", password:"123456", name:"abc"},
   {email: "def@xyz.com", password:"654321", name:"def"}
]

//app.use(express.static('public'));
app.use(bodyParser.json())

app.post('/login', (req, res) => {
   if (req.body) {
      const user = users.find(u => u.email == req.body.email && u.password == req.body.password);
      if (user) {
         res.json({email: user.email, name: user.name});
      } else {
         res.json({status: 'failure'});
      }
   } else {
      res.json({});
   }
});

app.get('/', (req, res) => {
  const appString = ReactDOM.renderToString(<App />);
   console.log("appString",appString);
   res.send(Html({
    body: appString,
    title: 'Hello World from the server'
  }));
});

app.listen(port);
console.log(`Server running on port ${port}`);
