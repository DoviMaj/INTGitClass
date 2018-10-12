const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://MaxForToday1:buha123@ds121413.mlab.com:21413/movieapi';
const dbName = 'movieapi';
const client = new MongoClient(url);
let db;

function initiateDB() {
	db = client.db(dbName);
	const moviesCollection = db.collection('movies');
	const seatsCollection = db.collection('seats');

	moviesCollection.count(function(err, result) {
		if (result == 0) {
			const movieList = require('./movies');
			moviesCollection.insertMany(movieList, function(err, res) {
				if (!err) {
					console.log("inserted movies documnts!");
				}
			});
		} else {
			console.log("movies already exists");
		}
	});

	seatsCollection.count(function(err, result) {
		if (result == 0) {
			const seatsList = require('./seats');
			seatsCollection.insertMany(seatsList, function(err, res) {
				if (!err) {
					console.log("inserted seats documnts!");
				}
			});
		} else {
			console.log("seats already exists");
		}
	});
}

client.connect(function(err) {
  if (!err) {
  	  console.log("Connected successfully to server");
  	  initiateDB();
  } else {
  	console.log("err: ", err);
  }
});



/* 
	1. take out the logic of search from /movies and add it to /search V
	2. movies endpoint should be able to handle top=X. V
	3. search endpoint should take top into considration.
	4. movies endpoint should support orderBy=X. possible values:
		* rank
		* length
		by default its desecnding (big -> small)
	5. movies endpoint shuold support order=X. possible values:
		* asc (small -> big)
		* desc (big -> small)
*/

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/movies', function (req, res) {
	const moviesCollection = db.collection('movies');

	if (req.query.sort) {
		let sortParam = req.query.sort;
		let sortObj = {};
		let counter = parseInt(req.query.count) || 12;
		let order = parseInt(req.query.order) || -1;

		if (typeof sortParam == "string") {
			sortParam = [sortParam];
		}

		sortParam.forEach(s => {
			sortObj[s] = order;
		})

		moviesCollection.find().sort(sortObj).limit(counter).toArray((err,result) => {
			res.json(result);
		})
	} else {
		moviesCollection.find({}).toArray((err,result) => {
			res.json(result);
		});	
	}
})


app.get('/search', function (req,res) {
	if (req.query.filter) {
		const moviesCollection = db.collection('movies');
		moviesCollection.find({"name": {'$regex' : req.query.filter, '$options' : 'i'}}).toArray((err, result) => {
			res.json(result);
		});
	} else {
		res.json({});
	}
})

app.get('/rank', function(req,res) {
	const moviesCollection = db.collection('movies');


	if (req.query.order) {
		let orderBy = req.query.order == "desc" ? -1 : 1;
		moviesCollection.find().sort({rank:orderBy}).limit(5).toArray((err,result) => {
			res.json(result);
		})

	} else if (req.query.length) {
		moviesCollection.find().sort({rank:-1, length: 1}).limit(5).toArray((err,result) => {
			res.json(result);
		})
	} else {
		moviesCollection.find().sort({rank:-1}).limit(5).toArray((err,result) => {
			res.json(result);
		})
	}

	// if no query is passed - bring the top 5 ranked movies
	// can get the following query params:
	// order - desc (default) / asc (bottom to top)
	// length - 
	// add 3 buttons to the display: Top, Worst, Length
});

app.get('/seats', function (req, res) {
	if (req.query.id) {
		let seatsArray = seatsList.filter(seat => seat.id == req.query.id);
		if (seatsArray) {
			let movieObj = movieList.filter(movie => movie.id == req.query.id);
			let combined = Object.assign(movieObj[0],seatsArray[0]); // one object thanks to Uzia			
			res.json(combined);
		}

	}
	res.json({});
})

app.post('/seats', function (req, res) {
	if (req.body) {
		let isValid = true;
		let seats = seatsList.filter(s => s.id == req.body.id);

		// performing validation
		req.body.selectedSeats.forEach(s => {
			if (seats[0].chairs[s] === 1) {
				isValid = false;
			}
		})
		if (!isValid) {
			res.status(403);
			res.json({status: "invalid"})
		}

		// everything is ok!
		req.body.selectedSeats.forEach(s => {
			seats[0].chairs[s] = 1;
		});

		res.json({status: "ok"})
	}
})
 
app.listen(3000)