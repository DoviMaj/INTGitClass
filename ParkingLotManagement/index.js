const client = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const express = require('express');
const app = express();
const port = 3000;
// mongodb stuff
const mongoUrl = 'mongodb://MaxForToday1:buha123@ds121413.mlab.com:21413/parkingLotDB';
let db;
var bodyParser = require('body-parser')


// client.connect(mongoUrl, function(err, client) {
//   const dbName = 'parkinglot';
//   console.log("Connected successfully to MongoDB server");
//   db = client.db(dbName);
// });

app.use(express.static('public'));
app.use(bodyParser.json())

app.post('/login', (req, res) => {
	if (req.body) {
		const usersCollection = db.collection('users');
		usersCollection.findOne({email: req.body.email, password: req.body.password}).then((result) => {
				if (result) {
					res.json({userid: result._id});
				} else {
					res.json({status: 'failure'});
				}
			
		})	
	} else {
		res.json({});
	}
});

app.get('/cars', (req, res) => {
	if(req.query && req.query.id) {
		const carsCollection = db.collection('cars');
		carsCollection.find({owner: ObjectID(req.query.id)}).toArray( function(err, docs) {
				res.json(docs);
		});
	} else {
		res.json({});
	}
});

app.post('/car', (req,res) => {
	if (req.body) {
		const carsCollection = db.collection('cars');
		carsCollection.update({carId:req.body.carId}, {
			color: req.body.color,
			type: req.body.type,
		}, {upsert:true}, (err,res) => {
			if (!err) {
				res.json({status: "success"});
			} else {
				res.json({status: "failure"});
			}
			
		});
	} else {
		res.json({});
	}
});

// app.get('/', (req, res) => {
// 	res.send('<b>Hello World!</b>')
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));