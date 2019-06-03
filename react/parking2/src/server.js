const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('dist'));
app.use(bodyParser.json());

const users = [
   { user:"test@test.com", password: "1234", fullName: "Testy Test"},
   { user:"test2@test.com", password: "4321", fullName: "Tester Test"}
]

const cars = [
   { id: "1234567", owner: "test@test.com"},
   { id: "7654321", owner: "test@test.com"}
]

app.post("/login", (req,res) => {
   let result={};
   if (req.body) {
      console.log("req.body", req.body);
      let item = users.find(u => u.user == req.body.username && u.password == req.body.password);
      if (item) {
         res.json({user: item.user})
      }
   }
   res.status(401);
   res.json(result);

});

app.get("/user", (req,res) => {
   
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
