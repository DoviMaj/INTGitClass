const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// driver
const MongoClient = require('mongodb').MongoClient;
// specific url
const url = 'mongodb://maxUziya:maxUziya12@ds153974.mlab.com:53974/event_api';
const ObjectID = require('mongodb').ObjectID;
const dbName = 'event_api';
const client = new MongoClient(url);
const path = require("path");
let db;

// MongoClient.connect(url, function(err, db) {
//    console.log('connected');
//    // db.close();
// });

MongoClient.connect(url, function(err, client) {
   if (err) {
      console.log("err", err);
   }
   db = client.db('event_api');
   console.log("Connected succesfully to Mongo");
   // ------------------------
   db.collection("event_collection").find().toArray((err, docs) => {
      console.log("doc", docs);
   })
}); 

// app.get('/event', function(req,res) {
//     res.send("on book  page");
//     booksDetail.find({})
//     .exec(function(err, books) {
//         console.log("--working--");
//       if(err) {
//         res.send('error occured')
//         res.send('error occured')
//       } else {
//         console.log(books);
//         res.json(books);
//       }
//     });

// });

app.use(express.static('dist'));
app.use(bodyParser.json());


const users = [
   { user:"test@test.com", password: "1234", fullName: "Testy Test"},
   { user:"test2@test.com", password: "4321", fullName: "Tester Test"}
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

app.get('/api/events', (req, res) => {
  db.collection("event_collection").find().toArray((err, docs) => {
      res.json(docs);
   })
});

app.get('/insertEvent', (req, res) => {
  db.collection("event_collection").insertOne( { Event_name: 'max', Date: 'max', Address: 'max', Date_created: 'max', Text: 'max' } );
});

app.get("*", (req, res) => res.sendFile(path.resolve("dist","index.html")));

app.listen(port, () => console.log(`Listening on port ${port}!`));
