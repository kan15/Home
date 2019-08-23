document.querySelector('.services-menu-item').onclick = function() {	
		dirScroll(document.querySelector('.services'), 0);
}

document.querySelector('.about-menu-item').onclick = function() {	
	dirScroll(document.querySelector('.aboutUs'), 0)
}

document.querySelector('.works-menu-item').onclick = function() {	
	dirScroll(document.querySelector('.latestWorks'), 0)
}

document.querySelector('.blog-menu-item').onclick = function() {	
	dirScroll(document.querySelector('.blogPosts'), 0)
}

document.querySelector('.clients-menu-item').onclick = function() {	
	dirScroll(document.querySelector('.companies'), 0)
}

document.querySelector('.contact-menu-item').onclick = function() {	
	dirScroll(document.querySelector('.getInTouch'), 0)
}


function dirScroll(el, pos) {
	if (pos < el.getBoundingClientRect().top) {
		scroll(el, 1 , pos)
	} else scroll(el, -1 , pos)
}

function scroll(el, direction, pos) {

	window.onscroll = function() {
		return false;
	}

	let requestAnimationFrame = window.requestAnimationFrame ||
								window.mozRequestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;

	const pageHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);

	let duration = 0,
		start = new Date().getTime();

	let fn = function() {
		let top = el.getBoundingClientRect().top - pos,
			now = new Date().getTime() - start,
			result = Math.round(top * now / duration);

		result = (result > direction * top) ? top : (result == 0) ? direction : result;

		if (direction * top > 0 && (pageHeight - window.pageYOffset) > direction * document.documentElement.clientHeight) {
			window.scrollBy(0,result);
			requestAnimationFrame(fn);
		}
	}
	requestAnimationFrame(fn);
}


if (document.documentElement.clientWidth < 576) {
	document.querySelectorAll('.post').forEach(function(item) {
		item.classList.remove('d-flex')
	})
}