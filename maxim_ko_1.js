var results = [{
	"flavor" : "lemon",
	"rank": 5,
	"answers": 10
},
{
"flavor" : "lemon",
	"rank": 3,
	"answers": 2
},
{
"flavor" : "lemon",
	"rank": 4,
	"answers": 1
},
{
"flavor" : "strewberry",
	"rank": 1,
	"answers": 1
},
{
"flavor" : "strewberry",
	"rank": 3,
	"answers": 11
},
{
"flavor" : "chocolate",
	"rank": 5,
	"answers": 4
},
{
"flavor" : "vanilla",
	"rank": 4,
	"answers": 5
},
{
"flavor" : "banana",
	"rank": 3,
	"answers": 7
},
{
"flavor" : "nutella",
	"rank": 5,
	"answers": 3
},
{
"flavor" : "mint",
	"rank": 1,
	"answers": 8
}];

var task_names = results.filter((task) => {
	return task.flavor === "lemon"
		
});

console.log("task_names", task_names);

var sumAnswers = task_names.reduce((a,b) => {
	return (a.answers || a) + b.answers;
});

var sumRank = task_names.reduce((a,b) => {
	if (a.rank) {
		return (a.rank * a.answers) + (b.rank * b.answers); 
	} else {
		return a + (b.rank * b.answers); 
	}
});
var avarage = sumRank/sumAnswers;


console.log(sumAnswers);
console.log(sumRank);
console.log(avarage);


var all = [{
	flavor: "lemon",
	answers: sumAnswers,
	avarage: avarage
}];

console.table(all);

