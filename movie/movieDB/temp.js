var fs = require("fs");
console.log("hello user!, your deails are:");
fs.readFile('seats.json', (err,result) => {
	if (err) {
		console.log(`something went wrong ${err}`);
		return;
	}
	try {
		let obj = JSON.parse(result);
		console.log(`username ${obj.username}`);
		console.log(`password ${obj.password}`);
		console.log(`email ${obj.email}`);
	} catch (e) {
		console.log(`something went wrong with the file: ${e}`);
	}

	console.log('END');
});