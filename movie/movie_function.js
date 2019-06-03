// search logic
// items logic 
// item click logic


// random array functions
var initiateArray = ((size) => {
	var arr = [];
	for (var i=0;i<size;i++) {
		arr[i] = Math.round(Math.random() * 1);
	}
	return arr;
})

// minutes to houres
var timeConvert = function(n){
	var minutes = n%60
	var hours = (n - minutes) / 60
	// return (hours + ":" + minutes);
	return (`${hours}:${minutes}`);
}

// data
var movies = [
	{
		name: "The Shawshank Redemption",
		length: timeConvert(144),
		id: "a1d944f9-7f0f-4eb3-a978-bd62329a9e9b",
		rank: 9.3,
		image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	},
	{
		name: "The Godfather",
		length: timeConvert(175),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc59",
		rank: 9.2,
		image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	},
	{
		name: "Godfather: Part II",
		length: timeConvert(202),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc60",
		rank: 9.0,
		image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	},
	{
	name: "The Dark Knight",
		length: timeConvert(152),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc60",
		rank: 9.0,
		image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	},
	{
		name: "Inception",
		length: timeConvert(148),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc61",
		rank: 8.8,
		image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	},
	{
		name: "Pulp Fiction",
		length: timeConvert(154),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc62",
		rank: 8.9,
		image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []	
	},
	{
		name: "Fight Club",
		length: timeConvert(139),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc63",
		rank: 8.8,
		image: "https://m.media-amazon.com/images/M/MV5BNGM2NjQxZTAtMmU5My00YTk5LWFmOWMtYjZlYzk4YzMwNjFlXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	},
	{	
		name: "Forrest Gump",
		length: timeConvert(142),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc64",
		rank: 8.8,
		image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []	
	},
	{
		name: "The usual suspects",
		length: timeConvert(106),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc65",
		rank: 8.6,
		image: "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	},
	{
		name: "27 Dresses",
		length: timeConvert(111),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc66",
		rank: 6.1,
		image: "https://m.media-amazon.com/images/M/MV5BMzI5OTM0OTg2MF5BMl5BanBnXkFtZTcwNjAyMTU1MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	},
	{
		name: "Avengers: Infinity War",
		length: timeConvert(149),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc67",
		rank: 8.7,
		image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	},
	{
		name: "The Meg",
		length: timeConvert(113),
		id: "b649cd6c-c5a5-40cf-be81-44de946cbc68",
		rank: 6.5,
		image: "https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
		vip_chairs: initiateArray(10),
		regular_chairs: initiateArray(30),
		comments: []
	}
	
]

function randomMovies(movies) {
	movies.forEach(item => {
	contentDiv.innerHTML += `
	<div class="card-deck col col-md-3 boxElement">
		<div class="card">
			<div class="card-body">
				<h5 class="card-title cardTitleOverflow">${item.name}</h5>
				<img class="card-img-top" src="${item.image}"/>
				<span class="card-text floatRight">Time: ${item.length}</span>
				<span class="card-text floatLeft">Rank: ${item.rank}</span>
			</div>
		</div>
	</div>`
	});
	var cards = document.getElementsByClassName("card");
	for (var i =0; i< cards.length; i++) {
		cards[i].addEventListener("click", function(evt) {
			document.getElementById("exampleModalLabel").innerText=evt.currentTarget.getElementsByClassName("card-title")[0].innerText;
			$('#exampleModal').modal({})

		})
	}
}

//card boxes
var contentDiv = document.getElementById("rowDiv");
randomMovies(movies);

var searchInput = document.getElementById('textSearchMovies');
searchInput.addEventListener('keyup', (evt) => {
	var searchContent = evt.currentTarget.value;
	var newArray = movies.filter(a=> a.name.toLowerCase().indexOf(searchContent.toLowerCase()) > -1 );
	contentDiv.innerHTML = '';
	randomMovies(newArray);
})

























