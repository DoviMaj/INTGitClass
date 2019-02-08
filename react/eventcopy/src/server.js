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



app.use(express.static('dist'));
app.use(bodyParser.json());


app.post("/login", (req,res) => {
   let result={};
   if (req.body) {
      console.log("req.body", req.body);
       db.collection("users").find({"user_name": req.body.username, "password": req.body.password}).toArray((err, docs) => {
          console.log(docs);
          if (docs.length > 0){
            res.json({"username": docs[0].user_name, "user_id": docs[0]._id});
          }else{
            res.json(result);
          }
         
      })
   } else {
   res.status(401);
   res.json(result);
   }
});

app.get("/user", (req,res) => {

});

app.get('/api/events', (req, res) => {
  db.collection("event_collection").find().toArray((err, docs) => {
      res.json(docs);
   })
  
});

app.get('/api/getSubscription', (req, res) => {
   console.log("get subscription body = ", req.body);
   db.collection("event_subscription").find().toArray((err, docs) => {
       res.json(docs);
    })
   //  db.collection("event_collection").find({Event_number:"1"}).toArray((err,docs)=>{
   //     console.log ("event collection results " , docs);
   //  });
  




   
});
   
   

app.post('/api/insertEvent', (req, res) => {
   console.log("body", req.body);
   res.json({})
   db.collection("event_collection").insertOne( { Event_name: req.body.Event_name , Date: req.body.Date, Address: req.body.Address , Date_created: req.body.Date_created, Text: req.body.Text, users: [] } );
});

app.post('/api/insertUser', (req, res) => {
   console.log("body", req.body);
   res.json({})
   db.collection("users").insertOne( { user_name: req.body.user_name , first_name: req.body.first_name, last_name: req.body.last_name , password: req.body.password } );
});

app.post('/api/insertSubscription', (req, res) => {
   console.log("body", req.body);
   res.json({})
   db.collection("event_subscription").insertOne( { id_event: req.body.id_event , id_user: req.body.id_user } );
   var ObjectId = require('mongodb').ObjectID

   db.collection("event_collection").findAndModify(
      { _id : ObjectId(req.body.id_event)}, 
      [], 
      { $addToSet: { users: req.body.id_user } }, 
      { new:true }, 
      function(err, doc) {
         //handle err and doc
      });

});
// app.post('/api/insertusertoevent', (req, res) => {
//    console.log("body", req.body);
//    res.json({})

  
  
// });

app.get("*", (req, res) => res.sendFile(path.resolve("dist","index.html")));

app.listen(port, () => console.log(`Listening on port ${port}!`));
