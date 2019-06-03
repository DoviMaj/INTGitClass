let counterElement = document.getElementById("numRes");
let counter = counterElement.value;
counterElement.addEventListener("change", (evt) => {
	counter = evt.currentTarget.value;
})


let orderElement = document.getElementById("checkBoxSort");
let order = orderElement.checked ? "1" : "-1";
orderElement.addEventListener("change", (evt) => {
	order = evt.currentTarget.checked ? "1" : "-1";
})

// search logic
// items logic 
// item click logic
// minutes to houres
var timeConvert = function(n){
	var minutes = n%60
	var hours = (n - minutes) / 60
	// return (hours + ":" + minutes);
	return (`${hours}:${minutes}`);
}


function randomMovies(movies) {
	movies.forEach(item => {
	contentDiv.innerHTML += `
	<div class="card-deck col col-md-3 boxElement">
		<div class="card">
			<div class="card-body">
				<h5 class="card-title cardTitleOverflow">${item.name}</h5>
				<img class="card-img-top" src="${item.image}"/>
				<span class="card-text floatRight">Time: ${timeConvert(item.length)}</span>
				<span class="card-text floatLeft">Rank: ${item.rank}</span>
				<span class="movieID hidden">${item._id}</span>
			</div>
		</div>
	</div>`
	});
	var cards = document.getElementsByClassName("card");
	for (var i =0; i< cards.length; i++) {
		cards[i].addEventListener("click", function(evt) {
			document.getElementById("exampleModalLabel").innerText=evt.currentTarget.getElementsByClassName("card-title")[0].innerText;
			document.getElementById("seatBtn").setAttribute("data-movieid", evt.currentTarget.getElementsByClassName("movieID")[0].innerText);
			$('#exampleModal').modal({})
			var goToMovie = document.getElementById('seatBtn');
			goToMovie.addEventListener('click', (evt) => {
				window.location.href=`/seats.html?id=${evt.currentTarget.getAttribute('data-movieid')
			}`
			})



		})
	}
}

//card boxes
var contentDiv = document.getElementById("rowDiv");
fetch("http://localhost:3000/movies").then(result => result.json()).then(moviesJson => randomMovies(moviesJson));

var searchInput = document.getElementById('textSearchMovies');
searchInput.addEventListener('keyup', (evt) => {
	var searchContent = evt.currentTarget.value;
	fetch(`http://localhost:3000/search?filter=${searchContent}`).then(result => result.json()).then(moviesJson => {
		contentDiv.innerHTML="";
		randomMovies(moviesJson)
	});
	if (searchContent == "") {
		contentDiv
	}
	// var newArray = movies.filter(a=> a.name.toLowerCase().indexOf(searchContent.toLowerCase()) > -1 );
	// contentDiv.innerHTML = '';
	// randomMovies(newArray);
})

// buttons
var topInput = document.getElementById("topMovie");
topInput.addEventListener("click", (evt) => {
	fetch(`http://localhost:3000/movies?sort=rank&count=${counter}&order=${order}`).then(result => result.json()).then(rankResult => {
		contentDiv.innerHTML="";
		randomMovies(rankResult)
	});
});

var lengthInput = document.getElementById("lengthMovie");
lengthInput.addEventListener("click", (evt) => {
	fetch(`http://localhost:3000/movies?sort=length&count=${counter}&order=${order}`).then(result => result.json()).then(rankResult => {
		contentDiv.innerHTML="";
		randomMovies(rankResult)
	});
});

var checkBoxInput = document.getElementById("checkBoxSort");
checkBoxInput.addEventListener("click", (evt) => {
	fetch(`http://localhost:3000/movies?sort=rank&count=${counter}&order=${order}`).then(result => result.json()).then(rankResult => {
		contentDiv.innerHTML="";
		randomMovies(rankResult)
	});
});




















