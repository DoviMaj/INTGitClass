const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://MaxForToday1:buha123@ds121413.mlab.com:21413/chatDB';
const dbName = 'chatDB';
const client = new MongoClient(url);
let db;
const app = require('http').createServer(handler)
const io = require('socket.io')(app);

client.connect(function(err) {
  if (!err) {
  	  console.log("Connected successfully to server");
  	  
  } else {
  	console.log("err: ", err);
  }
});

let users = [];

app.listen(8888);

function handler (req, res) {
	res.end('Socket server');
}

io.on('connection', (socket) => {
	console.log("socket", socket.id);
	socket.emit('connectionStatus', {status: 'success'});
	socket.on('disconnect', function() {
     	console.log(`${socket.username} got disconnect!`);
     	const i = users.findIndex(u => u.username == socket.username);

      	users.splice(i, 1);
	});
	socket.on('register', (username) => {
		// add protection
		const alreadyRegistered = users.filter(u => u.username == username); 
		const usernames = users.map(u => u.username);
		if (alreadyRegistered.length > 0) {
			socket.emit("registerStatus", {status: 'failure', message: 'username already taken'});
		} else {
			socket.username = username;
			try {
				users.push(socket);
				const usernames = users.map(s => s.username);
				io.emit('userList', {usernames: usernames});
				socket.emit("registerStatus", {status: 'success', usernames: usernames});	
			} catch (e) {
				socket.emit("registerStatus", {status: 'failure'});	
			}
		}		
	});
	socket.on('newMessage', (obj) => {
		io.emit("gotNewMessage", {username: `${socket.username}`, text:`${obj.text}`});
	});
	socket.on('newPrivateMessage', (obj) => {
		console.log("obj", obj);
		if (!obj.to) {
			return;
		}
		let userToMessage = users.filter(u => u.username == obj.to);
		if (userToMessage) {
			userToMessage[0].emit('newPrivateMessageRecieved', {text: obj.message, from: socket.username});
		}
	})
})

// private chats
// 1. selectable user
// 2. new chat button
// 3. open a new chat window
// 4. send new message to the specific user (newPrivateMessage)
// {to: <username>, message: <text>}
