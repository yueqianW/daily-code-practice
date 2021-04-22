

function debounce(fn, delay) {
	var timer;
	clearTimeout(timer);
	timer = setTimeout(function() {
		fn();
	}, delay);
}

document.onmousemove = () => {
	debounce(function() {
		console.log('------- test')
	}, 1000)
}