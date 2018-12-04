
function getQueryParam(paramName) {
	let result ="";
	let params = window.location.href.split("?")[1];
	if (params) {
		let paramList = params.split("&");
		paramList.forEach(p => {
			let splittedParam = p.split("=");
			if (splittedParam[0] == paramName) {
				result= splittedParam[1];
			}
		})
	}
	return result;
}

function renderDisplay(data) {
	data = data[0];
	var contentElm = document.getElementById("content");
	contentElm.getElementsByTagName("h1")[0].innerText = data.movie.name;
	var seatsElm = contentElm.getElementsByClassName("seats")[0];
	data.chairs.forEach((s,i) => {
		seatsElm.innerHTML += `<div data-seatIndex="${i}" id="seat${i+1}" class="material-icons seat ${s==0 ? 'free' : 'occupid'}"><i class="material-icons">event_seat</i></div>`;
	})


	// document.getElementsByClassName("loader")[0].classList.add("animated");
	document.getElementById("content").classList.remove("hidden");
	document.getElementById("content").classList.add("animated");

}
let selectedSeats = [];
fetch(`http://localhost:3000/seats?id=${getQueryParam("id")}`).then(result => result.json())
.then(seatsObj => {
	
	renderDisplay(seatsObj);
	let seatsElements = document.getElementById("content").getElementsByClassName("seat");
	for (var i=0; i< seatsElements.length; i++) {
		seatsElements[i].onclick = (evt) => {
			let state = evt.currentTarget.classList[2];
			switch(state) {
				case "free":
					evt.currentTarget.classList.remove("free");
					evt.currentTarget.classList.add("occupid");
					selectedSeats.push(evt.currentTarget.getAttribute("data-seatIndex"));
					document.getElementById("submitBtn").classList.remove("hidden");
					break;
				case "occupid":
					evt.currentTarget.classList.remove("occupid");
					evt.currentTarget.classList.add("free");
					let selectedIndex = evt.currentTarget.getAttribute("data-seatIndex");
					let selectedIndexInArray = selectedSeats.findIndex(i => i == selectedIndex);
					if (selectedIndexInArray != null) {
						selectedSeats.splice(selectedIndexInArray,1);
					}


					let selectedCount = document.getElementsByClassName("occupid");
					if (selectedCount.length === 0) {
						document.getElementById("submitBtn").classList.add("hidden");
					}
					break;
				default:
					alert("This seat is already occupied!");
					break;

			}
		}
	}
	document.getElementById("submitBtn").onclick = (evt) => {
		let body = {
			id: getQueryParam("id"),
			selectedSeats: selectedSeats
		}

		fetch(`http://localhost:3000/seats`,{
			method:"POST",
			headers: {
            	"Content-Type": "application/json; charset=utf-8",
	        },
	        body: JSON.stringify(body)
		}).then(result => result.json())
		.then(responseObj => {
			if (responseObj.status === "ok") {
				let seatsElements = document.getElementById("content").getElementsByClassName("selected");
				while (seatsElements.length) {
					seatsElements[0].classList.replace("selected","occupid");
				}
			}
		});
	}
});