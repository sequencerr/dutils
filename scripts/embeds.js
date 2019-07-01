function render() {
	document.getElementById('copyright').innerHTML = document
		.getElementById('copyright')
		.innerHTML.replace('{year}', new Date().getFullYear());
}
