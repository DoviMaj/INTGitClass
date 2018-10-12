function getQueryParam(paramName) {
	let result = "";
	let params = window.location.href.split('?')[1];
	if (params) {
		let paramList = params.split('&');
		paramList.forEach(p => {
			let splitedParam = p.split('=');
			if (splitedParam[0] == paramName) {
				result = splitedParam[1];
			}
		})
	}
	return result;
}

function renderDisplay(data) {
	var contentElm = document.getElementById('content');
	contentElm.getElementsByTagName("h1")[0].innerText = data.name;
	contentElm = contentElm.getElementsByClassName('seats')[0];
	data.chairs.forEach((s,i) => {
		contentElm.innerHTML += `<div id="seat${i+1}" class="${s==0 ? 'free' : 'ocupid'}"><i class="material-icons">event_seat</i></div>`
	})

}

fetch(`http://localhost:3000/seats?id=${getQueryParam('id')}`).then(result => result.json()).then(seatsObj => {
	renderDisplay(seatsObj)
})